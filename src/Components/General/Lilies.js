import { Link } from 'react-router-dom';
import LiliesIcon from '../../Assets/LiliesIcon.png';

const Lilies = () => {
    return ( 
        <Link to='/' className='dashboardLink'>
            <div className="lilies">
                <img src={LiliesIcon} alt="Lilies" />
                <h1 className="liliesText">Lilies</h1>
            </div>
        </Link>
     );
}
 
export default Lilies;