import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from "moment";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Alert, Dropdown, Modal } from 'react-bootstrap';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

const currentDate = moment().utcOffset('+08:00').format('MM/DD/YYYY');

function FormGroup(props) {
  const {register} = useFormContext();
  const isViewAndNormal = props.viewType === 'View' && props.id !== 'description' && props.id !== 'dateTimeAppointed';
  const isViewAndDesc = props.viewType === 'View' && props.id === 'description';
  const isViewAndDate = props.viewType === 'View' && props.id === 'dateTimeAppointed';
  const notViewAndDesc = props.viewType !== 'View' && props.id === 'description';
  const notViewAndTime = props.viewType !== 'View' && props.id === 'dateTimeAppointed';

  let finalContent = '';
  if (props.id === 'dateTimeAppointed'){
    finalContent = moment(props.content).format('YYYY-MM-DD').toString();
  } else {
    finalContent = props.content;
  }
  return (
    <Form.Group as={Col} controlId={props.id}>
      <Form.Label><b>{props.name}</b></Form.Label>
      {
        (isViewAndNormal) ? (
          <Form.Control as='textarea' readOnly defaultValue={finalContent} type={props.type} />
          ) : (isViewAndDesc) ? (
            <Form.Control readOnly style={{minHeight: '50vh'}} as='textarea' defaultValue={finalContent} type={props.type} />
            ) : (isViewAndDate) ? (
              <Form.Control readOnly defaultValue={finalContent} type={props.type} />
              ) : (notViewAndDesc) ? (
              <Form.Control style={{minHeight: '50vh'}} {...register(`${props.id}`)} as='textarea' defaultValue={finalContent} type={props.type} placeholder={props.name} />
              ) : (notViewAndTime) ? (
                <Form.Control {...register(`${props.id}`)} defaultValue={finalContent} type={props.type} placeholder={props.name} required/>
                ) : (
            <Form.Control as='textarea' {...register(`${props.id}`)} defaultValue={finalContent} type={props.type} placeholder={props.name} required/>
            ) 
      }

    </Form.Group>
  )
}


