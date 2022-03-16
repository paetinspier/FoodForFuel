import {Container, Row, Col} from 'react-bootstrap';
import '../index.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function EnergySummaryWidget(){
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
                                <CircularProgressbar value={30} text={'30 KCAL'} styles={buildStyles({textColor: "grey", pathColor: "green", trailColor: 'grey'})}/>
                                <h4 style={{textAlign: 'center', fontWeight:'150'}}>Budget</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div style={{height: '100%', width: '7vw', marginLeft: '35%'}}>
                                <CircularProgressbar value={30} text={'30 KCAL'} styles={buildStyles({textColor: "Grey", pathColor: "red", trailColor: 'grey'})}/>
                                <h4 style={{textAlign: 'center', fontWeight: '150'}}>Consumed</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div style={{height: '100%', width: '7vw', marginLeft: '35%'}}>
                                <CircularProgressbar value={30} text={'30 KCAL'} styles={buildStyles({textColor: "grey", trailColor: 'grey'})}/>
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