import "./SideBar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.svg";
import Dashboard from "../../assets/imgs/Dashboard.svg";
import Assets from "../../assets/imgs/Assets.svg";
import Booking from "../../assets/imgs/Booking.svg";
import SellCars from "../../assets/imgs/Sell Cars.svg";
import BuyCars from "../../assets/imgs/Buy Cars.svg";
import Services from "../../assets/imgs/Services.svg";
import Calendar from "../../assets/imgs/Calendar.svg";
import Messages from "../../assets/imgs/Messages.svg";
import Settings from "../../assets/imgs/Settings.svg";
import LogOut from "../../assets/imgs/log out.svg";

const SideBar = (props) => {
  const SideBarLinks = [
    { name: "Dashboard", image: Dashboard },
    { name: "Assets", image: Assets },
    { name: "Booking", image: Booking },
    { name: "Sell Cars", image: SellCars },
    { name: "Buy Cars", image: BuyCars },
    { name: "Services", image: Services },
    { name: "Calendar", image: Calendar },
    { name: "Messages", image: Messages },
  ];
  const LinksImages = {
    Dashboard: Dashboard,
    Assets: Assets,
    Booking: Booking,
    "Sell Cars": SellCars,
    "Buy Cars": BuyCars,
    Services: Services,
    Calendar: Calendar,
    Messages: Messages,
  };
  console.log(LinksImages.Dashboard);

  const BottomList = [
    { name: "settings", image: Settings },
    { name: "log out", image: LogOut },
  ];

  const [activeID, setActiveID] = useState("Dashboard");

  const onClickHandler = (event) => {
    const id = event.currentTarget.id;
    setActiveID(id);
  };

  return (
    <div className="col-lg-2 col-md-1 col-sm-2 px-0   position-relative">
      <div className="bar">
        <div className="side-bar screens-part px-3  text-black-50 ">
          <div className="px-3 py-4 logo-part">
            <img src={logo} alt="logo" />
          </div>
          <ul className="list-unstyled">
            {SideBarLinks.map((link) => (
              <li key={link.name}>
                <Link
                  id={link.name}
                  onClick={onClickHandler}
                  className={` ${link.name === activeID ? "active" : ""} `}
                  // href="#"
                  to={`/${link.name === "Dashboard" ? "" : link.name}`}
                >
                  <img className="d-inline " src={link.image} alt="" />
                  <div className="link-text  ">{link.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="list-unstyled side-bar px-3  text-black-50  bottom-list">
        {BottomList.map((element) => (
          <Link
            to={`/${element.name}`}
            key={element.name}
            className="text-capitalize"
          >
            <img className="pe-3" src={element.image} alt={element.name} />
            <div className="link-text"> {element.name}</div>
          </Link>
        ))}
      </div> */}
      </div>
    </div>
  );
};
export default SideBar;
