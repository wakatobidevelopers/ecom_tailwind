import category from '../data/category';
import products from '../data/products';
import CardProducts from './CardProducts';
import Categories from './Categories';
import Loyout from './Loyout';

const Home = () => {
   return (
      <Loyout>
         <div className= "flex max-w-container mt-16 mx-auto px-11 gap-18" >
         <div>
     <div className='categories w-65'>
       <h1 className='font-primary font-semibold text-[28px] mb-4'>Categories</h1>
         {category.map((item, index) => {
            return (
               <Categories item={item} key={ index } />
            )
         })}
     </div>
     <div className='orderedBy w-65'>
         <h1 className='font-primary font-semibold text-[28px] mb-4 mt-12'>Order By</h1>
         <div className='font-secondary font-normal flex flex-col gap-3'>
         <label>
            <input type="checkbox" className='w-5 h-5 text-primary_color border-grey_2 rounded border-2 checked:border-2 focus:ring-0 mr-2.5' />
            <span>Termurah</span>
         </label>
         <label>
            <input type="checkbox" className='  w-5 h-5 text-primary_color border-grey_2 rounded border-2 checked:border-2 focus:ring-0 mr-2.5' />
            <span>Terlaris</span>
         </label>
         <label>
            <input type="checkbox" className='  w-5 h-5 text-primary_color border-grey_2 rounded border-2 checked:border-2 focus:ring-0 mr-2.5' />
            <span>Termahal</span>
         </label>
         </div>
     </div>
     </div>
     <div>
       <div className='product flex flex-wrap gap-8'>
         {products.map((item, index) => { 
           return (
             <CardProducts item={item} key={ index } />
           )
         })};
         
         <div className='flex bg-primary_color border-2 border-secondary items-center my-104 py-3 px-4 mx-auto rounded-xl'>
           <button className='font-bold text-white font-primary'>Show more products</button>
           <img className='pl-2.5' src='icons/Vector.png'/>
         </div>
       </div>
     </div>
      </div>
      </Loyout>
   )
}

export default Home;