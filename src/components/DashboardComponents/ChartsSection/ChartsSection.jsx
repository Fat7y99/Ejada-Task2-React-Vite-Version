import BarChart from "./BarChart";
import GraphChart from "./GraphChart";
const ChartsSection = (props) => {
  return (
    <div className="row py-3 pe-3 ms-auto">
      <BarChart />
      <GraphChart />
    </div>
  );
};
export default ChartsSection;
