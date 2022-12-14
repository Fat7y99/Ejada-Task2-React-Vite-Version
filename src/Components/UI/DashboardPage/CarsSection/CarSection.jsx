import CarCardClass from "../../../Classes/CarCardClass";
import CarCard from "./CarCard";
import "./CarSection.css";

const CarSection = (props) => {
  const Cars = [
    { id: "1", percentage: "64%", carName: "Mini Cooper", perHour: 32, k: 132 },
    {
      id: "2",
      percentage: "74%",
      carName: "Porsche 911 Carrera",
      perHour: 20,
      k: 132,
    },
    {
      id: "3",
      percentage: "84%",
      carName: "Porsche 911 Carrera",
      perHour: 28,
      k: 132,
    },
  ];

  return (
    <div className="row mx-4">
      {Cars.map((carData) => (
        <CarCard key={carData.id} car={carData}></CarCard>
      ))}{" "}
    </div>
  );
};

export default CarSection;
