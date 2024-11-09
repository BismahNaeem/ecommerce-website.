import Image from"next/image"

const products = [
  { name: "Party Wear", price: "Rp.5990 ", imgSrc: "/images/heels2.jpg" },
  { name: "Party Wear", price: "Rp.5900 ", imgSrc: "/images/heels16.webp" },
  { name: "Party Wear", price: "Rp.7800 ", imgSrc: "/images/heel9.jpg" },
  { name: "Party Wear", price: "Rp. 4500", imgSrc: "/images/heels3.jpg" },
  { name: "Party Wear", price: "Rp. 3900", imgSrc: "/images/heels3.webp" },
  { name: "Party Wear", price: "Rp. 5600", imgSrc: "/images/heel15.jpg" },
  { name: "Party Wear", price: "Rp. 3700", imgSrc: "/images/heels6.jpg" },
  { name: "Party Wear", price: "Rp. 2900", imgSrc: "/images/heel8.jpg" },
  { name: "Party Wear", price: "Rp. 6500", imgSrc: "/images/heel10.jpg" },
  { name: "Party Wear", price: "Rp. 7600", imgSrc: "/images/heel11.jpg" },
  { name: "Party Wear", price: "Rp. 5990", imgSrc: "/images/heel14.webp" },
  { name: "Party Wear", price: "Rp. 6990", imgSrc: "/images/heel12.webp" },
  { name: "Party Wear", price: "Rp. 4990", imgSrc: "/images/heel15.jpg" },
  { name: "Party Wear", price: "Rp. 2990", imgSrc: "/images/heels4.webp" },
];


const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <Image src={product.imgSrc} alt={product.name} className="product-image" />
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