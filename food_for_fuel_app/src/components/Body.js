import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import BerriesIMG from './images/BerriesImg.png';
import CuttingBoard from './images/foodImg.jpeg';


function Body () {
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
                            <Button>START FOR FREE</Button>
                        </Stack>
                    </Col>
                    <Col><Image src={CuttingBoard} className='img-fluid rounded'></Image></Col>
                </Row>
            </Container>

        </div>
    );
}

export default Body;