import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NotFound from "./components/pages/NotFound";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import Product from "./components/pages/Product";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import { Cart } from "./components/pages/Cart";
import { CartProvider } from "./CartContext";

import "./styles/main.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      const fixedData = data.map((item) => ({
        id: item.id,
        img: item.image,
        productName: item.title,
        price: parseFloat(item.price),
        description: item.description,
        category: item.category,
        rating: item.rating,
      }));

      setProducts(fixedData);
    };
    fetchProducts();
  }, []);

  return (
    <CartProvider>
      <ToastContainer position="top-right" autoClose={2000} />
      <Router>
        <div className="page-container">
          <Header />
          <main className="main-content">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Home {...props} featuredProducts={products.slice(0, 3)} />
                )}
              />
              <Route
                path="/products"
                render={(props) => <Products {...props} products={products} />}
              />
              <Route
                path="/product/:id"
                render={(props) => <Product {...props} products={products} />}
              />
              <Route path="/cart" component={Cart} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
