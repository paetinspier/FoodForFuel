import './CSS/dashboard.css'
import {Link, Outlet} from 'react-router-dom';

function BiometricBtn(){
    return(
        <div>
            <Link to=''>
                <div className='bioBtn'>
                    <h3>Add Biometric</h3>
                </div>
            </Link>
            <Outlet/>
        </div>
    );
}

export default BiometricBtn;