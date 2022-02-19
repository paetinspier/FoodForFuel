import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import logo from './components/images/logo.png'
import Stack from 'react-bootstrap/Stack'
import './components/CSS/dashboard.css';
import { VscGraphLine } from 'react-icons/vsc'
import { FaConnectdevelop } from 'react-icons/fa'
import { RiUserSettingsLine } from 'react-icons/ri'
import { IconContext } from "react-icons";
import { Outlet, Link } from "react-router-dom";
import AddComponent from './components/AddComponent';
import FoodBtn from './components/FoodBtn';
import ExerciseBtn from './components/ExerciseBtn';
import BiometricBtn from './components/BiometricBtn';
import MacroTargetWidget from './components/MacroTargetWidget';
import EnergySummaryWidget from './components/EnergySummaryWidget';




function Dashboard(){
    const sideBar ={

        '@media (min-width: 576px)':{
            
            height: '100vh',
            borderRight: '1px solid #b8b8b849',
            backgroundColor: 'white'
        },
        position: 'fixed',
        height: '45vh',
        borderRight: '1px solid #b8b8b849',
        backgroundColor: 'white'
    };


    return(
        <div >
            <Container fluid>
                {/* this Row represents the entire viewport */}
                <Row>
                    {/* this Column is the left panel */}
                    <Col sm={2} style={sideBar}>
                        {/* this Row is the smaller portion at the top of the column */}
                        <Row style={{height: '20%'}}>
                            <Image fluid src={logo} alt='logo'/>
                        </Row>
                        {/* this Row takes up the rest of the column */}
                        <Row style={{height: '80%', paddingTop: '60%', textAlign: 'center'}}>
                            <Stack gap={5}>
                                <IconContext.Provider value={{ size: '1em',}}>
                                    <div>
                                        <Link to='/' style={{ textDecoration: 'none' }}><h3><FaConnectdevelop/>   Dashboard</h3></Link>
                                    </div>
                                </IconContext.Provider>

                                <IconContext.Provider value={{ size: '1em'}}>
                                    <div>
                                        <Link to='/' style={{ textDecoration: 'none' }}><h3><VscGraphLine/>   Trends</h3></Link>
                                    </div>
                                </IconContext.Provider>

                                <IconContext.Provider value={{ size: '1em'}}>
                                    <div>
                                        <Link to='/' style={{ textDecoration: 'none' }}><h3><RiUserSettingsLine/> User Settings</h3></Link>
                                    </div>
                                </IconContext.Provider>
                                <Outlet/>
                            </Stack>
                        </Row>
                    </Col>

                    {/* this is a placeholder */}
                    <Col sm={2} style={{height: '100vh'}}></Col>
                    
                    {/* this Column is the rest of the viewport */}
                    <Col sm={10} style={{height: '100%'}}>
                        {/* this Row is the header row at the top */}
                        <Row style={{height: '20%'}}>
                            <h1 style={{fontWeight: '300', paddingTop: '1%'}}>Welcome, User Name</h1>
                        </Row>
                        {/* this Row is the main dashboard part */}
                        <Row style={{ height: '80%'}}>
                            <Col sm='auto' lg={8}>
                                <Stack gap={4}>
                                    <div>
                                        <AddComponent/>
                                    </div>
                                    <div style={{alignContent: 'center'}}>
                                        <Stack gap={5} direction='horizontal'>
                                            <div>
                                                <FoodBtn/>
                                            </div>
                                            <div>
                                                <ExerciseBtn/>
                                            </div>
                                            <div>
                                                <BiometricBtn/>
                                            </div>
                                        </Stack>
                                    </div>
                                    <div>
                                        <MacroTargetWidget/>
                                    </div>
                                </Stack>
                            </Col>
                            {/* this is the side bar on the right */}
                            <Col sm ='auto' lg={4}>
                                <EnergySummaryWidget/>
                            </Col>
                        </Row>
                        {/* this row is the footer */}
                        <Row>
                            FOoter
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Dashboard;