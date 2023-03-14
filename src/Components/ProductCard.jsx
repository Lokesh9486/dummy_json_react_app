import { Link } from "react-router-dom";

export default function ProductCard({ data: { item, index } }) {
  const { thumbnail, title, description,id } = item;
  return (
    <div className={`card product-card card${index}`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link to={`/product/${id}`} className="btn">
          Shop now
        </Link>
        {(index=== 4||index===2)?<img className="card-img-top w-100" src={thumbnail} alt="Card image cap"/>:null}
      </div>
    </div>
  );
}
