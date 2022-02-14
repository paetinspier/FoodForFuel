import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
//import BerriesIMG from './images/BerriesImg.png';
import CuttingBoard from './images/foodImg.jpeg';
import {Form, FormControl, InputGroup} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


function Body () {
    const [show, setShow] = useState(false);

    const showCancel = () => setShow(false);
    const showConfirm = () => setShow(true);

    return(
        <div style={{paddingTop: '5%'}}>
            <Container>
                <Row>
                    <Col>
                        <Stack>
                            <div>
                                <h1>Good health starts with what your eat.</h1>
                            </div>
                            <div>
                                <p>Want to eat more mindfully? Track meals, learn about your habits, and reach your goals with FoodForFuel.</p>
                            </div>
                            <Button onClick={showConfirm}>START FOR FREE</Button>
                        </Stack>
                    </Col>
                    <Col><Image src={CuttingBoard} className='img-fluid rounded'></Image></Col>
                </Row>
            </Container>

            <Modal show={show} onHide={showCancel} aria-labelledby="contained-modal-title-vcenter"
      centered>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Name</InputGroup.Text>
                        <FormControl aria-label='First name' placeholder='First'/>
                        <FormControl aria-label='Last name' placeholder='last'/>
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Birthday</InputGroup.Text>
                        <FormControl aria-label='01' placeholder='01'/>
                        <FormControl aria-label='01' placeholder='01'/>
                        <FormControl aria-label='01' placeholder='2000'/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                        <FormControl placeholder="email@example.com" aria-label="email" aria-describedby="basic-addon1"/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                        <FormControl placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
                        <Form.Text muted>Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</Form.Text>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Re-enter password</InputGroup.Text>
                        <FormControl placeholder="" aria-label="confirm password" aria-describedby="basic-addon1"/>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">SIGN UP</Button>
                </Modal.Footer>

            </Modal>            

        </div>
    );
}

export default Body;