import "./BookingPage.css";
import FiltrationSction from "../../components/BookingComponents/FiltrationSection";
import CarsSection from "../../components/BookingComponents/CarsSection";
const BookingPage = () => {
  return (
    <div id="Booking-content" className="container dashboard  ">
      <div className="Booking-title">Booking</div>
      <FiltrationSction />
      <CarsSection />
    </div>
  );
};
export default BookingPage;
