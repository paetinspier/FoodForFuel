import {Container, Row, Stack, Col} from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../index.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function EnergySum(){
    return(
        <div >
            <Container>
                <Row>
                    <Col>
                    <Stack direction='horizontal' gap={5}>
                        <div className='contain'>
                            <h1>Macronutrient Targets</h1>
                            <ProgressBar>
                                <ProgressBar style={{backgroundColor: '#317f8f'}} now={35} key={1} />
                                <ProgressBar style={{backgroundColor: '#821d91'}} now={20} key={2} />
                                <ProgressBar style={{backgroundColor: '#2d1da3'}} now={10} key={3} />
                            </ProgressBar>
                            <hr/>
                            <h3>Protein</h3>
                            <ProgressBar>
                                <ProgressBar style={{backgroundColor: '#317f8f'}} now={35} key={1} label='Protein'>Protein</ProgressBar>
                            </ProgressBar>
                            <hr/>
                            <h3>Fat</h3>
                            <ProgressBar>
                                <ProgressBar style={{backgroundColor: '#821d91'}} now={20} key={1} label='Fats'>fat</ProgressBar>
                            </ProgressBar>
                            <hr/>
                            <h3>Carbohydrates </h3>
                            <ProgressBar>
                                <ProgressBar style={{backgroundColor: '#2d1da3'}} now={60} key={1} label='Carbohydrates'>carbs</ProgressBar>
                            </ProgressBar>
                        </div>
                    </Stack>
                    </Col>

                    <Col>
                    <div style={{textAlign: 'center'}} className='contain'> 
                            <h1>Energy Summary</h1>
                            <hr/>
                            <Container>
                                <Row>
                                    <Col>
                                        <div style={{height: '100%', width: '100px'}}>
                                            <CircularProgressbar value={30} text={'30'+ ' KCAL'} styles={buildStyles({textColor: "Grey", pathColor: "red"})}/>
                                            <h4 style={{textAlign: 'center'}}>Consumed</h4>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div style={{height: '100%', width: '100px'}}>
                                            <CircularProgressbar value={30} text={'30'+ ' KCAL'} styles={buildStyles({textColor: "grey"})}/>
                                            <h4 style={{textAlign: 'center'}}>Burned</h4>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div style={{height: '100%', width: '100px'}}>
                                            <CircularProgressbar value={30} text={'30'+ ' KCAL'}  styles={buildStyles({textColor: "grey"})}/>
                                            <h4 style={{textAlign: 'center'}}>Budget</h4>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default EnergySum;