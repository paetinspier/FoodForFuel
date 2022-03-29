import React, {useContext} from 'react';
import {FoodContext} from '../FoodContext';
import {Container, Row, Stack, Col} from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

function MacroTargetWidget(){

    const [myFood, setMyFood] = useContext(FoodContext);

    var energyNow = 0;
    var proteinNow = 0;
    var fatNow = 0;
    var carbNow = 0;
    var calorieTargetValue = 2500;
    var proteinTargetValue = 200;
    var carbTargetValue = 300;
    var fatTargetValue = 200;

    for(var i = 0; i < myFood.length; i++){
        console.log(myFood[i].foodNutrients.length);
        for(var j = 0; j < myFood[i].foodNutrients.length; j++){
            if(myFood[i].foodNutrients[j].nutrientId === 1008){
                //console.log('we have found the energy: ' + myFood[i].foodNutrients[j].value);
                energyNow += myFood[i].foodNutrients[j].value;
            }
            if(myFood[i].foodNutrients[j].nutrientId === 1003){
                //console.log('we have found the protein: ' + myFood[i].foodNutrients[j].value);
                proteinNow += myFood[i].foodNutrients[j].value;
            }
            if(myFood[i].foodNutrients[j].nutrientId === 1004){
                //console.log('we have found the carbs: ' + myFood[i].foodNutrients[j].value);
                fatNow += myFood[i].foodNutrients[j].value;
                console.log("total fat is now this much"+fatNow);
            }
            if(myFood[i].foodNutrients[j].nutrientId === 1005){
                //console.log('we have found the fats: ' + myFood[i].foodNutrients[j].value);
                carbNow += myFood[i].foodNutrients[j].value;
            }
        }
    }




    return(
        <div className='contain'>
            <Container className='contain-rad'>
                <Row>
                    <Col sm={12}>
                        <h2 style={{fontWeight: '150'}}>MACRO TARGETS</h2>
                        <hr/>
                    </Col>
                </Row>

                <Row>
                    <Stack gap={4}>
                        <div>
                            <h3>Engergy</h3>
                            <ProgressBar variant='success' now={(energyNow/calorieTargetValue)*100} label={`${((energyNow/calorieTargetValue)*100).toFixed(1)}%`}></ProgressBar>
                        </div>
                        <div>
                            <h3>Protein</h3>
                            <ProgressBar variant='warning' now={(proteinNow/proteinTargetValue)*100} label={`${((proteinNow/proteinTargetValue)*100).toFixed(1)}%`}></ProgressBar>
                        </div>
                        <div>
                            <h3>Fats</h3>
                            <ProgressBar variant='danger' now={(fatNow/fatTargetValue)*100} label={`${((fatNow/fatTargetValue)*100).toFixed(1)}%`}></ProgressBar>
                        </div>
                        <div>
                            <h3>Carbohydrates</h3>
                            <ProgressBar variant='info' now={(carbNow/carbTargetValue)*100} label={`${((carbNow/carbTargetValue)*100).toFixed(1)}%`}></ProgressBar>
                        </div>
                    </Stack>
                </Row>

            </Container>
        </div>
    );
}

export default MacroTargetWidget;