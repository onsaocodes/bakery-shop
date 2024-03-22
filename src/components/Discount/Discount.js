import "./Discount.scss";

const Discount = () => {
  return (
    <div className="discount">
      <p className="discount__text">
        <span className="discount__text--capitalise">get </span>
        20% off your first order with code:{" "}
        <span className="discount__text--bold">FirstBake</span>
      </p>
    </div>
  );
};

export default Discount;
