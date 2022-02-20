import './CSS/dashboard.css'
import {Link, Outlet} from 'react-router-dom';

function ExerciseBtn(){
    return(
        <div>
            <Link to=''>
                <div className='exBtn'>
                    <h3 style={{fontSize: '1.5rem'}}>Add Exercise</h3>
                </div>
            </Link>
            <Outlet/>
        </div>
    );
}

export default ExerciseBtn;

