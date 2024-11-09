// components/DiscountBanner.tsx
import React from 'react';

const DiscountBanner = () => {
  return (
    <div className="discount-banner">
      <div className="discount-text">
        <h2>10% OFF Discount Coupons</h2>
        <p>Subscribe us to get 10% OFF on all the purchases</p>
      </div>
      <button className="discount-button">SUBSCRIBE NOW</button>
    </div>
  );
};

export default DiscountBanner;