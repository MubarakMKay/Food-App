const DashboardCheckout = () => {
    return ( 
        <div className="dashboardCheckout">
            <h1 className="dashboardCheckoutHeader">Checkout</h1>
            <form className="dashboardCheckoutForm">
                <input type="number" name="CardNumber" id="" placeholder="Card Number"/>
                <input type="number" name="ExpiryDate" id="" placeholder="Expiry Date"/>
                <input type="number" name="CVV" id="" placeholder="CVV/CVV2"/>
                <input type="number" name="CardPin" id="" placeholder="Card Pin"/>
                <input type="submit" name="" id="" value="Make Payment"/>
            </form>
        </div>
     );
}
 
export default DashboardCheckout;