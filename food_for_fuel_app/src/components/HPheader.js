import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Logo from './images/logo.png';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {FormControl} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function HPheader(){
    return(
        <div>
            <Container fluid>
                <Row>
                    <Stack direction='horizontal' gap={5}>
                        <div>
                            <Link to='/HomePage'><Image className="rounded-pill" src={ Logo } style={{width: '200px'}}></Image></Link>
                            <Outlet/>
                        </div>
                        <div className='ms-auto'>
                            <Button>Home</Button>
                        </div>
                        <div>
                            <Button>Trends</Button>
                        </div>
                        <div>
                            <Button>Recipes</Button>
                        </div>
                        <div>
                            <Button>Settings</Button>
                        </div>
                    </Stack>

                </Row>
            </Container>
            <hr/>
        </div>
    );
}

export default HPheader;