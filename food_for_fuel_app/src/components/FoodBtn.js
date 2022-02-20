import './CSS/dashboard.css'
import {Link, Outlet} from 'react-router-dom';

function FoodBtn(){
    return(
        <div>
            <Link to=''>
                <div className='foodBtn'>
                    <h3 style={{fontSize: '1.5rem'}}>Add Food</h3>
                </div>
            </Link>
            <Outlet/>
        </div>
    );
}

export default FoodBtn;
