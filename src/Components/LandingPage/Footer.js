import GooglePlay from '../../Assets/GooglePlay.png';
import AppStore from '../../Assets/AppStore.png';
import Instagram from '../../Assets/SocialInstagram.png';
import Twitter from '../../Assets/SocialTwitter.png';
import Youtube from '../../Assets/SocialYoutube.png';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footerMain">
                <div className="footerMainCompany">
                    <h3>Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footerMainSupport">
                    <h3>Support</h3>
                    <ul>
                        <li>Help Center</li>
                        <li>Safety Center</li>
                    </ul>
                </div>
                <div className="footerMainLegal">
                    <h3>Legal</h3>
                    <ul>
                        <li>Cookies Policy</li>
                        <li>Privacy policy</li>
                        <li>Terms of Service</li>
                        <li>Dispute Resolution</li>
                    </ul>
                </div>
                <div className="footerMainApp">
                    <h3>App</h3>
                    <ul>
                        <li><img src={GooglePlay} alt="Google Play" /></li>
                        <li><img src={AppStore} alt="App Store" /></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footerBottom">
                <div className="footerBottomCopyright">
                    <span>&copy; 2022 LILIES, All rights reserved</span>
                </div>
                <div className="footerBottomSocials">
                    <img src={Instagram} alt="Instagram" />
                    <img src={Twitter} alt="Twitter" />
                    <img src={Youtube} alt="Youtube" />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;