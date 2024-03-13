import "./Hero.scss";
import heroImage from "../../assets/images/hero-image.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__main-text">
        <div className="hero__title">
          <h1 className="hero__title-text">bakers bake.</h1>
        </div>
        <div className="hero__subtitle">
          <p className="hero__subtitle-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="hero__image">
        <img
          className="hero__image-file"
          src={heroImage}
          alt="Danish Cinnamon Swirl Animation"
        />
      </div>
    </div>
  );
}

export default Hero;
