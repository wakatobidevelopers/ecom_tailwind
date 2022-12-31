import products from "../data/products";
const Categories = (props) => {
   const item = props.item
   return (
      <ul className='font-secondary font-normal flex flex-col'>
         <li className='flex justify-between mb-3'>
           {item.categoryName}
            <span className='font-semibold text-primary_color bg-light-green px-2 rounded-xl'>
               {products.filter((product, productIndex) => product.category === item.categoryName).length}
           </span>
         </li>
       </ul>
   )
}

export default Categories;