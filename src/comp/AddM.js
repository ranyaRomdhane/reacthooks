
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function AddM({ movies, setmovies }) {
    const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newmovie, setnewmovie] = useState({
        name:"",
      posterurl:"",
        rating:0,
    });

   const handleAdd = () =>{
    setmovies([...movies, newmovie]);
   };
  return (
    <>
      <Button variant="light" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie name</Form.Label>
        <Form.Control type="text" placeholder="Enter movie name" onChange={(e)=>setnewmovie({...newmovie,name:e.target.value})} />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie image</Form.Label>
        <Form.Control type="text" placeholder="Enter movie image" onChange={(e)=>setnewmovie({...newmovie,posterurl:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>rating</Form.Label>
        <Form.Control type="text" placeholder="Enter movie rating" onChange={(e)=>setnewmovie({...newmovie,rating:e.target.value})} />
      </Form.Group>

    </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            handleAdd()
            handleClose()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddM