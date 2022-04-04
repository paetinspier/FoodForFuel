import React, {useContext} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../index.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {FoodContext} from '../FoodContext';

function EnergySummaryWidget(){

    const [myFood, setMyFood] = useContext(FoodContext);

    //let data = JSON.parse(localStorage.getItem('userData'));
    let data = myFood;

    var budget = 2500;
    var consumed = 0;
    var burned = 0;

    var calorieTargetValue = 2500;
    //var proteinTargetValue = 200;
    //var carbTargetValue = 300;
    //var fatTargetValue = 75;

    for(var i = 0; i < data.length; i++){
        //console.log(myFood[i].foodNutrients.length);
        for(var j = 0; j < data[i].foodNutrients.length; j++){
            if(data[i].foodNutrients[j].nutrientId === 1008){
                //console.log('we have found the energy: ' + myFood[i].foodNutrients[j].value);
                consumed += data[i].foodNutrients[j].value;
                budget -= data[i].foodNutrients[j].value;
            }
        }
    }




    return(
        <div className='contain'>
            <div className='contain-rad' style={{color: 'white', backgroundColor: 'black'}}>
                <Container>
                    <Row style={{paddingBottom: '25px'}}>
                        <Col sm={12}>
                            <h2 style={{fontWeight: '150', textAlign: 'center'}}>ENERGY SUMMARY</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div style={{height: '100%', width: '7vw', marginLeft: '35%'}}>
                                <CircularProgressbar value={(budget/calorieTargetValue)*100} text={`${budget} KCAL`} styles={buildStyles({textColor: "grey", pathColor: "green", trailColor: 'grey'})}/>
                                <h4 style={{textAlign: 'center', fontWeight:'150'}}>Budget</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div style={{height: '100%', width: '7vw', marginLeft: '35%'}}>
                                <CircularProgressbar value={(consumed/calorieTargetValue)*100} text={`${consumed} KCAL`} styles={buildStyles({textColor: "Grey", pathColor: "red", trailColor: 'grey'})}/>
                                <h4 style={{textAlign: 'center', fontWeight: '150'}}>Consumed</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div style={{height: '100%', width: '7vw', marginLeft: '35%'}}>
                                <CircularProgressbar value={burned} text={`${burned} KCAL`} styles={buildStyles({textColor: "grey", trailColor: 'grey'})}/>
                                <h4 style={{textAlign: 'center', fontWeight: '150'}}>Burned</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default EnergySummaryWidget;