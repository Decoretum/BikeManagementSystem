import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { Alert } from 'react-bootstrap';

function FormGroup(props) {
  const {register} = useFormContext();
  const isView = props.viewType === 'View';
  let finalContent = '';

  if (props.content instanceof Array){
    if (props.id === 'colors'){
      for (let i = 0; i < props.content.length; i++){
        if (i === props.content.length - 1){
          finalContent += props.content[i].name;
        } else {
          finalContent += props.content[i].name + ', ';
        }
      }
    } else if (props.id === 'categories'){
      for (let i = 0; i < props.content.length; i++){
        if (i === props.content.length - 1){
          finalContent += props.content[i].categories.name;
        } else {
          finalContent += props.content[i].categories.name + ', ';
        }
      }
    }
  } else {
    finalContent = props.content;
  }

  return (
    <Form.Group as={Col} controlId={props.id}>
      <Form.Label><b>{props.name}</b></Form.Label>
      {
        isView && props.id !== 'description' ? (
          <Form.Control readOnly defaultValue={finalContent} type={props.type} />
          ) : (isView && props.id === 'description') ? (
            <Form.Control readOnly style={{minHeight: '50vh'}} as='textarea' defaultValue={finalContent} type={props.type} />
            ) : (!isView && props.id === 'description') ? (
              <Form.Control style={{minHeight: '50vh'}} {...register(`${props.id}`)} as='textarea' defaultValue={finalContent} type={props.type} placeholder={props.name} required/>
              ) : (
            <Form.Control as='textarea' {...register(`${props.id}`)} defaultValue={finalContent} type={props.type} placeholder={props.name} required/>
            ) 
      }
    </Form.Group>
  )
}




