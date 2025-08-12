import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/pages/product.scss";
import { useCart } from "./CartContext";

function Product({ products }) {
  const { addToCart } = useCart();
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const truncatedDescription =
    product.description.length > 150
      ? product.description.slice(0, 150) + "..."
      : product.description;

  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(prev - 1, 0));
  };

  const handleAddToCart = () => {
    if (quantity > 0 && product) {
      addToCart(product, quantity);
      setQuantity(0);
    } else {
      alert("Please select at least one item.");
    }
  };

  return (
    <div className="single-product-page">
      <div className="product-detail-card">
        <div className="image-wrapper">
          <img src={product.img} alt={product.productName} />
        </div>

        <div className="text-content">
          <h2 className="product-name">{product.productName}</h2>
          <p className="product-price">
            <strong>{product.price}</strong>
          </p>
          <p className="product-description">
            {showFullDescription ? product.description : truncatedDescription}
            {product.description.length > 50 && (
              <span className="toggle-description" onClick={toggleDescription}>
                {showFullDescription ? "Show less" : "Show more"}
              </span>
            )}
          </p>

          <div className="quantity-controls">
            <button
              className="quantity-btn"
              onClick={(e) => {
                e.preventDefault();
                handleDecrease();
              }}
            >
              <i className="fa-solid fa-square-minus"></i>
            </button>

            <span className="quantity">{quantity}</span>

            <button
              className="quantity-btn"
              onClick={(e) => {
                e.preventDefault();
                handleIncrease();
              }}
            >
              <i className="fa-solid fa-square-plus"></i>
            </button>
          </div>

          <button className="cart-button" onClick={handleAddToCart}>
            Add {quantity} to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
