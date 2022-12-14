import "./BookingScreen.css";
import FiltrationSction from "./FiltrationSection";
import CarsSection from "./CarsSection";
const BookingScreen = () => {
  return (
    <div id="Booking-content" className="container dashboard  ">
      <div className="Booking-title">Booking</div>
      <FiltrationSction />
      <CarsSection />
    </div>
  );
};
export default BookingScreen;
