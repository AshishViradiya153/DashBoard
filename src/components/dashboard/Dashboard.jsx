import Header from "../header/Header";
import MainContainer from "../mainContainer/MainContainer";
import { DashboardWrapper } from "./Dashboard.styles";

const Dashboard = () => {
  
  return (
    <DashboardWrapper>
      <Header />
      <MainContainer />
    </DashboardWrapper>
  );
};

export default Dashboard;
