import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <main style={{ minHeight: "70vh", padding: "50px 20px", textAlign: "center", background: "#f5f8f1" }}>
        <h1 style={{ color: "#245536" }}>Your Shopping Cart</h1>
        <p>Your cart is empty. Add some beautiful plants!</p>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", padding: "32px 20px", background: "#f5f8f1" }}>
      <h1 style={{ textAlign: "center", color: "#245536" }}>Your Shopping Cart</h1>
      <section style={{ maxWidth: "850px", margin: "28px auto" }}>
        {items.map((item) => (
          <article key={item.id} style={{ display: "flex", alignItems: "center", gap: "18px", flexWrap: "wrap", background: "white", padding: "16px", marginBottom: "14px", borderRadius: "12px" }}>
            <img src={item.image} alt={item.name} style={{ width: "100px", height: "90px", objectFit: "cover", borderRadius: "8px" }} />
            <div style={{ flex: 1, minWidth: "150px" }}>
              <h2 style={{ margin: "0 0 8px", color: "#245536" }}>{item.name}</h2>
              <p style={{ margin: 0 }}>₹{item.price} each</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button aria-label="Decrease quantity" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
              <strong>{item.quantity}</strong>
              <button aria-label="Increase quantity" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
            </div>
            <strong>₹{item.price * item.quantity}</strong>
            <button onClick={() => dispatch(removeItem(item.id))} style={{ border: 0, background: "#a83232", color: "white", padding: "9px 12px", borderRadius: "7px", cursor: "pointer" }}>Remove</button>
          </article>
        ))}
        <h2 style={{ textAlign: "right", color: "#245536" }}>Total: ₹{total}</h2>
      </section>
    </main>
  );
}
