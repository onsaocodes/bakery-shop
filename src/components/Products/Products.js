import "./Products.scss";
import { Link } from "react-router-dom";
import containers from "../../assets/images/food-containr.jpg";
import cup from "../../assets/images/coffee-cup.jpg";
import cutlery from "../../assets/images/reusable-cutlery.jpg";

const Products = () => {
  // const [product, setProduct] = useState([]);

  return (
    <div className="products">
      <div className="products__title">
        <h2 className="products__title-text">our products</h2>
      </div>
      {/* <div className="test">{products.map(product => {product.id}}</div> */}
      <div className="products__cards">
        <div className="products__card">
          <img
            src={containers}
            alt="reusable container"
            className="products__card-img"
          />
          <p className="products__card-title">reusable containers</p>
          <p className="products__card-price">£19.99</p>
        </div>
        <div className="products__card">
          <img src={cup} alt="coffee cup" className="products__card-img" />
          <p className="products__card-title">coffee cup</p>
          <p className="products__card-price">£12.99</p>
        </div>
        <div className="products__card">
          <img
            src={cutlery}
            alt="reusable cutlery"
            className="products__card-img"
          />
          <p className="products__card-title">reusable cutlery</p>
          <p className="products__card-price">£9.99</p>
        </div>
      </div>
      <div className="products__btn">
        <Link className="products__btn-link" to="">
          <p className="products__btn-text">shop now</p>
        </Link>
      </div>
    </div>
  );
};

export default Products;
