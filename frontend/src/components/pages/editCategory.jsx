import { React, useState }  from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';


function EditCategory(props) {
    const [edit, setEdit] = useState(props.bool);
    const handleEditClose = () => {
        setEdit(false);
        window.location.href= '/categories';
    };
    
    const handleEditShow = () => setEdit(true);
    const params = useParams();

    return (
    
        <>
        <Modal show={edit} onHide={handleEditClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>{params.mode} Category {params.id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label><b>Category</b></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="props.id.name"
                    autoFocus
                  />
                </Form.Group>
                
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" className="rounded-4" onClick={handleEditClose}>
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

export default EditCategory;
