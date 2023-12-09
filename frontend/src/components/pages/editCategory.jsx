import { React, useState }  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Alert } from 'react-bootstrap';


function EditCategory(props) {
    const [edit, setEdit] = useState(props.bool);
    const [cName, setCName] = useState('');
    const [error, setError] = useState(<></>);
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();


    const handleEditClose = () => {
        setEdit(false);
        window.location.href= '/categories';
    };
    
    const handleEditShow = () => setEdit(true);
    const params = useParams();
    const cID = params.id;
    console.log(cID);

    //query cat
    const catQuery = useQuery({
      queryKey: ['catQuery'],
      queryFn: async () => {
        return axios.get(`http://localhost:8000/api/getCategory?categID=${cID}`)
        .then((res) => {
          setCName(res.data.name)
          return res.data;})
      }
    })
    
    const editC = () => {
      let data = {};
      data.categID = cID;
      data.name = cName;
      console.log(data)

      axios.put('http://localhost:8000/api/editCategory', data)
      .then((res) => {
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
          setEdit(false);
          window.location.href= '/categories';
        }
      })
    }

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

        <Modal show={edit} onHide={handleEditClose}>
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
                    defaultValue={catQuery?.data?.name}
                    onChange={(e) => setCName(e.target.value)}
                  />
                </Form.Group>
                
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" className="rounded-4" onClick={handleEditClose}>
                Close
              </Button>
              <Button type="submit" onClick={() => editC()} className="btn-main">
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </>
  )
}

export default EditCategory;
