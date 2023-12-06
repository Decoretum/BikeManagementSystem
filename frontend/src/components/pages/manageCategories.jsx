import { React, useState }  from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import EditCategory from './editCategory';


function BreadcrumbBar() {
  return (
    <Breadcrumb className='mt-4'>
        <Link to="/categories" className="breadcrumb-item active">Categories</Link>
    </Breadcrumb>
  );
}

function Categories() {
    const params = useParams();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => { 
      // insert add category
    }

    const catQuery = useQuery({
    queryKey: ['category'],
    queryFn: async () => {
        return axios.get('http://localhost:8000/api/getCategories')
        .then(res => {return res.data})
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
          <Container>
          <BreadcrumbBar />
          <div className='d-flex justify-content-between'>
            <h1 className='page-title mt-1 mb-5'>Manage categories</h1>
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
              catQuery.data?.map((cat) => 
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
                     
                      <Link to={`/categories/cat/delete/${cat.id}`} className='d-flex btn btn-danger m-1 rounded-4'>Delete</Link>
                    </div>
                </td>
              </tr>
              
              )
            }
            </tbody>
            </Table>
  
          </Container>

            {/* Add category */}
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Add Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label><b>Category</b></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    autoFocus
                  />
                </Form.Group>
                
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" className="rounded-4" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" className="btn-main">
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
    else {
      return (
          <>
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

              <h3 className='inter'>No categories added in the application.</h3>
              </Container>

               {/* Add category */}
              <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label><b>Category</b></Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        autoFocus
                      />
                    </Form.Group>
                    
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" className="rounded-4" onClick={handleClose}>
                    Close
                  </Button>
                  <Button type="submit" className="btn-main">
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>

          </>
      )
    }

  }
  
  export default Categories;