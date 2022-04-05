import React, { useState, useEffect } from 'react';


function WeightTable(){

    const [myWeight, setMyWeight] = useState([]);
    const [currWeight, setCurrWeight] = useState('');

    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;


    function getWeight(search){
        setCurrWeight(search.target.value);
    }

    const onSubmit = event =>{
        event.preventDefault();
        setMyWeight([...myWeight, currWeight])
    }

    useEffect(() => {
        const userWeight = window.localStorage.getItem('userWeight');

        setMyWeight(JSON.parse(userWeight));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('userWeight', JSON.stringify(myWeight));
    });

    return(
        <div>
            <h2>My Weigh-Ins</h2>
            <form onSubmit={onSubmit}>
                <input value={currWeight} onChange={getWeight}/>
                <button type='submit'>Submit</button>
            </form>

            <>
            {myWeight.length > 0 &&
                myWeight.map((weight, index) => (
                    <h2 key={index}>Date: {date} Weight: {weight} lbs</h2>
                ))
            }
            </>
        </div>
    );
}

export default WeightTable;