import { useState } from "react";
import { useCart } from "../../CartContext";

// ----------- MODAL COMPONENT ------------
function Modal({ isOpen, onClose, onConfirm, title, message }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="modal-buttons">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

// ----------- CART COMPONENT ------------
export function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const [modalData, setModalData] = useState({
    type: null,
    item: null,
    isOpen: false,
  });

  const openModal = (type, item = null) => {
    setModalData({ type, item, isOpen: true });
  };

  const closeModal = () => {
    setModalData({ type: null, item: null, isOpen: false });
  };

  const confirmModal = () => {
    if (modalData.type === "remove" && modalData.item) {
      removeFromCart(modalData.item.id);
    } else if (modalData.type === "checkout") {
      clearCart();
    }
    closeModal();
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const shipping = 5.99;
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal + shipping;

  return (
    <div className="page-container">
      <div className="cart-container">
        <h1 className="cart-title">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  className="item-image"
                  src={item.img}
                  alt={item.productName}
                />
                <div className="item-details">
                  <h3>{item.productName}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="item-controls">
                  <button onClick={() => handleDecrease(item)}>-</button>
                  <button onClick={() => handleIncrease(item)}>+</button>
                  <button onClick={() => openModal("remove", item)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="price-summary">
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Shipping: ${shipping.toFixed(2)}</p>
              <h3>Total: ${total.toFixed(2)}</h3>
              <button
                className="checkout-button"
                onClick={() => openModal("checkout")}
              >
                Checkout
              </button>
            </div>
          </div>
        )}

        <Modal
          isOpen={modalData.isOpen}
          title={modalData.type === "remove" ? "Remove Item" : "Checkout"}
          message={
            modalData.type === "remove"
              ? `Are you sure you want to remove ${modalData.item?.productName}?`
              : "Are you sure you want to checkout? This will clear your cart."
          }
          onConfirm={confirmModal}
          onClose={closeModal}
        />
      </div>
    </div>
  );
}
