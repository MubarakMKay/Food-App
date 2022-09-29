import Lilies from "./Lilies";
import DashboardHome from '../../Assets/DashboardHome.png'
import DashboardProfile from '../../Assets/DashboardProfile.png'
import DashboardOrders from '../../Assets/DashboardOrders.png'
import DashboardCart from '../../Assets/DashboardCart.png'

const DashboardSidebar = () => {
    return ( 
        <div className="dashboardSidebar">
            <Lilies />
            <div className="dashboardSidebarMenu">
                <div className="dashboardSidebarMenuEach dashboardSidebarMenuHome">
                    <img src={DashboardHome} alt="" />
                    <span>Dashboard</span>
                </div>
                <div className="dashboardSidebarMenuEach dashboardSidebarMenuProfile">
                    <img src={DashboardProfile} alt="" />
                    <span>Profile</span>
                </div>
                <div className="dashboardSidebarMenuEach dashboardSidebarMenuOrders">
                    <img src={DashboardOrders} alt="" />
                    <span>Orders</span>
                </div>
                <div className="dashboardSidebarMenuEach dashboardSidebarMenuCart">
                    <img src={DashboardCart} alt="" />
                    <span>Cart</span>
                </div>
            </div>
        </div>
     );
}
 
export default DashboardSidebar;