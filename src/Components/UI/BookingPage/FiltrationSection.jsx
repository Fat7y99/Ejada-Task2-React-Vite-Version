const FiltrationSection = () => {
  return (
    <div className="container">
      <div className="row position-relative">
        <div className="dropdowns">
          <div className="col-lg-1 drop-down  ">
            <select defaultValue="1">
              <option value="1">New</option>
              <option value="2">Used</option>
            </select>
          </div>
          <div className="col-lg-1 drop-down">
            <select defaultValue="1">
              <option value="1">Toyota</option>
              <option value="2">BMW</option>
              <option value="3">Porshe</option>
            </select>
          </div>
        </div>
        <div className="col-lg-2 filter-icons">
          <a href="#">
            <div id="filter-1" className="d-inline mx-3">
              <img src="imgs/dashboard.svg" alt="" />
            </div>
          </a>
          <a href="#">
            <div id="filter-2" className="d-inline filter">
              <img src="imgs/filter.svg" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default FiltrationSection;
