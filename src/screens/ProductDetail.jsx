import { useParams } from "react-router-dom";
import { useSingleProductQuery } from "../features/ProductApi";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";
import { CiSquareRemove } from "react-icons/ci";
import Slider from "react-slick";
import React, { useState } from "react";
import facebook from "../image/facebook.png";
import Instagram from "../image/Instagram.png";
import Linkedin from "../image/LinkedIn.png";
import LoadingImage from "../image/Loading.gif";

export default function ProductDetail() {
  const [stylesx, setStylex] = useState("");
  const [popShow, setPopShow] = useState(false);
  const { category } = useParams();

  const { data, isSuccess,isLoading} = useSingleProductQuery(category);

  const ref = React.createRef();

  if (isSuccess) {
    var {
      brand,
      category: categories,
      description,
      discountPercentage,
      images: [image1, image2, image3, image4],
      price,
      rating,
      stock,
      thumbnail,
      title,
    } = data;
  }

  function zoomInFun(e) {
    var {
      target: { width, height },
      clientX,
      clientY,
    } = e;

    setStylex(
      `scale(2) translate(${(width - clientX) / 2}px, ${
        (height - clientY) / 2
      }px)`
    );
  }
  function zoomOutFun() {
    setStylex("scale(1) translate(0px, 0px)");
  }
  function imageChange(e) {
    const clickImageRes = e.target.src;
    e.target.src = ref.current.src;
    ref.current.src = clickImageRes;
  }
  function popShowFun() {
    setPopShow(true);
    document.body.classList.add("position-relative", "overflow-hidden");
  }
  function popHideFun(){
    setPopShow(false);
    document.body.classList.remove("position-relative", "overflow-hidden");
  }
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  function Loading(){
    return(
        <div className="w-100 d-flex align-items-center justify-content-center">
              <img src={LoadingImage} alt="" />
        </div>
    )
  }

  return (
    <div className="singleProductScreen">
      {isLoading && <Loading/>}
      <div className="grid-container">
        <img src={image1} className="item1" onClick={imageChange} />
        <img src={image2} className="item2" onClick={imageChange} />
        <img src={image3} className="item3" onClick={imageChange} />
        <img src={image4} className="item4" onClick={imageChange} />
        <div className="item5 position-relative overflow-hidden">
          <img
            src={thumbnail}
            ref={ref}
            className="position-absolute"
            onMouseMove={(e) => {
              zoomInFun(e);
            }}
            onMouseLeave={(e) => {
              zoomOutFun(e);
            }}
            style={{ transform: `${stylesx}` }}
          />
          <div className="extend-img" onClick={popShowFun}>
            <RxExternalLink />
          </div>
        </div>

        <div className="item6">
          <p className="title">{title}</p>
          <div className="d-flex align-items-center">
            <div className="rating-con position-relative">
              <p className="rating" style={{ width: `${(rating / 5) * 100}%` }}>
                {[0, 1, 2, 3, 4].map((item) => {
                  return (
                    <i className="fa fa-star" key={item} aria-hidden="true"></i>
                  );
                })}
              </p>
              <p className="rating position-absolute top-0">
                {[0, 1, 2, 3, 4].map((item) => {
                  return (
                    <i
                      className="fa fa-star-o"
                      key={item}
                      aria-hidden="true"
                    ></i>
                  );
                })}
              </p>
            </div>
            <p>{`(${rating}  Reviews)`}</p>
          </div>
          <p className="price">${price}</p>
          <p className="description">{description}</p>
          <hr />
          <div className="category-con">
            <p>
              <span>Category:</span>
              <strong>{categories}</strong>
            </p>
            <p>
              <span>Brand:</span>
              <strong>{brand}</strong>
            </p>
            <p>
              <span>Available stock:</span>
              <strong>{stock}</strong>
            </p>
            <p>
              <span>Discount Percentage:</span>
              <strong>{discountPercentage}</strong>
            </p>
            <div className="mt-4">
              <button type="button" className="btn add-cart-btn">
                <AiOutlineShoppingCart />
                Add Cart
              </button>
              <button type="button" className="btn">
                <AiOutlineHeart />
                Add to Wishlist
              </button>
            </div>
            <hr />
            <div className="d-flex align-items-center">
              <span>Share:</span>
              <div className="d-flex align-items-center social-media-conatiner">
                <img src={facebook} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Instagram} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`pop-up-container ${popShow ? "d-block" : "d-none"}`}>
        <div className="remove-btn" onClick={popHideFun}>
        <CiSquareRemove/>
        </div>
        <Slider {...settings}>
          <div>
            <img src={thumbnail} alt="" />
          </div>
          <div>
          <img src={image1} alt="" />
          </div>
          <div>
          <img src={image2} alt="" />
          </div>
          <div>
          <img src={image3} alt="" />
          </div>
          <div>
          <img src={image4} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
