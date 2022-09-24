import GooglePlay from '../../Assets/GooglePlay.png';
import AppStore from '../../Assets/AppStore.png';
import SpecialOne from '../../Assets/SpecialOne.png'

const SectionOne = () => {
    return ( 
        <div className="sectionOne">
            <div className="sectionOneText">
                <h1>Order food anytime,<br />anywhere</h1>
                <span>Browse from our list of specials to place your order and have food<br />delivered to you in no time. Affordable, tasty and fast!</span>
                <div className="sectionOneTextLinks">
                    <img src={GooglePlay} alt="Google Play" />
                    <img src={AppStore} alt="App Store" />
                </div>
            </div>
            <div className="sectionOneImage">
                <img src={SpecialOne} alt="Special One" />
            </div>
        </div>
     );
}
 
export default SectionOne;