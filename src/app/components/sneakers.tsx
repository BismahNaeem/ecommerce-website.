// components/ProductGrid.tsx
import React from 'react';

const products = [
  { name: "Sneakers ", price: "Rp. 7990", imgSrc: "/images/sneakers1.webp" },
  { name: "Sneakers", price: "Rp. 4990", imgSrc: "/images/sneakers3.webp" },
  { name: "Sneakers", price: "Rp. 6990", imgSrc: "/images/sneakers2.jpeg" },
  { name: "Sneakers", price: "Rp. 4990", imgSrc: "/images/sneaker4.webp" },
  { name: "Sneakers", price: "Rp. 7990", imgSrc: "/images/snaekers5.jpeg" },
  { name: "Sneakers", price: "Rp. 5990", imgSrc: "/images/sneaker7.jpg" },
  { name: "Sneakers", price: "Rp. 4990", imgSrc: "/images/sneakers6.jpeg" },
  { name: "Sneakers", price: "Rp. 3990", imgSrc: "/images/sneaker8.webp" },
  { name: "Sneakers", price: "Rp. 5990", imgSrc: "/images/sneaker11.webp" },
  { name: "Sneakers", price: "Rp. 6990", imgSrc: "/images/sneaker12.webp" },
  { name: "Sneakers", price: "Rp. 8990", imgSrc: "/images/sneaker9.jpeg" },
  { name: "Sneakers", price: "Rp. 4990", imgSrc: "/images/sneaker10.webp" },
  { name: "Sneakers", price: "Rp. 5990", imgSrc: "/images/sneaker13.webp" },
  { name: "Sneakers", price: "Rp. 3990", imgSrc: "/images/sneaker14.webp" },
];


const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.imgSrc} alt={product.name} className="product-image" />
          <div className="product-details">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
          <button className="favorite-btn">❤</button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;