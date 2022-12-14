import HeaderSection from "./HeaderSection/HeaderSection";
import DashboardScreen from "./DashboardPage/DashboardScreen";
import BookingScreen from "./BookingPage/BookingScreen";
import { Routes, Route } from "react-router-dom";
const BodyContent = () => {
  return (
    <div id="body-content" className="col-lg-10 col-sm-9 col-md-11 px-0">
      <HeaderSection></HeaderSection>
      <div>
        <Routes>
          <Route path="/" element={<DashboardScreen />} />
          <Route path="/Booking" element={<BookingScreen />} />
        </Routes>

        {/* {(() => {
          switch (props.content) {
            case "Dashboard":
              return <DashboardScreen></DashboardScreen>;

            case "Booking":
              return <BookingScreen></BookingScreen>;

            default:
              return <DashboardScreen></DashboardScreen>;
          }
        })()} */}
      </div>
    </div>
  );
};
export default BodyContent;
