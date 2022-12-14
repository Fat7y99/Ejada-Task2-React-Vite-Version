const StatsCard = (props) => {
  return (
    <div className="col-lg-3 chart-card text-center ">
      <div
        className={`pie-chart  position-relative ${
          props.statsCard.id === "first-pie" ? "start" : ""
        } `}
      >
        <img
          src={process.env.PUBLIC_URL + `imgs/${props.statsCard.iconPath}.svg`}
          alt=""
        />
        <div
          className={`pie-title ${
            props.statsCard.id === "first-pie" ? "first-pie-title" : ""
          }`}
        >
          {props.statsCard.title}
        </div>
        <div
          className={`percentage ${
            props.statsCard.id !== "first-pie" ? "all-pie" : ""
          } "`}
        >
          {props.statsCard.percentage}
        </div>

        <svg className="pie" viewBox="0 0 10 10">
          <path
            d="M2 8 A 4 4 0 1 1 8 8"
            fill="none"
            strokeWidth="0.78"
            stroke={props.statsCard.firstColor}
          />
          <path
            id={props.statsCard.id}
            d="M2 8 A 4 4 0 1 1 8 8"
            fill="none"
            strokeWidth="0.8"
            stroke={props.statsCard.secondColor}
          />
        </svg>
      </div>
    </div>
  );
};
export default StatsCard;
