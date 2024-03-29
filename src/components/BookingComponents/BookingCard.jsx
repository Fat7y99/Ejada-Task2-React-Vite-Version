import icon1 from "../../assets/imgs/booking-icon-1.svg";
import icon2 from "../../assets/imgs/booking-icon-2.svg";
import { useDispatch, useSelector } from "react-redux";
import { like, updateCars, search } from "../../redux/cars";
import { fetchCars } from "../../services/FireBase";
const BookingCard = (props) => {
  const Car = props.car;

  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.cars.searchQuery);

  const onClickHandler = async (event) => {
    // console.log("Booking Card Hello");
    // console.log(event.currentTarget.id);

    dispatch(like(event.currentTarget.id));

    const Cars = await fetchCars();
    dispatch(updateCars(Cars));
    // console.log("searchQuery", searchQuery);
    dispatch(search(searchQuery));
  };
  return (
    <div className="col-lg-4">
      <div className="col py-4">
        <div className="card py-2 px-3" color="#E1DFA4">
          <div className="container my-4">
            <div className="s position-relative">
              <div className="card-text d-inline-block">{Car.carName} </div>
              <div className="love-icon">
                {/* <img src="imgs/love-0.svg" alt="love-0" /> */}
                {Car.isLiked === 0 ? (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="grey"
                      className="bi bi-heart heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                    <svg
                      id={Car.carId}
                      onClick={onClickHandler}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      className="bi bi-heart-fill heartBtn"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>{" "}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="Coupe text-black-50 pb-2">Coupe</div>
            <img
              className="car px-0"
              src={Car.imageUrl}
              alt={`car${Car.carId}`}
            />
          </div>
          <div className="d-inline-block position-relative py-3 px-3">
            <img src={icon1} alt="icon1" />
            <div className="d-inline-block px-1 pe-3 car-price text-black-50">
              {Car.passenger}
            </div>
            <img className="pe-1" src={icon2} alt="icon2" />
            <div className="text-black-50 d-inline">{Car.type}</div>
            <div className="d-inline-block car-price end-0 pe-2 position-absolute text-black-50">
              ${Car.pricePerDay}/d
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
export default BookingCard;
