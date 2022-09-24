import Lilies from "../General/Lilies";

const Header = () => {
    return ( 
        <div className="header">
            <Lilies />
            <div className="navBar">
                <ul>
                    <li>Home</li>
                    <li>Login</li>
                    <li>Signup</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Header;