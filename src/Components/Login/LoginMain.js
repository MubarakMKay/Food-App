import Login from '../../Assets/Login.png'
import '../../Styles/Login.css'
import { Link } from "react-router-dom";

const LoginMain = () => {
    return ( 
        <div className="loginMain">
            <img src={Login} alt="Login" />
            <div className="loginDetails">
                <h1>Welcome Back!</h1>
                <div>
                    <form>
                        <input type="email" name="Email" id="" placeholder='Your Email Address' required/>
                        <input type="password" name="Password" id="" placeholder='Your Password' required/>
                        <input type="submit" value="LOGIN" />
                    </form>
                    <div className="loginDetailsOthers">
                        <span><Link to="/signup" className='loginLink'>Create an account</Link></span>
                        <span>Forgot Password</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default LoginMain;