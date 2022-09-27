import Lilies from "../General/Lilies";
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div className="header">
            <Lilies />
            <div className="navBar">
                <ul>
                    <li><Link to="/" className='navBarLink'><button>Home</button></Link></li>
                    <li><Link to="/login" className='navBarLink'><button>Login</button></Link></li>
                    <li><Link to="/signup" className='navBarLink'><button>Signup</button></Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Header;