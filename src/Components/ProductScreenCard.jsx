import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useAllProductsQuery } from "../features/ProductApi";
import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSearchProduct } from "../features/ProductSlice";
import LoadingImage from "../image/Loading.gif";

function Loading(){
  return(
      <div className="loading-screen">
            <img src={LoadingImage} alt="" />
      </div>
  )
}

export default function ProductScreenCard() {
  const getProduct = useSelector(getSearchProduct);
  const { data, isSuccess,isLoading } = useAllProductsQuery(getProduct);
  
  return (
    <div className="main-product">
      {isLoading && <Loading/> }
      {data?.products.map((item, index) => {
        const { thumbnail, title, description,id } = item;
        return (
          <Card key={index}>
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Link to={`/product/${id}`}>
              <AiFillShopping />
                Buy Now
                </Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
