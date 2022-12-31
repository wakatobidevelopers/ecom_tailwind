import MainMenu from './MainMenu';
import FooterMenu from './FooterMenu';
import Home from './Home';

const Loyout = (props) => {
   return(<div className='text-black'>

   <div className='max-w-container px-11 mx-auto'>
   <div className=" border-b border-ligth_grey flex justify-between font-primary py-4 text-sm  ">
     <ul className='flex'>
       <li className='pr-3.5 text-primary_color'><a href='#'>Chat With Us</a></li>
       <li className='pr-3.5'>+420 336 775 664</li>
       <li className='pr-3.5' >info@leumangshop.com</li>
     </ul>

     <ul className='flex text-primary_color'>
       <li className='pl-3.5'><a href='#'>Blog</a></li>
       <li className='pl-3.5'><a href='#'>About Us</a></li>
       <li className='pl-3.5'><a href='#'>Career</a></li>
     </ul>
   </div>

   <div className='Hero flex justify-between font-secondary mt-10 mb-6'>
     <h1 className='text-lg font-bold'>LeumangShop</h1>
     <label className='flex relative items-center'>
       <input className='w-517 px-3.5 py-2 rounded-xl bg-ligth_grey border border-grey_2 focus:outline-none text-primary_color' type="text" placeholder="Search Product, categories..."/>
       <span className='absolute right-4'>
         <img src="icons/search.png"/>
       </span>
     </label>
     <div className='flex items-center w-20 justify-between'>
         <img src="icons/User.png" />
       <span className='flex relative'>
         <img src="icons/cart.png" />
         <div className='absolute text-white top-4 right-1.3 bg-orange w-4 h-4 font-primary font-semibold text-sm flex justify-center items-center rounded-full'>4</div>
       </span>
       </div>
     </div>
   </div>

   <div className=' bg-ligth_grey'>
     <ul className=' flex max-w-container mx-auto px-11 font-primary text-md font-medium gap-10 py-4'>
       <MainMenu title="Bakery"/>
       <MainMenu title="Fruit & Vegetables"/>
       <MainMenu title="Meat and Fish"/>
       <MainMenu title="Drinks"/>
       <MainMenu title="Kitchen"/>
       <MainMenu title="Special Nutrition"/>
       <MainMenu title="Baby"/>
       <MainMenu title="Pharmacy"/>
     </ul>
   </div>


   {props.children}

   <footer className='flex-col max-w-container px-11 py-16 mx-auto flex justify-between gap-200 font-secondary'>
     <FooterMenu/>
     <p className='font-normal font-secondary text-sm_2 -mt-52 -mb-20 pb-16 pt-12'>Copyright &copy; pertbilek.com</p>
   </footer>

 </div>)
}

export default Loyout;