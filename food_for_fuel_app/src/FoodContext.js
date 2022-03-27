import React, {useState, createContext} from 'react';

export const FoodContext = createContext();



export const FoodProvider = (props) => {
    const [myFood, setMyFood] = useState([]);

    return(
        <FoodContext.Provider value={[myFood, setMyFood]}>
            {props.children}
        </FoodContext.Provider>
    );
}