import { React, useState }  from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import EditCategory from './editCategory';
import { Alert } from 'react-bootstrap';



function Categories() {
    const params = useParams();
    const [show, setShow] = useState(false);
    const [catName, setCatName] = useState('');
    const [error, setError] = useState(<></>);
    const [showError, setShowError] = useState(false);
    const [cats, setCats] = useState([]);

    const history = useNavigate();


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const {register, handleSubmit} = useForm();
    const onSubmit = () => { 
      // insert add category
      let data = {};
      data.name = catName;

      axios({
        method: 'post',
        url: `http://localhost:8000/api/makeCategory`,
        data: data
      }).then((res) => {
        console.log(res)
        if (res.data.hasOwnProperty('error')){
          let errors = <></>;
          errors = 
          <>
            {
              <Alert varient='error'> {res.data.error} </Alert>

            }
          </>
          setError(errors);
          setShowError(true);
        } else {
          
          let newCateg = res.data.result;
          console.log(newCateg);
          history('/categories');
          let newArray = cats;
          newArray.push(newCateg);
          setCats(newArray);
          setShow(false);
        }
      })
    }

    const deleteCategory = (categID) => {
      axios.delete(`http://localhost:8000/api/deleteCategory?categID=${categID}`)
      .then(() => {
        let newArray = cats.filter((cat) => cat.id !== categID)
        setCats(newArray);
        setShow(false);
      })
    }

    const catQuery = useQuery({
    queryKey: ['category'],
    queryFn: async () => {
        return axios.get('http://localhost:8000/api/getCategories')
        .then(res => {
          setCats(res.data)
          return res.data})
    }
    })

    if (catQuery.isFetching && catQuery.isRefetching && !catQuery.isError){
        return (
            <h3 className='m-4'>Loading data...</h3>
        )
    }

    if (catQuery.data?.length >= 1)
    return (
      <>
          {/* Error modals */}
          <Modal show={showError} onHide={() => setShowError(false)}>
            <Modal.Header closeButton onClick={() => setShowError(false)}>
              <Modal.Title>Errors</Modal.Title>
            </Modal.Header>
              <Modal.Body>
                {error}
              </Modal.Body>
          </Modal>

          <Container>
          <div className='d-flex justify-content-between'>
            <h1 className='page-title my-5'>Manage categories</h1>
            <div className='d-flex align-items-center'>
                <Button className='btn-lg btn-main' onClick={handleShow}>
                  <i className='me-1 bi-plus-lg'></i>
                  Add category
                </Button>
            </div>
          </div>

            <Table className='open-sans w-50 mx-auto' hover>
            <thead>
              <tr className='inter'>
                <th></th>
                <th>Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {
              cats.map((cat) => 
              <tr key={cat.id}>
                <th>{cat.id}</th>
                <td>{cat.name}</td>
                <td>
                  <div className='d-flex'>
                      <Button 
                        onClick={ () => 
                          window.location.href= `/categories/${cat.id}/Edit/true` 
                        } 
                          className='d-flex btn-edit m-1 rounded-4'>Edit</Button>
                     
                      <Link onClick={() => {deleteCategory(cat.id)}} className='d-flex btn btn-danger m-1 rounded-4'>Delete</Link>
                    </div>
                </td>
              </tr>
              
              )
            }
            </tbody>
            </Table>
  
          </Container>

            {/* Add category */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3"  controlId="name">
                  <Form.Label><b>Category</b></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    autoFocus
                    onChange={(e) => setCatName(e.target.value)}
                  />
                </Form.Group>
                
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" className="rounded-4" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" onClick={() => {onSubmit()}} className="btn-main">
                Save
              </Button>
            </Modal.Footer>
          </Modal>


          {/* Edit category */}
            <EditCategory 
              bool = {params.bool}
            />

  
      </>
    )

  }
  
  export default Categories;