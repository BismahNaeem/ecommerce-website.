import React from 'react';
import Image from 'next/image';


const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="leftImage">
        <Image src="/images/sneakers2.jpeg" alt="Stylish shoes for Women" layout="fill" objectFit="cover" quality={100} />
        <h2>Sneakers Shoes</h2>
        <p>Shop Now</p>
      </div>
       <div className="rightImages">
        <div className="topImage">
          <Image src="/images/heel9.jpg" alt="Sports Wear" layout="fill" objectFit="cover" quality={100} />
          <h3>Party Wear</h3>
          <p>Shop Now</p>
        </div> 
         <div className="bottomImage">
          <Image src="/images/heels3.webp" alt="Fashion Shoes" layout="fill" objectFit="cover" quality={100} />
          <h3>Casual Wear</h3>
          <p>Shop Now</p>
        </div> 
        </div>
        </section>
      );
    }
      
  


export default HeroSection;