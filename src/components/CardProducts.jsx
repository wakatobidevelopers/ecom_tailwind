import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
const CardProducts = (props) => {
   const item = props.item;
   const priceAfterDiscocunt = item.originalPrice - (item.originalPrice * item.discountPercent / 100);
   return (
      <div className='productItems relative border border-grey_2 p-4 rounded-xl font-primary box-border w-65'>
         {item.discountPercent > 0 && (
            <span className='absolute bg-light-green font-semibold text-primary_color px-2 rounded-xl font-primary left-6 top-6'> 
               - {item.discountPercent} %
            </span>
         )}
         <img src={`/images/${item.image}`} />
         <Link to={item.name}>
            <h1 className=' font-medium text-base mt-4'>{ item.name }</h1>
         </Link>
         <p className=' font-secondary text-sm text-third mb-4'>{ item.description }</p>
         <div className='price flex justify-between items-center'>
            <div className='font-semibold'>
               <h1 className='text-18'>
                  
                  <NumericFormat value={priceAfterDiscocunt} displayType={'text'} prefix={'Rp '} thousandSeparator={true} />
               
               </h1>
               {item.discountPercent > 0 && (
                  <h2 className='line-through text-sm text-grey'>
                   <NumericFormat value={item.originalPrice} displayType={'text'} prefix={'Rp '} thousandSeparator={true} />  
                  </h2>
               )}
            </div>
            <button className='font-bold bg-primary_color px-3 border-2 border-secondary h-9 rounded-xl text-white'>Buy Now</button>
         </div>
      </div>

   )
}

export default CardProducts;