import StatsCard from "./StatsCard";
import "./StatsSection.css";
const StatsSection = (props) => {
  const statsCards = [
    {
      id: "first-pie",
      title: "Energy",
      percentage: "45%",
      firstColor: "#B37EFC",
      secondColor: "#FFFFFF",
      iconPath: "first-pie",
    },
    {
      id: "second-pie",
      title: "Range",
      percentage: "50%",
      firstColor: "#E8F6FD",
      secondColor: "#FF7E86",
      iconPath: "second-pie",
    },
    {
      id: "third-pie",
      title: "Break fluid",
      percentage: "9%",
      firstColor: "#E8F6FD",
      secondColor: "#A162F7",
      iconPath: "third-pie",
    },
    {
      id: "fourth-pie",
      title: "Tire Wear",
      percentage: "25%",
      firstColor: "#E8F6FD",
      secondColor: "#F6CC0D",
      iconPath: "fourth-pie",
    },
  ];
  return (
    <div className="row py-3 pe-3 mx-4 ms-auto">
      {statsCards.map((card) => (
        <StatsCard key={card.id} statsCard={card}></StatsCard>
      ))}
    </div>
  );
};

export default StatsSection;
