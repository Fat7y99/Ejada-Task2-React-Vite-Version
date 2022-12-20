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
import MobileSideBar from "../../assets/imgs/mobile-sidebar.png";

import { useMediaQuery } from "react-responsive";

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
    { name: "settings", image: Settings },
    { name: "log out", image: LogOut },
  ];

  const [activeID, setActiveID] = useState("Dashboard");
  const [isClicked, SetClick] = useState(false);
  const onClickHandler = (event) => {
    const id = event.currentTarget.id;
    setActiveID(id);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  // console.log("isMobile?", isMobile);
  const onIconClickHadler = () => {
    SetClick(!isClicked);
  };
  const NormalSideBar = SideBarLinks.map((link) => (
    <li key={link.name}>
      <Link
        id={link.name}
        onClick={onClickHandler}
        className={`  ${link.name === activeID ? "active" : ""} `}
        to={`/${link.name === "Dashboard" ? "" : link.name}`}
      >
        <img className="d-inline  mx-auto" src={link.image} alt="" />
        <div className="link-text text-capitalize  ">{link.name}</div>
      </Link>
    </li>
  ));
  const SideBarContent = isClicked && NormalSideBar;
  return (
    <div className="col-lg-2 col-md-1 col-sm-2  bar ">
      <div className="side-bar screens-part  text-black-50 ">
        <img className="logo" src={logo} alt="logo" />

        <ul className="list-unstyled">
          {isMobile && (
            <li className="mobile-btn" key="0">
              <a
                id="0"
                onClick={onIconClickHadler}
                // href="#"
              >
                <img
                  className="d-inline mx-auto"
                  style={{ height: "50px" }}
                  src={MobileSideBar}
                  alt=""
                />
              </a>
            </li>
          )}
          {isMobile ? SideBarContent : NormalSideBar}
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
