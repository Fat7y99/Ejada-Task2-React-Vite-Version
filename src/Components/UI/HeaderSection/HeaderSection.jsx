import "./HeaderSection.css";
const HeaderSection = (props) => {
  return (
    <div className="search-header profile-header position-relative py-4">
      <div className="search-bar px-2 d-inline-block">
        <a href="#">
          <img className="py-3" src="imgs/search icon.svg" />
        </a>
        <img src="imgs/rect.svg" alt="rect" />
        <input
          className="search-text px-2"
          type="text"
          placeholder="Search or type"
        />
      </div>
      <div className="profile-avatar d-inline">
        <a href="#">
          <img
            className="px-3"
            src="imgs/notification.svg"
            alt="notification"
          />
        </a>
        <a href="#">
          <img src="imgs/avatar.png" alt="avatar" />
        </a>
      </div>
    </div>
  );
};
export default HeaderSection;
