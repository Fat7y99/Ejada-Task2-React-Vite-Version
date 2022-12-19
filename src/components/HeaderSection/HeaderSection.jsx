import "./HeaderSection.scss";
import Avatar from "../../assets/imgs/avatar.png";
import SearchIcon from "../../assets/imgs/search icon.svg";
import Notification from "../../assets/imgs/notification.svg";
import Rect from "../../assets/imgs/rect.svg";
import { useSelector } from "react-redux";
const HeaderSection = (props) => {
  const favCount = useSelector((state) => state.favCounter.value);

  return (
    <div className="search-header profile-header position-relative py-4">
      <div className="search-bar px-2 d-inline-block">
        <a href="#">
          <img className="py-3" src={SearchIcon} />
        </a>
        <img src={Rect} alt="rect" />
        <input
          className="search-text px-2"
          type="text"
          placeholder="Search or type"
        />
      </div>
      <div className="profile-avatar d-inline">
        <div className="d-inline">{favCount}</div>
        <a href="#">
          <img className="px-3" src={Notification} alt="notification" />
        </a>
        <a href="#">
          <img src={Avatar} alt="avatar" />
        </a>
      </div>
    </div>
  );
};
export default HeaderSection;
