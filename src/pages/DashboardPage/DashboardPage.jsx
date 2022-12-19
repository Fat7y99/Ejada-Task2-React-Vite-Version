import StatsSection from "../../components/DashboardComponents/StatsSection/StatsSection";
import ChartsSection from "../../components/DashboardComponents/ChartsSection/ChartsSection";
import CarSection from "../../components/DashboardComponents/CarsSection/CarSection";
import "./DashboardPage.scss";
import { like, disLike } from "../../redux/favCounter";
const DashboardScreen = (props) => {
  return (
    <div id="Dashboard-content" className="container dashboard">
      {/* <div>{counter.value}</div>
      <button
        className="mx-5"
        onClick={() => {
          dispatch(like());
        }}
      >
        add
      </button>
      <button
        className="mx-5"
        onClick={() => {
          dispatch(disLike());
        }}
      >
        minus
      </button> */}
      <StatsSection />
      <ChartsSection />
      <CarSection />{" "}
    </div>
  );
};

export default DashboardScreen;