function AddEditAppointment() {
  const params = useParams();
  let viewType = params.mode;

  const history = useNavigate();

  const methods = useForm();
  const {handleSubmit, register, errors} = methods;

  const [error, setError] = useState(<></>);
  const [showError, setShowError] = useState(false);
  const [customerName, setCustomerName] = useState('Select Customer Name');

  let operation = '';
  let request = '';
  
  if (viewType === 'Edit'){
    operation = 'edit';
    request = 'put'
  } else if (viewType === 'Add'){
    operation = 'make';
    request = 'post';
  }

  //Customers Query
  const customerQuery = useQuery({
    enabled: viewType === 'Add' || viewType === 'Edit',
    queryKey: ['customerQuery'],
    queryFn: async () => {
      return axios.get('http://localhost:8000/api/getAllCustomer')
      .then((res) => {
        console.log(res.data.result);
        return res.data;
      })
    }
  })
  //Submitting data
  const onSubmit = (data) => {
    //Adjusting date
    let tempDate = data.dateTimeAppointed;
    let newDate = moment(tempDate).format('MM/DD/YYYY');
    data.dateTimeAppointed = newDate;
    data.customerName = customerName;

    //Adjusting number values
    let newCost = Number(data.cost).toFixed(2);
    data.cost = newCost;
    data.id = params.id;
    console.log(data);

    data.ongoing = data.ongoing === 'true' ? true : false;

    if(customerName === 'Select Customer Name'){ 
      let errors = <></>;
      errors = 
      <>
        {
          <Alert variant='error'> Select a Customer </Alert>
        
        }
      </>
      setError(errors);
      setShowError(true);
      return;
      }

    axios({
      method: request,
      url: `http://localhost:8000/api/${operation}Appointment`,
      data: data
    })
    .then(res => {
      console.log(res.data.errors);
      if (res.data.errors instanceof Array === false){
          history('/appointments');
      } else {
        let errors = <></>;
        errors = 
        <>
          {
            res.data.errors.map((error) => {
              return <Alert variant='error'> {error} </Alert>
            })
          }
        </>
        setError(errors);
        setShowError(true);
        }})
  }

  //Query for Appointment
  const appointmentQuery = useQuery({
    enabled: params.mode === 'Edit' || params.mode === 'View',
    queryKey: ['apppointmentQuery'],
    queryFn: async () => {
      return axios.get(`http://localhost:8000/api/appointment?apID=${params.id}`)
      .then((res) => {
        setCustomerName(res.data.Appointment.customer.name)
        console.log(res.data);
        return res.data})
    }
  })

   //Querying Display
   if (appointmentQuery.isFetching || appointmentQuery.isRefetching){
    return (
      <Container className='open-sans'>
        <div className='form-style'>
          <h1 className='page-title my-5'> Loading Appointment Data </h1>
        </div>
      </Container>
    )
  } else if (appointmentQuery.isError || appointmentQuery.isError){
    return(
      <Container className='open-sans'>
        <div className='form-style'>
          <h1 className='page-title my-5'> Error Fetching Appointment Data </h1>
        </div>
      </Container>
    )
  }

  return (
    <>  
    <Container>
    <h1 className='page-title my-5'>{params.mode} appointment</h1>

    <div className='form-style'>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className='mb-4 gx-5'>
        { viewType === 'Edit' || viewType === 'Add' ? (
        <>
        <h3 className='page-title'> Select Customer </h3>
        <Dropdown className='mt-1 mb-4'> 
          <Dropdown.Toggle variant='success'>
            {customerName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {
              customerQuery?.data?.map((customer) => {
              return <Dropdown.Item onClick={(e) => {
                setCustomerName(e.target.innerHTML);
                  }
                }
              > 
                {customer.name}
                </Dropdown.Item>
              })
            }
          </Dropdown.Menu>
        </Dropdown>
        </>
        ) : (
            <FormGroup 
            name = "Customer Name"
            id = "customerName"
            type = "text"
            content = {appointmentQuery?.data?.Appointment?.customer?.name}
            viewType = {viewType}
          />
              )}
        <FormGroup 
          name = "Category"
          id = "category"
          type = "text"
          content = {viewType === 'Add' ? '' : appointmentQuery?.data?.Appointment?.category}
          viewType = {viewType}
        />
      </Row>
      <Row className='mb-4 gx-5'>
        <FormGroup 
          name = "Appointment Name"
          id = "name"
          type = "text"
          content = {viewType === 'Add' ? '' : appointmentQuery?.data?.Appointment?.name}
          viewType = {viewType}
        />

        {
          viewType !== 'Add' ? (
            <>
              <Form.Group as={Col} controlId="classification">
              <Form.Label><b>Ongoing</b></Form.Label>
              <Form.Select {...register('ongoing')} defaultValue={appointmentQuery?.data?.Appointment?.ongoing === true ? 'true' : 'false'}>
              {viewType === 'Edit' ? 
              (
              <>
                <option value={true}>true</option>
                <option value={false}>false</option>
              </>) : (<option selected={true} value={appointmentQuery?.data?.Appointment?.ongoing === true ? false : true}> {appointmentQuery?.data?.Appointment?.ongoing === true ? 'true' : 'false'} </option>)}
            </Form.Select>
          </Form.Group>
            </>
          ) : (<></>)
        }
        
        
        
        
      </Row>
      <Row className='mb-4 gx-5'>
        <FormGroup 
          name = "Description"
          id = "description"
          type = "text"
          content = {viewType === 'Add' ? '' : appointmentQuery?.data?.Appointment?.description}
          viewType = {viewType}
        />
        <FormGroup 
          name = "Appointment Date"
          id = "dateTimeAppointed"
          type = "date"
          content = {viewType === 'Add' ? '' : appointmentQuery?.data?.Appointment?.dateTimeAppointed}
          viewType = {viewType}
        />
        <FormGroup 
          name = "Cost"
          id = "cost"
          type = "number"
          content = {viewType === 'Add' ? '' : appointmentQuery?.data?.Appointment?.cost}
          viewType = {viewType}
        />
      </Row>
      <div className='d-flex justify-content-end'>
          <Link to='/appointments' className='btn btn-secondary m-1 px-3 rounded-4 mt-4'>
            <i className='bi-arrow-left me-1'></i>
            Back
            </Link>

        {
          params.mode === 'Edit' || params.mode === 'Add' ? (
            <Button type='submit' className='btn-view m-1 px-3 rounded-4 mt-4'>
              Submit
            </Button>
          ) : (<></>)
        }

        {/* For the Error results */}
      <Modal show={showError} onHide={() => setShowError(false)}>
        <Modal.Header closeButton onClick={() => setShowError(false)}>
          <Modal.Title>Errors</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            {error}
          </Modal.Body>
      </Modal>

      </div>
      </Form>
    </FormProvider>
  </div>
    

    </Container>

    </>
  )
}

export default AddEditAppointment;
