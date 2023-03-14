import Banner from "../Components/Banner";
import Chip from "../Components/Chip";
import Comments from "../Components/Comments";
import CreditsCard from "../Components/Credits";
import ProductCard from "../Components/ProductCard";
import Recommend from "../Components/Recommend";
import {
  useAllProductsQuery,
  useLimitProductQuery,
  useUserCommentsQuery,
} from "../features/ProductApi";

export default function Home() {
  const { data } = useUserCommentsQuery();
  const { data: limit } = useLimitProductQuery();
  const { data: allProduct } = useAllProductsQuery();
  console.log(allProduct);

  const category = allProduct?.products.reduce((obj, item) => {
    !obj[item["category"]]
      ? (obj[item["category"]] = 1)
      : obj[item["category"]]++;
    return obj;
  }, {});

  return (
    <section className="home-screen">
      <Banner />
      <CreditsCard />
      <p className="text-center mt-5 userComments">Category</p>
      <div className="chip-con">
        {category &&
          Object.entries(category).map(([categories, amount], index) => {
            return <Chip key={index} data={categories} />;
          })}
      </div>
      <div className="product-card-con">
        {limit &&
          limit.products.map((item,index) => {
            return <ProductCard data={{item,index}} key={index} />;
          })}
      </div>

      <p className="text-center mt-5 userComments">Recommend</p>
      <Recommend />
      <p className="text-center mt-5 userComments">User Comments</p>
      <div className="d-flex align-items-center w-100 mb-5 p-5 userComments-con">
        {data?.comments.map((item, index) => {
          return <Comments key={index} data={item} />;
        })}
      </div>
    </section>
  );
}
