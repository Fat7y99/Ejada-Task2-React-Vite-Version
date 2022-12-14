import BookingCard from "./BookingCard";
const CarsSection = (props) => {
  const CarsIDs = [1, 2, 3, 4, 5];
  return (
    <div className="container">
      <div className="row ms-auto">
        {CarsIDs.map((id) => (
          <BookingCard carID={id} key={id}></BookingCard>
        ))}{" "}
        {CarsIDs.map((id) => (
          <BookingCard carID={id} key={id}></BookingCard>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default CarsSection;
