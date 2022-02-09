import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Logo from './images/logo.png';

function Header () {
    return(
    <div className="Header">
        <Container style={{width: '100%'}} className="block-example border-bottom border-dark">
            <Row>
                <Stack direction="horizontal" gap={1}>
                    <div>
                        <Image className="rounded-pill" src={ Logo } style={{width: '20%'}}></Image>
                    </div>
                    <div className="ms-auto">
                        <Button variant="outline-secondary" >LOGIN   </Button>
                    </div>
                </Stack>
            </Row>
        </Container>
        
    </div>
    );
}

export default Header;