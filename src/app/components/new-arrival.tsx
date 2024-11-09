import React from 'react';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>New Arrivals</h1>
        <p>Discover the latest trends and find your perfect style.</p>
        <a href="/shop" className="banner-button">Shop Now</a>
      </div>
    </div>
  );
};

export default Banner;