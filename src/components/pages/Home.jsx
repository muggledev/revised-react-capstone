import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/pages/home.scss";
import moodBoard from "../../assets/mood-board.png";
import peopleOnDevices from "../../assets/diverse-people-using-digital-devices.avif";

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=3");
        const data = await res.json();
        const transformed = data.map((item) => ({
          id: item.id,
          img: item.image,
          productName: item.title,
          price: parseFloat(item.price),
        }));
        setFeaturedProducts(transformed);
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <div className="home">
      <div className="hero-section">
        <video
          className="hero-video"
          src={peopleOnDevices}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="slogan">
          <h1>
            Whisk a little, shop a lot — <br />
            Sprinkle on the magic you've got!
          </h1>
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
            Whisking Up Creativity, One Sprinkle at a Time
          </h2>
          <p className="about-text">
            At Sprinkle & Whisk, we believe that every cake tells a story — and
            the right tools bring that story to life. Whether you're a seasoned
            baker or just discovering the joy of decorating, we're here to equip
            you with high-quality, thoughtfully curated tools that inspire
            creativity and confidence in the kitchen. From precision piping tips
            to vibrant sprinkles, our products are designed to make every bake a
            masterpiece. We're passionate about helping you turn simple
            ingredients into sweet works of art.
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
          <h1>Ready To Whisk Up Something Beautiful?</h1>
        </div>
        <div className="shop-our-products-link">
          <p>
            <p>
              Click{" "}
              <Link to="/products" className="shop-link">
                HERE
              </Link>{" "}
              to shop our products.
            </p>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
