import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  { id: 1, name: "Snake Plant", price: 299, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=600", description: "An easy-care plant for your home." },
  { id: 2, name: "Peace Lily", price: 399, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=600", description: "A graceful plant with beautiful white blooms." },
  { id: 3, name: "Aloe Vera", price: 249, category: "Succulents", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600", description: "A useful, low-maintenance succulent." },
  { id: 4, name: "Monstera", price: 599, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600", description: "A tropical plant with statement leaves." },
  { id: 5, name: "Jade Plant", price: 199, category: "Succulents", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600", description: "A compact succulent for bright spaces." },
  { id: 6, name: "Areca Palm", price: 499, category: "Outdoor Plants", image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=600", description: "A lush palm that brightens any room." },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <main style={{ padding: "32px", background: "#f5f8f1", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#245536" }}>Our Plants</h1>
      <p style={{ textAlign: "center" }}>Choose your favourite plants at Paradise Nursery.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "22px", maxWidth: "1100px", margin: "28px auto" }}>
        {products.map((product) => (
          <article key={product.id} style={{ background: "white", borderRadius: "14px", padding: "16px", boxShadow: "0 3px 12px #00000012" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "170px", objectFit: "cover", borderRadius: "10px" }} />
            <p style={{ color: "#648b4c", marginBottom: "4px" }}>{product.category}</p>
            <h2 style={{ color: "#245536", fontSize: "20px" }}>{product.name}</h2>
            <p>{product.description}</p>
            <strong>₹{product.price}</strong>
            <button onClick={() => dispatch(addItem(product))} style={{ display: "block", width: "100%", marginTop: "14px", padding: "11px", border: 0, borderRadius: "8px", background: "#2f7045", color: "white", cursor: "pointer" }}>
              Add to Cart
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}
