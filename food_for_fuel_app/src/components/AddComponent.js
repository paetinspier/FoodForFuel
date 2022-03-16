import DynamicTable from './DynamicTable'


function AddComponent(){

    return(
        <div className='contain'>
            <div className='contain-rad'>
                <h2 style={{fontWeight: '150'}}>DAILY LOG</h2>
                <DynamicTable />
            </div>
        </div>
    );
}


export default AddComponent;