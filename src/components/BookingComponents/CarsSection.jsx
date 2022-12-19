import BookingCard from "./BookingCard";

import { useSelector } from "react-redux";
const CarsSection = () => {
  const Cars = useSelector((state) => {
    console.log("carsection", state.cars.data);
    return state.cars.data;
  });

  return (
    <div className="container">
      <div className="row ms-auto">
        {Cars.length === 0
          ? ""
          : Cars.map((car) => (
              <BookingCard car={car} key={car.carId}></BookingCard>
            ))}
      </div>{" "}
    </div>
  );
};

export default CarsSection;
