import ProductScreenCard from "../Components/ProductScreenCard";
import ProductSideBar from "../Components/ProductSideBar";

export default function Products(){
    return(
        <div className="product-screen">
            <div></div>
            <div className="product-screen-container">
            <ProductSideBar/>
            <ProductScreenCard/>
            </div>
        </div>
    )
}