function AddEditBike() {
  const params = useParams();
  const bikeID = Number(params.id);
  const viewType = params.mode;

  const [show, setShow] = useState(false);
  const [cat, setCat] = useState([]);
  const [error, setError] = useState(<></>);
  const [showError, setShowError] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const methods = useForm();
  const {handleSubmit, register, errors} = methods;

  let history = useNavigate();

  //Checks checkbox change
  function checkChange(value, isChecked){
        if (isChecked){
            setCat([...cat, value])
        } else {
            setCat(cat.filter((category) => category !== value))
        }
    }

  //Submitting an Add or Edit Bike Request
  const onSubmit = (data) => {
    // String to array
    let oldColors = data['colors'];
    let newColors = oldColors.split(", ")
    data.colors = newColors;

    //Fixing Color array
    const newArray2 = data['colors'].filter((n) => n !== '');
    data.colors = newArray2;

    //Categories Array
    data.category = cat;

    //bikeID
    data.id = bikeID;

    console.log(data);

    //Trim Strings
    data.description = data.description.trim();
    data.name = data.name.trim();
    data.wheelSize = data.wheelSize.trim();

    //Decimal validation
    if (data.stock.toString().includes('.')){
      let errors = <></>;
      errors = 
      <>
        <Alert varient='error'> Stock cannot be a decimal </Alert>
      </>
      setError(errors);
      setShowError(true);
      return;
    }

    let operation = '';
    let request = '';
    
    if (viewType === 'Edit'){
      operation = 'edit';
      request = 'put'
    } else if (viewType === 'Add'){
      operation = 'make';
      request = 'post';
    }

    axios({
      method: request,
      url: `http://localhost:8000/api/${operation}Bike`,
      data: data
    })
    .then(res => {
      console.log(res.data);
      if (res.data.result instanceof Array === false){
          history('/bikes');
      } else {
        let errors = <></>;
        errors = 
        <>
          {
            res.data.result.map((error) => {
              return <Alert varient='error'> {error} </Alert>
            })
          }
        </>
        setError(errors);
        setShowError(true);
      }
    })
  }
  
  //Queries
  
  //For Editing or Viewing 
  const bikeQuery = useQuery({
    queryKey: ['bikeData'],
    enabled: viewType !== 'Add',
    queryFn: async () => {
      return axios.get(`http://localhost:8000/api/getBike?bikeID=${bikeID}`)
      .then(
        res => {
            for (let i of res.data.bikeCategories){
              setCat(cat => [...cat, i.categories.name])
            }
          
          return res.data}
      )
    }
  })

 //For View/Edit/Add
  const categoryQuery = useQuery({
  queryKey: ['categoryData'],
  enabled: viewType === 'Edit' || viewType === 'Add',
  queryFn: async () => {
    return axios.get(`http://localhost:8000/api/getCategories`)
    .then(
      res => {
        return res.data}
    )
  }
})
  

  //Querying Display
  if (((bikeQuery.isFetching || bikeQuery.isRefetching) || (categoryQuery.isFetching || categoryQuery.isRefetching))){
    return (
      <Container className='open-sans'>
        <div className='form-style'>
          <h1 className='page-title my-5'> Loading Bike and Category Data </h1>
        </div>
      </Container>
    )
  } else if (bikeQuery.isError || categoryQuery.isError){
    return(
      <Container className='open-sans'>
        <div className='form-style'>
          <h1 className='page-title my-5'> Error Fetching Bike and Category Data </h1>
        </div>
      </Container>
    )
  }

  return (
    <>  
        <Container className='open-sans'>
        <h1 className='page-title my-5'>{params.mode} bike</h1>

        <div className='form-style'>
          <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className='mb-4 gx-5'>
              <FormGroup 
                name = "Name"
                id = "name"
                type = "text"
                content = {viewType === 'Add' ? '' : bikeQuery?.data?.name}
                viewType = {viewType}
              />
              <FormGroup 
                name = "Stock"
                id = "stock"
                type = "number"
                content = {viewType === 'Add' ? '' : bikeQuery?.data?.stock}
                viewType = {viewType}
              />
            </Row>
            <Row className='mb-4 gx-5'>
              <FormGroup 
                name = "Description"
                id = "description"
                type = "text"
                content = {viewType === 'Add' ? '' : bikeQuery?.data?.description}
                viewType = {viewType}
              />
              <FormGroup 
                name = "Colors"
                id = "colors"
                type = "text"
                content = {viewType === 'Add' ? '' : bikeQuery?.data?.bikeColors}
                viewType = {viewType}
              />
          
            </Row>
            <Row className='mb-4 gx-5'>
              <FormGroup 
                name = "Price"
                id = "price"
                type = "number"
                content = {viewType === 'Add' ? '' : bikeQuery?.data?.price}
                viewType = {viewType}
              />
              <FormGroup 
                name = "Wheel Size"
                id = "wheelSize"
                type = "text"
                content = {viewType === 'Add' ? '' : bikeQuery?.data?.wheelSize}
                viewType = {viewType}
              />
            </Row>
            {
              viewType === 'View' ? (
                <FormGroup 
                name = "Categories"
                id = "categories"
                type = "text"
                content = {viewType === 'Add' ? '' : bikeQuery?.data?.bikeCategories}
                viewType = {viewType}
              />
              ) : (<></>)
            }

      {
      viewType === 'Edit' || viewType === 'Add' ? (
      <Button variant="primary" onClick={handleShow}>
        Select Categories
      </Button>) : (<></>)
      }
      

      {/* Modals */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Categories</Modal.Title>
        </Modal.Header>
          <Modal.Body>

          {/* Checkboxes */}
          {
            categoryQuery?.data?.map((category) => {
              return (
              <>
                <div key={category.id} className='mb-3'> 
                  {
                    cat.includes(category.name) ? (
                      <Form.Check
                      checked
                      type={'checkbox'}
                      onChange={(event) => {checkChange(category.name, event.target.checked)}}
                      label={category.name}
                      />
                    ) : (
                      <Form.Check
                      type={'checkbox'}
                      onChange={(event) => {checkChange(category.name, event.target.checked)}}
                      label={category.name}
                      />
                    )
                  }
                </div>
              </>
              )
            })
          }      
          </Modal.Body>
      </Modal>

      {/* For the Error results */}
      <Modal show={showError} onHide={() => setShowError(false)}>
        <Modal.Header closeButton onClick={() => setShowError(false)}>
          <Modal.Title>Errors</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            {error}
          </Modal.Body>
      </Modal>

            <div className='d-flex justify-content-end'>
              <Link to='/bikes' className='btn btn-secondary m-1 px-3 rounded-4 mt-4 me-3'>
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
              
              
            </div>
            
          </Form>
          </FormProvider>
        </div>
        
        </Container>
    
    </>
  )
}

export default AddEditBike;
