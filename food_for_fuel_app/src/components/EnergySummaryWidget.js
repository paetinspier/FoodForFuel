import {Container, Row, Stack, Col} from 'react-bootstrap';
import '../index.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function EnergySummaryWidget(){
    return(
        <div className='contain'>
            <div className='contain-rad'>
                <Container>
                    <Row style={{paddingBottom: '25px'}}>
                        <Col sm={12}>
                            <h2 style={{fontWeight: '150', textAlign: 'center'}}>ENERGY SUMMARY</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div style={{height: '100%', width: '150px', marginLeft: '30%'}}>
                                <CircularProgressbar value={30} text={'30'+ ' KCAL'}  styles={buildStyles({textColor: "grey", pathColor: "green"})}/>
                                <h4 style={{textAlign: 'center'}}>Budget</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <div style={{height: '100%', width: '150px', marginLeft: '5%'}}>
                                <CircularProgressbar value={30} text={'30'+ ' KCAL'} styles={buildStyles({textColor: "Grey", pathColor: "red"})}/>
                                <h4 style={{textAlign: 'center'}}>Consumed</h4>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div style={{height: '100%', width: '150px', marginLeft: '15%'}}>
                                <CircularProgressbar value={30} text={'30'+ ' KCAL'} styles={buildStyles({textColor: "grey"})}/>
                                <h4 style={{textAlign: 'center'}}>Burned</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default EnergySummaryWidget;