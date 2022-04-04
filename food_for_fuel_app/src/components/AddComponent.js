import React, {useContext} from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import {FoodContext} from '../FoodContext';

function AddComponent(){
    const [myFood, setMyFood] = useContext(FoodContext);


    const removeItem = index => {
        setMyFood([...myFood.slice(0, index), ...myFood.slice(index+1, myFood.length)]);

    }

    


    return(
        <div className='contain'>
            <div className='contain-rad'>
                <h2 style={{fontWeight: '150'}}>DAILY LOG</h2>
                <div>
                    {myFood.map((food, index) => 
                    (
                        <Card key={index}>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        <Col>
                                            {food.description}
                                        </Col>
                                        <Col>
                                            
                                        </Col>
                                        <Col>
                                            {food.servingSize}{food.servingSizeUnit}
                                        </Col>
                                        <Col>
                                        <button name={index} onClick={() => removeItem(index)}>X</button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    )
                    )}
                </div>
            </div>
        </div>
    );
}


export default AddComponent;