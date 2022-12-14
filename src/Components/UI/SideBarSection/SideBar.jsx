import "./SideBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  const SideBarLinks = [
    "Dashboard",
    "Assets",
    "Booking",
    "Sell Cars",
    "Buy Cars",
    "Services",
    "Calendar",
    "Messages",
  ];
  const BottomList = ["settings", "log out"];

  const [activeID, setActiveID] = useState("Dashboard");

  const onClickHandler = (event) => {
    const id = event.currentTarget.id;
    setActiveID(id);
  };

  return (
    <div className="col-lg-2 col-md-1 col-sm-2 px-0 position-relative">
      <div className="side-bar screens-part px-3  text-black-50">
        <div className="px-3 py-4 logo-part">
          <img src="imgs/logo.svg" alt="logo" />
        </div>
        <ul className="list-unstyled">
          {SideBarLinks.map((link) => (
            <li key={link}>
              <Link
                id={link}
                onClick={onClickHandler}
                className={` ${link === activeID ? "active" : ""} `}
                // href="#"
                to={`/${link === "Dashboard" ? "" : link}`}
              >
                <img
                  className="d-inline "
                  src={`imgs/${link.toLowerCase()}.svg`}
                  alt=""
                />
                <div className="link-text  ">{link}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="list-unstyled side-bar px-3  text-black-50  bottom-list">
        {BottomList.map((element) => (
          <Link to={`/${element}`} key={element} className="text-capitalize">
            <img className="pe-3" src={`/imgs/${element}.svg`} alt={element} />
            <div className="link-text"> {element}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SideBar;
