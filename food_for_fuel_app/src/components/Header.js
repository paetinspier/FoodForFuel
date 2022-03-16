import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Logo from './images/logo.png';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {FormControl} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import { Outlet, Link } from "react-router-dom";

function Header () {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    <div className="Header">
        <Container style={{width: '100%'}} className="block-example border-bottom border-dark">
            <Row>
                <Stack direction="horizontal" gap={1}>
                    <div>
                        <Link to='/'><Image className="rounded-pill" src={ Logo } style={{width: '20%'}}></Image></Link>
                        <Outlet/>
                    </div>
                    <div className="ms-auto">
                        <Button variant="outline-secondary" onClick={handleShow}>LOGIN</Button>
                    </div>
                </Stack>
            </Row>
        </Container>

        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
            <Modal.Header closeButton >
                <Modal.Title>MEMBER LOGIN</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </InputGroup>
                <InputGroup className='mb-3'>
                    <FormControl placeholder='Password'/>
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" size='lg'>LOG IN</Button>
            </Modal.Footer>
        </Modal>
        
    </div>
    );
}

export default Header;