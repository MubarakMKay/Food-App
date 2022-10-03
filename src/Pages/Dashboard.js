// import DashboardItem from "../Components/Dashboard/DashboardItem";
import DashboardCheckout from "../Components/Dashboard/DashboardCheckout";
import DashboardOriginal from "../Components/Dashboard/DashboardOriginal";
import '../Styles/Dashboard.css'

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <DashboardOriginal />
            {/* <DashboardItem /> */}
            <DashboardCheckout />
        </div>
     );
}
 
export default Dashboard;