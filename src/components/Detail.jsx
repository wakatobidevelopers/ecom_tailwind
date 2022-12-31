import { useParams } from "react-router-dom";
import Loyout from "./Loyout";
import products from "../data/products";
import CardProducts from "./CardProducts";
import ProductsDetail from "./ProductsDetail";

const Detail = () => {
   const params = useParams();
   const item = products.filter(
      Element => Element.name === params.productName
   )
   return (
      <Loyout>
         
            <ProductsDetail item = {item[0]}/>
         
      </Loyout>
   )
}

export default Detail;