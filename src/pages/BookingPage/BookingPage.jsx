import "./BookingPage.scss";
import FiltrationSction from "../../components/BookingComponents/FiltrationSection";
import CarsSection from "../../components/BookingComponents/CarsSection";
import getNames from "../../services/FireBase";
import { useEffect } from "react";
const BookingPage = () => {
  useEffect(() => {
    getNames();
  }, []);
  console.log("booking");
  return (
    <div id="Booking-content" className="container-fluid">
      <div className="Booking-title">Booking</div>
      <FiltrationSction />
      <CarsSection />
    </div>
  );
};
export default BookingPage;
