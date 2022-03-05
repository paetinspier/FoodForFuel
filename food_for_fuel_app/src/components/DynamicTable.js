import './CSS/table.css'


function DynamicTable(){


    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Unit</th>
                        <th>Energy (KCAL)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>apple</td>
                        <td>1</td>
                        <td></td>
                        <td>23</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DynamicTable;