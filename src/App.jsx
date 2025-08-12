import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./components/pages/About";
import Cart from "./components/pages/CartContext";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Products from "./components/pages/Products";
import NotFound from "./components/pages/NotFound";
import { CartProvider } from "./components/pages/CartContext";

import "./styles/pages/app.scss";
import "./styles/common/common.scss";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      console.log(data);

      const fixedData = data.map((item) => ({
        id: item.id,
        img: item.image,
        productName: item.title,
        price: `$${item.price}`,
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
      <Router>
        <div className="page-container">
          <Header />
          <main className="main-content">
            <Switch>
              <Route exact path="/" component={Home} />
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
