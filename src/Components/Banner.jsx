import React from "react";

const Banner = () => {
  return (
    <div className="banner-con">
      <h2 className="logo">Just Shop</h2>
      <p className="banner-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit repudiandae reiciendis commodi, fuga omnis laboriosam officiis corporis reprehenderit similique iusto quod, veniam quidem mollitia 
      </p>
      <div className="check-con">
        <div >
            <p>What You want to buy</p>
            <span>Search  product</span>
        </div>
        <div>
            <p>Sale product</p>
            <span>Login</span>
        </div>
        <div>
            <p>Shop it</p>
            <span>Add cart</span>
        </div>
        <button type="button">Shop Now</button>
      </div>
    </div>
  );
};
export default Banner;
