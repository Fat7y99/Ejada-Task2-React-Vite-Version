import BookingCard from "./BookingCard";
import { useEffect } from "react";
import { fetchCars } from "../../services/FireBase";
import { useState } from "react";

const CarsSection = () => {
  const [Cars, setCars] = useState([]);

  const getCars = async () => {
    const cars = await fetchCars();
    setCars(cars);
    return cars;
  };

  useEffect(() => {
    // addCarsData();
    getCars();
  }, []);

  return (
    <div className="container">
      <div className="row ms-auto">
        {Cars.length === 0
          ? ""
          : Cars.map((car) => (
              <BookingCard carID={1} scar={car} key={0}></BookingCard>
            ))}
      </div>{" "}
    </div>
  );
};

export default CarsSection;
