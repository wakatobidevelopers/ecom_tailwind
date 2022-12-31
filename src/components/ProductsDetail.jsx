import { NumericFormat } from "react-number-format";
const ProductsDetail = (props) => {
 const item = props.item;
 const priceAfterDiscocunt =
  item.originalPrice - (item.originalPrice * item.discountPercent) / 100;
 return (
  <div className=" flex w-1000 mt-16 mx-auto gap-16 box-border items-center">
   <div>
    <h1 className="font-primary text-32 font-semibold">{item.name}</h1>
    <p className="font-secondary my-10 w-517">{item.descriptions}</p>
    <div className="font-semibold border-2 border-grey_2 py-4 pr-9 rounded-lg w-517 box-border flex justify-end">
     <div>
      <h1 className="text-28 text-primary_color">
       <NumericFormat
        value={priceAfterDiscocunt}
        displayType={"text"}
        prefix={"Rp "}
        thousandSeparator={true}
       />
      </h1>
      {item.discountPercent > 0 && (
       <h2 className="line-through text-sm text-grey">
        <NumericFormat
         value={item.originalPrice}
         displayType={"text"}
         prefix={"Rp "}
         thousandSeparator={true}
        />
       </h2>
      )}
     </div>
    </div>
    <div className="flex w-517 justify-between mt-5">
     <div className="font-semibold font-primary text-32 text-primary_color  ">
      <span>-</span>
      <span className="text-black bg-ligth_grey px-2 m-3">0</span>
      <span>+</span>
     </div>
     <button className="font-bold bg-primary_color px-3 border-2 border-secondary h-9 rounded-xl text-white">
      + Add to cart
     </button>
    </div>
   </div>
   <img className=" w-4/12" src={`/images/${item.image}`} />
  </div>
 );
};

export default ProductsDetail;
