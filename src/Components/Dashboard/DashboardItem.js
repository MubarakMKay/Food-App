const DashboardItem = (props) => {
    return ( 
        <div className="dashboardItem">
            <div className="dashboardItemImage">
                <img src={props.image} alt="" />
                <p>yeah</p>
            </div>
            <div className="dashboardItemText">
                <h1 className="dashboardItemTextName">{props.name}1</h1>
                <p className="dashboardItemTextDescription">{props.description}2</p>
            </div>
            <div className="dashboardItemNumbers">
                <span className="dashboardItemNumbersPrice">NGN {props.price}</span>
                <span className="dashboardItemNumbersTime">{props.time} Mins</span>
                <span className="dashboardItemNumbersPieces">10 Pcs Avail</span>
            </div>
            <div className="dashboardItemAdd">
                <button className="dashboardItemAddArithmetic">-</button>
                <button className="dashboardItemAddValue">1</button>
                <button className="dashboardItemAddArithmetic">+</button>
                <button className="dashboardItemAddCart">Add to Cart</button>
            </div>
        </div>
     );
}
 
export default DashboardItem;