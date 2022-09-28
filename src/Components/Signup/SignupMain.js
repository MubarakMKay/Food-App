import Signup from '../../Assets/Signup.png'
import '../../Styles/Signup.css'
import { Link } from "react-router-dom";

const SignupMain = () => {
    return ( 
        <div className="signupMain">
            <img src={Signup} alt="Signup" />
            <div className="signupDetails">
                <h1>Welcome to Lilies!</h1>
                <div>
                    <form>
                        <input type="text" name="FirstName" id="" placeholder='Your First Name' required/>
                        <input type="email" name="Email" id="" placeholder='Your Email Address' required/>
                        <input type="password" name="Password" id="" placeholder='Your Password' required/>
                        <input type="submit" value="SIGN UP" />
                    </form>
                    <div className="signupDetailsOthers">
                        <span>Already have an account. <strong><Link to="/login" className='loginLink'>LOGIN</Link></strong></span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SignupMain;