import DynamicTable from './DynamicTable'
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react'



function AddComponent(){

    return(
        <div className='contain'>
            <div className='contain-rad'>
                <h2 style={{fontWeight: '150'}}>DAILY LOG</h2>
                <DynamicTable data={dataTable}/>
            </div>
        </div>
    );
}


export default AddComponent;