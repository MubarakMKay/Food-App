import Image1 from '../../Assets/Item1.png'
import Image2 from '../../Assets/Item2.png'
import Image3 from '../../Assets/Item3.png'
import Image4 from '../../Assets/Item4.png'
import Image5 from '../../Assets/Item5.png'

const Items = () => {
    return ( 
        <div className="items">
            <div className="item">
                <div className="itemImage">
                    <img src={Image1} alt="" className='itemImg'/>
                </div>
                <div className="itemDetails">
                    <h3 className="itemName">Burger</h3>
                    <span className="itemDescription">The in-house pasta and<br />chicken by chef Moose</span>
                </div>
                <div className="itemOthers">
                    <input type="text" name="Currency" id="" value="N 1,000.00"/>
                    <span>Add to Cart</span>
                </div>
            </div>
            <div className="item">
                <div className="itemImage">
                    <img src={Image2} alt="" className='itemImg'/>
                </div>
                <div className="itemDetails">
                    <h3 className="itemName">Stir Fry Pasta</h3>
                    <span className="itemDescription">The in-house pasta and<br />chicken by chef Moose</span>
                </div>
                <div className="itemOthers">
                    <input type="text" name="Currency" id="" value="N 2,000.00"/>
                    <span>Add to Cart</span>
                </div>
            </div>
            <div className="item">
                <div className="itemImage">
                    <img src={Image3} alt="" className='itemImg'/>
                </div>
                <div className="itemDetails">
                    <h3 className="itemName">Meat Balls</h3>
                    <span className="itemDescription">The in-house pasta and<br />chicken by chef Moose</span>
                </div>
                <div className="itemOthers">
                    <input type="text" name="Currency" id="" value="N 3,000.00"/>
                    <span>Add to Cart</span>
                </div>
            </div>
            <div className="item">
                <div className="itemImage">
                    <img src={Image4} alt="" className='itemImg'/>
                </div>
                <div className="itemDetails">
                    <h3 className="itemName">Bread and Plantain</h3>
                    <span className="itemDescription">The in-house pasta and<br />chicken by chef Moose</span>
                </div>
                <div className="itemOthers">
                    <input type="text" name="Currency" id="" value="N 4,000.00"/>
                    <span>Add to Cart</span>
                </div>
            </div>
            <div className="item">
                <div className="itemImage">
                    <img src={Image5} alt="" className='itemImg'/>
                </div>
                <div className="itemDetails">
                    <h3 className="itemName">Stir Fry Soup</h3>
                    <span className="itemDescription">The in-house pasta and<br />chicken by chef Moose</span>
                </div>
                <div className="itemOthers">
                    <input type="text" name="Currency" id="" value="N 5,000.00"/>
                    <span>Add to Cart</span>
                </div>
            </div>
        </div>
     );
}
 
export default Items;