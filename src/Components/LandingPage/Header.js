import Lilies from "../General/Lilies";

const Header = () => {
    return ( 
        <div className="header">
            <Lilies />
            <div className="navBar">
                <ul>
                    <li><button>Home</button></li>
                    <li><button>Login</button></li>
                    <li><button>Signup</button></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Header;