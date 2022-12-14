import StatsCard from "./StatsCard";
import firstPie from "../../../assets/imgs/first-pie.svg";
import secondPie from "../../../assets/imgs/second-pie.svg";
import thirdPie from "../../../assets/imgs/third-pie.svg";
import fourthPie from "../../../assets/imgs/fourth-pie.svg";

const StatsSection = (props) => {
  const statsCards = [
    {
      id: "first-pie",
      title: "Energy",
      percentage: "45%",
      firstColor: "#B37EFC",
      secondColor: "#FFFFFF",
      iconPath: firstPie,
    },
    {
      id: "second-pie",
      title: "Range",
      percentage: "50%",
      firstColor: "#E8F6FD",
      secondColor: "#FF7E86",
      iconPath: secondPie,
    },
    {
      id: "third-pie",
      title: "Break fluid",
      percentage: "9%",
      firstColor: "#E8F6FD",
      secondColor: "#A162F7",
      iconPath: thirdPie,
    },
    {
      id: "fourth-pie",
      title: "Tire Wear",
      percentage: "25%",
      firstColor: "#E8F6FD",
      secondColor: "#F6CC0D",
      iconPath: fourthPie,
    },
  ];
  return (
    <div className="row py-0 pe-3 mx-4 ms-auto">
      {statsCards.map((card) => (
        <StatsCard key={card.id} statsCard={card}></StatsCard>
      ))}
    </div>
  );
};

export default StatsSection;
