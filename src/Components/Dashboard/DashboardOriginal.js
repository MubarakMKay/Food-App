import DashboardHeader from "../General/DashboardHeader";
import DashboardMain from "../General/DashboardMain";
import DashboardSidebar from "../General/DashboardSidebar";

const DashboardOriginal = () => {
    return ( 
        <div className="dashboardOriginal">
            <DashboardSidebar />
            <div className="dashboardOriginalOthers">
                <DashboardHeader />
                <DashboardMain />
            </div>
        </div>
     );
}
 
export default DashboardOriginal;