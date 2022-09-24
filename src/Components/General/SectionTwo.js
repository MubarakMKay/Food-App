import SpecialTwo from '../../Assets/SpecialTwo.png'
import SpecialThree from '../../Assets/SpecialThree.png'
import SpecialFour from '../../Assets/SpecialFour.png'

const SectionTwo = () => {
    return ( 
        <div className="sectionTwo">
            <div className="sectionTwoHeader">
                <h1>Special Meals of the day!</h1>
                <p>Check our sepecials of the day and get discounts on all our meals<br />and swift delivery to what ever location within Ilorin.</p>
            </div>
            <div className="sectionTwoSpecials">
                <div className="specials">
                    <img src={SpecialTwo} alt="Special Two" />
                    <h3>Stir Fry</h3>
                    <p>Stir fry pasta yada yada yada because of Sesan</p>
                </div>
                <div className="specials">
                    <img src={SpecialThree} alt="Special Three" />
                    <h3>Meat Balls</h3>
                    <p>Stir fry pasta yada yada yada because of Sesan</p>
                </div>
                <div className="specials">
                    <img src={SpecialFour} alt="Special Four" />
                    <h3>Burger Meal</h3>
                    <p>Stir fry pasta yada yada yada because of Sesan</p>
                </div>
            </div>
        </div>
     );
}
 
export default SectionTwo;