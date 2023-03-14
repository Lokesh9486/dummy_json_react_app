import { BsSearch } from "react-icons/bs";
import {
  AiOutlineCaretDown,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
      <p className="logo">Just shop</p>
      </Link>
      <div className="search-con">
        <input type="serach" className="form-control" />
        <button type="button" className="search-btn">
          <BsSearch />
        </button>
      </div>
      <div className="d-flex align-items-center">
        <div className="user-con">
          <div className="userLogo">
            <AiOutlineUser />
          </div>
          <button type="button" className="down-cart">
            <AiOutlineCaretDown />
          </button>
        </div>
        <button type="button" className="shopping-cart">
        <AiOutlineShoppingCart />
        <span>2</span>
        </button>
      </div>
    </header>
  );
}
