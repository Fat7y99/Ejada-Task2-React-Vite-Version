import HeaderSection from "./components/HeaderSection/HeaderSection";
import BookingPage from "./pages/BookingPage/BookingPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

import { Routes, Route } from "react-router-dom";
const BodyContent = () => {
  return (
    <div id="body-content" className="col-lg-10 col-sm-9 col-md-11 px-0">
      <header>
        <HeaderSection></HeaderSection>
      </header>
      <div>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/Booking" element={<BookingPage />} />
        </Routes>
      </div>
    </div>
  );
};
export default BodyContent;
