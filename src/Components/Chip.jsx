import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchProduct } from "../features/ProductSlice";

export default function Chip({ data }) {
  const history = useNavigate();
  const dispatch = useDispatch();
  function catergorySearch(data) {
    dispatch(searchProduct(data));
    history("/product");
  }
  return (
    <button type="button" onClick={() => catergorySearch(data)}>
      {data}
    </button>
  );
}
