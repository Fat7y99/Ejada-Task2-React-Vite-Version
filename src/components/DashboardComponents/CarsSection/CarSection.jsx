import CarCard from "./CarCard";
import firstCar from "../../../assets/imgs/car1.svg";
import secondCar from "../../../assets/imgs/car2.svg";
import thirdCar from "../../../assets/imgs/car3.svg";

const CarSection = (props) => {
  const Cars = [
    {
      id: "1",
      percentage: "64%",
      carName: "Mini Cooper",
      carImage: firstCar,
      perHour: 32,
      k: 132,
    },
    {
      id: "2",
      percentage: "74%",
      carName: "Porsche 911 Carrera",
      carImage: secondCar,
      perHour: 20,
      k: 132,
    },
    {
      id: "3",
      percentage: "84%",
      carName: "Porsche 911 Carrera",
      carImage: thirdCar,
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
