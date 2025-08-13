import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "../../styles/pages/products.scss";
import { useCart } from "./Cart";

function Products({ products }) {
  const { addToCart } = useCart();
  const history = useHistory();
  const [sortField, setSortField] = useState("id");
  const [quantities, setQuantities] = useState({});
  const [sortOrder, setSortOrder] = useState("asc");
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setSelectedCategories(data);
      })
      .catch((error) => {
        console.error("Failed to fetch categories:", error);
      });
  }, []);

  useEffect(() => {
    const initialQuantities = {};
    products.forEach((product) => {
      initialQuantities[product.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [products]);

  const handleIncrease = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 1) + 1),
    }));
  };

  const handleDecrease = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 1) - 1, 1),
    }));
  };

  const handleAddToCart = (productId) => {
    const quantity = quantities[productId] || 0;
    const product = products.find((p) => p.id === productId);

    if (quantity > 0 && product) {
      addToCart(product, quantity);
      toast.success("Added to cart", {
        position: "top-right",
        autoClose: 2000,
      });
      setQuantities((prev) => ({ ...prev, [productId]: 1 }));
    } else {
      toast.error("Please select at least one item.");
    }
  };

  return (
    <div className="products-page">
      <h1>Shop Our Cake Decorating Products</h1>
      <div className="sort-controls">
        <div className="dropdown-row">
          <label>
            Sort by:&nbsp;
            <select
              value={sortField}
              onChange={(e) => setSortField(e.target.value)}
            >
              <option value="id">ID</option>
              <option value="productName">Title</option>
              <option value="price">Price</option>
              <option value="category">Category</option>
            </select>
          </label>

          <label>
            Order:&nbsp;
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
        </div>

        <div className="category-filters">
          <h3>Filter by Category:</h3>
          {categories.map((cat) => (
            <label key={cat}>
              <input
                type="checkbox"
                value={cat}
                checked={selectedCategories.includes(cat)}
                onChange={(e) => {
                  const value = e.target.value;
                  setSelectedCategories((prev) =>
                    prev.includes(value)
                      ? prev.filter((c) => c !== value)
                      : [...prev, value]
                  );
                }}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div className="product-list">
        {[...products]
          .filter((product) => {
            if (selectedCategories.length === 0) return false;
            if (selectedCategories.length === categories.length) return true;
            return selectedCategories.includes(product.category);
          })
          .sort((a, b) => {
            let valA = a[sortField];
            let valB = b[sortField];

            if (typeof valA === "string") valA = valA.toLowerCase();
            if (typeof valB === "string") valB = valB.toLowerCase();

            if (valA < valB) return sortOrder === "asc" ? -1 : 1;
            if (valA > valB) return sortOrder === "asc" ? 1 : -1;
            return 0;
          })
          .map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-content">
                <div className="image-wrapper">
                  <img src={product.img} alt={product.productName} />
                </div>

                <div className="text-content">
                  <h2 className="product-name">{product.productName}</h2>
                  <p className="product-price">
                    <strong>${product.price.toFixed(2)}</strong>
                  </p>
                  {/* <p className="product-description">{product.description}</p> */}
                </div>
              </div>
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDecrease(product.id);
                  }}
                >
                  <i className="fa-solid fa-square-minus"></i>
                </button>

                <span className="quantity">{quantities[product.id] || 0}</span>

                <button
                  className="quantity-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    handleIncrease(product.id);
                  }}
                >
                  <i className="fa-solid fa-square-plus"></i>
                </button>
              </div>
              <div className="button-row">
                <button
                  className="view-button"
                  onClick={() => history.push(`/product/${product.id}`)}
                >
                  View Details
                </button>

                <button
                  className="cart-button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(product.id);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
