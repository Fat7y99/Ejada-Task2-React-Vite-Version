import icon1 from "../../../assets/imgs/icon1.svg";
import icon2 from "../../../assets/imgs/icon2.svg";
import icon3 from "../../../assets/imgs/icon3.svg";
import recommended from "../../../assets/imgs/recommended.svg";
const CarCard = (props) => {
  const car = props.car;
  return (
    <div className="col-lg-4 car-card">
      <div className="col">
        <div id={`card${car.id}`} className="card py-2" color="#E1DFA4">
          <div className="container mx-2">
            <div className="d-inline-block">
              <img src={recommended} alt="" />

              <div className="card-text d-inline-block px-2">
                {car.percentage} Recommend
              </div>
            </div>

            <img className="car" src={props.car.carImage} alt="car1" />
            <h3 className="pt-2">{car.carName}</h3>
          </div>
          <div className="d-inline-block position-relative py-1 px-3 v">
            <img className="pe-4" src={icon1} alt="icon1" />
            <div className="d-inline-block pe-4 car-price text-black-50">
              {car.k}K
            </div>
            <img className="pe-4" src={icon2} alt="icon2" />
            <img src={icon3} alt="icon3" />
            <div className="d-inline-block car-price end-0 pe-2 position-absolute text-black-50">
              `${car.perHour}/h`
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarCard;
