import React from 'react';

const products = [
  { name: "Casual Wear ", price: "Rp. 2780", imgSrc: "/images/heels1.webp" },
  { name: "Casual Wear", price: "Rp. 3990", imgSrc: "/images/sandle.jpg" },
  { name: " Casual Wear ", price: "Rp. 2990", imgSrc: "/images/sandle4.webp" },
  { name: "Casual Wear", price: "Rp. 2440", imgSrc: "/images/snadle.webp" },
  { name: " Casual Wear", price: "Rp. 3440", imgSrc: "/images/img5.webp" },
  { name: " Casual Wear", price: "Rp. 5990", imgSrc: "/images/img6.jpeg" },
  { name: "Casual Wear", price: "Rp. 2790", imgSrc: "/images/img7.jpg" },
  { name: "Casual Wear", price: "Rp. 1500", imgSrc: "/images/img9.jpg" },
  { name: "Casual Wear", price: "Rp. 2990", imgSrc: "/images/img10.jpg" },
  { name: "Casual Wear", price: "Rp. 6990", imgSrc: "/images/img8.jpeg" },
  { name: "Casual Wear", price: "Rp. 5990", imgSrc: "/images/img14.jpeg" },
  { name: "Casual Wear", price: "Rp. 4990", imgSrc: "/images/img12.jpg" },
  { name: "Casual Wear", price: "Rp. 3990", imgSrc: "/images/img13.jpeg" },
  { name: "Casual Wear", price: "Rp. 4560", imgSrc: "/images/img11.jpeg" },
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