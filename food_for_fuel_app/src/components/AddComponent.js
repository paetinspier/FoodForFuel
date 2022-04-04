import React, {useContext, useState} from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import {FoodContext} from '../FoodContext';

function AddComponent(){
    const [myFood, setMyFood] = useContext(FoodContext);

    const removeItem = index => {
        // create temp array
        const temp = [...myFood];
        // splice temp array... at index of index and we want to remove one item  
        temp.splice(index, 1);
        // update real list with the temp list using setMyFood
        setMyFood(temp);

        console.log(JSON.parse(localStorage.getItem('userData')));
        // remove items from local storage
        //localStorage.removeItem('userData');
        //localStorage.setItem('userData', JSON.stringify(myFood));
        //console.log(JSON.parse(localStorage.getItem('userData')));
        //console.log(myFood.length);
    };



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