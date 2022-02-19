import {Container, Row, Stack, Col} from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

function MacroTargetWidget(){

    const energyNow = 60;
    const proteinNow = 25;
    const fatNow = 30;
    const carbNow = 40;


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
                            <ProgressBar variant='success' now={energyNow} label={`${energyNow}%`}></ProgressBar>
                        </div>
                        <div>
                            <h3>Protein</h3>
                            <ProgressBar variant='warning' now={proteinNow} label={`${proteinNow}%`}></ProgressBar>
                        </div>
                        <div>
                            <h3>Fats</h3>
                            <ProgressBar variant='danger' now={fatNow} label={`${fatNow}%`}></ProgressBar>
                        </div>
                        <div>
                            <h3>Carbohydrates</h3>
                            <ProgressBar variant='info' now={carbNow} label={`${carbNow}%`}></ProgressBar>
                        </div>
                    </Stack>
                </Row>

            </Container>
        </div>
    );
}

export default MacroTargetWidget;