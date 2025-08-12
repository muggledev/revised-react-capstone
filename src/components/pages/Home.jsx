import React from "react";
import { Link } from "react-router-dom";
import "../../styles/pages/home.scss";
import cakeVideo from "../../assets/long-cake-decorating.mp4";
import cupcake from "../../assets/cupcake.webp";

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <video
          className="hero-video"
          src={cakeVideo}
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
        <h1>About Sprinkle & Whisk</h1>
      </div>

      <section className="about-section">
        <div className="about-image">
          <img src={cupcake} alt="Cupcake" />
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
      <section className="client-comment-section">
        <div className="client-comments-header">
          <h1>What Our Clients Say</h1>
        </div>
        <div className="client-comments">
          <p>
            "Game-changer for my home baking!" <br />
            I've tried tools from big-name stores, but nothing compares to the
            quality and charm of Sprinkle & Whisk. The piping tips are super
            precise, and the packaging is adorable. Fast shipping, too! <br />{" "}
            <br />— Jessica M., Toronto
          </p>
          <p>
            "Everything I needed in one place." <br />
            As a beginner, I was overwhelmed trying to find the right decorating
            tools — until I found Sprinkle & Whisk. Their starter kit made it so
            easy to get going, and the sprinkle blends are chef's kiss! <br />{" "}
            <br />— Daniela R., Vancouver
          </p>
          <p>
            "Beautiful tools, excellent service." <br />
            Not only are the tools high-quality and easy to use, but the
            customer service is top-notch. I had a question about an order, and
            they responded within hours. Will definitely be ordering again!{" "}
            <br />
            <br />— Amrita K., Calgary
          </p>
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
