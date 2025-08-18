import { Link, useHistory } from "react-router-dom";
import moodBoard from "../../assets/second-mood-board.png";
import modelingProducts from "../../assets/modeling-products.png";

function Home({ featuredProducts }) {
  const history = useHistory();

  return (
    <div className="home">
      <div className="hero-section">
        <img
          className="hero-image"
          src={modelingProducts}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="slogan">
          <h1>Wear It. Pair It. Power It.</h1>
        </div>
      </div>
      <div className="about-us">
        <h1>About Glam & Gadget</h1>
      </div>

      <section className="about-section">
        <div className="about-image">
          <img src={moodBoard} alt="People on Devices" />
        </div>
        <div className="about-content">
          <h2 className="about-us-title">
            Where Style Meets Innovation — Glam Up, Gear Up
          </h2>
          <p className="about-text">
            At Glam & Gadget, we blend fashion and function to bring you the
            best of both worlds. From trendy women's and men's clothing to
            stunning jewelry and cutting-edge tech accessories, our curated
            collections are designed to elevate your lifestyle. Whether you're
            dressing to impress or upgrading your everyday essentials, Glam &
            Gadget is your one-stop destination for style, sparkle, and smart
            living.
          </p>
        </div>
      </section>
      <section className="featured-section">
        <div className="featured-header">
          <h1>Featured Products</h1>
        </div>
        <div className="featured-products">
          {featuredProducts.map((product) => (
            <div key={product.id} className="featured-card">
              <img src={product.img} alt={product.productName} />
              <h3>{product.productName}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => history.push(`/product/${product.id}`)}>
                View Product
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="shop-our-products">
        <div className="shop-our-products-header">
          <h1>From Outfits to Gadgets — We've Got Your Vibe</h1>
        </div>
        <div className="shop-our-products-link">
          <span>
            Click{" "}
            <Link to="/products" className="shop-link">
              HERE
            </Link>{" "}
            to shop our products.
          </span>
        </div>
      </section>
    </div>
  );
}

export default Home;
