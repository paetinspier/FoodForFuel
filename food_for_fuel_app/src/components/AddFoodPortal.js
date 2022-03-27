import { VscGraphLine } from 'react-icons/vsc';
import { useState, useContext } from 'react';
import { IconContext } from "react-icons";
import  {Modal, ModalTitle} from 'react-bootstrap';
import {FoodContext} from '../FoodContext';


function AddFoodPortal(){

    // this is to open and close the modal window
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // this is to show the data that we have searched for
    const [foodList, setFoodList] = useState([]);

    async function searchFood(search){
        const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${search.target.value}&pageSize=10&api_key=x9N5HNs0MKEjUjncCmUXfjIhF9T1pzM3wAAJ1YFn`;
        const response = await fetch(url);
        const data = await response.json();
        setFoodList(data.foods)
        // console.log(foodList);
    }

    // this is to store the data that the user selects from the api search
    const [myFood, setMyFood] = useContext(FoodContext); // how to make this list of data global
    

    function storeFood(index){
        // index of food user selected
        const i = index.target.value;
        // data associated with food index
        const curr = foodList[i];
        // add selected food data to myFood array
        setMyFood([...myFood, curr]);
        
        console.log(myFood);
    }


    return(
        <div>
            <IconContext.Provider value={{ size: '1em'}}>
                <div>
                    <button  style={{ backgroundColor: '#ff000000', borderColor: '#ff000000' }} onClick={handleShow}><h3><VscGraphLine/>   Add Food</h3></button>
                </div>
            </IconContext.Provider>






            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header>
                    <ModalTitle>Add Food</ModalTitle>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <label>Search <input type="text" onChange={searchFood}/> <button>Search</button></label>
                    </form>
                    <div>
                        {foodList.map((food, index)=>
                        (
                        <button style={{width:'100%'}} key={index} value={index} onClick={storeFood}>{food.description} serving size: {food.servingSize}{food.servingSizeUnit}</button>
                        )
                        )}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose}>done</button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}
export default AddFoodPortal;