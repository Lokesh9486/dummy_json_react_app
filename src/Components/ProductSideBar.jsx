import Accordion from "react-bootstrap/Accordion";
import { useDispatch } from "react-redux";
import { useAllProductsQuery } from "../features/ProductApi";
import { searchProduct } from "../features/ProductSlice";

export default function ProductSideBar() {
  const { data: allProduct } = useAllProductsQuery();
  const category = allProduct?.products.reduce((obj, item) => {
    !obj[item["category"]]
      ? (obj[item["category"]] = 1)
      : obj[item["category"]]++;
    return obj;
  }, {});
  const dispatch = useDispatch();
  function catergorySearch(data) {
    dispatch(searchProduct(data));
  }
  return (
    <div className="side-bar">
      <p>Filter:</p>
      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Category</Accordion.Header>
          <Accordion.Body>
            <ul>
              {category &&
                Object.entries(category).map(([categories, amount], index) => {
                  return (
                    <li key={index}
                    onClick={() => catergorySearch(categories)}
                    >
                      <p>{categories}</p> <span>{amount}</span>
                    </li>
                  );
                })}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        {/* <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>

          </Accordion.Body>
        </Accordion.Item> */}
      </Accordion>
    </div>
  );
}
