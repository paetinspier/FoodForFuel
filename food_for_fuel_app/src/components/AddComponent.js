import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react'



function AddComponent(){

    return(
        <div className='contain'>
            <div className='contain-rad'>
                <h2 style={{fontWeight: '150'}}>DAILY LOG</h2>
                <Table striped bordered hover variant="">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Unit</th>
                            <th>Energy KCAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>apple</td>
                            <td>1</td>
                            <td></td>
                            <td>94.64</td>
                        </tr>
                        <tr>
                            <td>Banana</td>
                            <td>1</td>
                            <td></td>
                            <td>94.64</td>
                        </tr>
                        <tr>
                            <td>Pear</td>
                            <td>1</td>
                            <td></td>
                            <td>94.64</td>
                        </tr>
                        <tr>
                            <td>Grape</td>
                            <td>1</td>
                            <td></td>
                            <td>94.64</td>
                        </tr>
                        <tr>
                            <td>Orange</td>
                            <td>1</td>
                            <td></td>
                            <td>94.64</td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        </div>
    );
}


export default AddComponent;