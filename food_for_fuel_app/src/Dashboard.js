import React, {useState, useEffect}from 'react'
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
import {Button, ModalTitle, InputGroup, FormControl, Card, ListGroup} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'

{/* USDA: https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=x9N5HNs0MKEjUjncCmUXfjIhF9T1pzM3wAAJ1YFn */}

function Dashboard(){

    const [show, setShow] = useState(false);
    const [name, setName] = useState('Food');

    const showCancel = () => setShow(false);



    function nameBtn(){
        setName('Food');
        setShow(true);
    }
    function exrcsBtn(){
        setName('Exercise');
        setShow(true);
    }
    function bioBtn(){
        setName('Biometric');
        setShow(true);
    }

    const [searchWord, setSearchWord] = useState('');
    const [search, setSearch] = useState([]);
    const searchString = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchWord}&pageSize=100&api_key=x9N5HNs0MKEjUjncCmUXfjIhF9T1pzM3wAAJ1YFn`;
    
    useEffect(() => {
        fetchSearch();
    },[])

    const fetchSearch = async () => {
        const response = await Axios(searchString);
        setSearch(response.data.foods);
    }
    useEffect(() => {
        console.log(search)
      }, [search])

/*     const foodSearch = () => {
        Axios.get(searchString).then((response)=>{
            console.log(response.data.foods);
        });
    }; */
    
    

    return(
        <div >
            <Container fluid style={{backgroundColor: '#f0f0f0'}}>
                {/* this Row represents the entire viewport */}
                <Row>
                    {/* this Column is the left panel */}
                    <Col sm={2} style={{backgroundColor:'white'}}>
                        {/* this Row is the smaller portion at the top of the column */}
                        <Row style={{height: '20%'}}>
                            <Image fluid src={logo} alt='logo'/>
                        </Row>
                        {/* this Row takes up the rest of the column */}
                        <Row style={{height: '80%', paddingTop: '60%', textAlign: 'center'}}>
                            <Stack gap={5}>
                                <IconContext.Provider value={{ size: '1em',}}>
                                    <div>
                                        <Link to='/Dashboard' style={{ textDecoration: 'none' }}><h3><FaConnectdevelop/>   Dashboard</h3></Link>
                                    </div>
                                </IconContext.Provider>

                                <IconContext.Provider value={{ size: '1em'}}>
                                    <div>
                                        <Link to='/Dashboard' style={{ textDecoration: 'none' }}><h3><VscGraphLine/>   Trends</h3></Link>
                                    </div>
                                </IconContext.Provider>

                                <IconContext.Provider value={{ size: '1em'}}>
                                    <div>
                                        <Link to='/Dashboard' style={{ textDecoration: 'none' }}><h3><RiUserSettingsLine/> User Settings</h3></Link>
                                    </div>
                                </IconContext.Provider>
                                <Outlet/>
                            </Stack>
                        </Row>
                    </Col>

                    {/* this is a placeholder */}
                    {/*<Col sm={2} style={{height: '100vh'}}></Col>*/}
                    
                    {/* this Column is the rest of the viewport */}
                    <Col sm={10} style={{height: '100%'}}>
                        {/* this Row is the header row at the top */}
                        <Row style={{height: '20%'}}>
                            <h1 style={{fontWeight: '300', paddingTop: '2%', paddingBottom: '5%'}}>Welcome, User Name</h1>
                        </Row>
                        {/* this Row is the main dashboard part */}
                        <Row style={{ height: '80%'}}>
                            <Col sm='auto' lg={8}>
                                <Stack gap={4}>
                                    <div>
                                        <AddComponent/>
                                    </div>
                                    <div style={{alignContent: 'center'}}>
                                        <Stack gap={4} direction='horizontal'>
                                            <div>
                                                <button style={{border: 'none', maxWidth: '100%'}} onClick={nameBtn}>
                                                    <FoodBtn/>
                                                </button>
                                            </div>
                                            <div>
                                                <button style={{border: 'none', maxWidth: '100%'}} onClick={exrcsBtn}>
                                                    <ExerciseBtn/>
                                                </button>
                                            </div>
                                            <div>
                                                <button style={{border: 'none', maxWidth: '100%'}} onClick={bioBtn}>
                                                    <BiometricBtn/>
                                                </button>
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
                            footEr
                        </Row>
                    </Col>
                </Row>
            </Container>




            <Modal show={show} onHide={showCancel} centered>
                <Modal.Header>
                    <ModalTitle>Add {name}</ModalTitle>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className='mb-3'>
                        <FormControl 
                        aria-label='Search'
                        placeholder='Search'/>
                        <Button onClick={fetchSearch}>Search</Button>
                    </InputGroup>
                    {
                        search && search.map(item => {
                            return(
                                <Card key={item.id}>
                                    <Card.Body>{item.description}</Card.Body>
                                </Card>
                            )
                        })
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" >ADD</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default Dashboard;