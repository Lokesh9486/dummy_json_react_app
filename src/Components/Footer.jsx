import  facebook  from "../image/facebook.png";
import Instagram from "../image/Instagram.png";
import Linkedin from "../image/LinkedIn.png";

export default function Footer() {
  return(
    <footer className="footer">
      <div className="logo-con">
        <p className="logo">Just Shop</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          itaque non nesciunt ut iure dolore nulla molestiae, expedita beatae
          quam quae exercitationem officia quos consectetur voluptas labore
          inventore sapiente nemo!
        </p>
      </div>
      <a href="#">Copyright &#169; 2022 shop.All rights.reserved</a>
      <div className="social-media-con">
        <img src={facebook} alt="" />
        <img src={Linkedin} alt="" />
        <img src={Instagram} alt="" />
      </div>
    </footer>
  );
}
