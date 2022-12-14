import StatsSection from "./StatsSection/StatsSection";
import ChartsSection from "./ChartsSection/ChartsSection";
import CarSection from "./CarsSection/CarSection";
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
