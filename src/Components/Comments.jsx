import { FaQuoteLeft } from "react-icons/fa";
import logo from"../image/logo.png"

export default function Comments({data}) {
    const {body,postId,user:{username}}=data;
  return (
    <div className="comments">
      <div className="quote">
        <FaQuoteLeft />
      </div>
      <div className="com-con">
      <p className="m-0">
        {body}
      </p>
      <div className="d-flex align-items-center">
      <img src={logo} alt="" />
      <div className="ms-3">
      <h3>{username}</h3>
      <p className="m-0">Post id :{postId}</p>
      </div>
      </div>
      </div>
    </div>
  );
}
