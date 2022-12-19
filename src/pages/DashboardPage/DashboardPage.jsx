import StatsSection from "../../components/DashboardComponents/StatsSection/StatsSection";
import ChartsSection from "../../components/DashboardComponents/ChartsSection/ChartsSection";
import CarSection from "../../components/DashboardComponents/CarsSection/CarSection";
import "./DashboardPage.scss";
const DashboardScreen = (props) => {
  return (
    <div id="Dashboard-content" className="container dashboard">
      <StatsSection />
      <ChartsSection />
      <CarSection />{" "}
    </div>
  );
};

export default DashboardScreen;
