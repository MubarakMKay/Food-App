import DashboardItem from "../Components/Dashboard/DashboardItem";
import DashboardOriginal from "../Components/Dashboard/DashboardOriginal";
import '../Styles/Dashboard.css'

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <DashboardOriginal />
            <DashboardItem />
        </div>
     );
}
 
export default Dashboard;