import './App.css';
import './index.css';

function App() {
  return (
    <div className='text-black'>

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
          <li className=' flex items-center gap-0.5'>
            Bakery
            <span>
              <img src="icons/arrow.png"></img>
            </span>
          </li>
          <li className=' flex items-center gap-0.5'>
            Fruit and vegetables
            <span>
              <img src="icons/arrow.png"></img>
            </span>
          </li>
          <li className=' flex items-center gap-0.5'>
            Meat and Fish
            <span>
              <img src="icons/arrow.png"></img>
            </span>
          </li>
          <li className=' flex items-center gap-0.5'>
            Drinks
            <span>
              <img src="icons/arrow.png"></img>
            </span>
          </li>
          <li className=' flex items-center gap-0.5'>
            Kitchen
            <span>
              <img src="icons/arrow.png"></img>
            </span>
          </li>
          <li className=' flex items-center gap-0.5'>
            Special Nutrition
            <span>
              <img src="icons/arrow.png"></img>
            </span>
          </li>
          <li className=' flex items-center gap-0.5'>
            Baby
            <span>
              <img src="icons/arrow.png"></img>
            </span>
          </li>
          <li className=' flex items-center gap-0.5'>
            Pharmacy
            <span>
              <img src="icons/arrow.png"></img>
            </span>
          </li>
        </ul>
      </div>

  
      <div className='flex max-w-container mt-16 mx-auto px-11 gap-18'>
        
        <div>
        <div className='categories w-65'>
          <h1 className='font-primary font-semibold text-[28px] mb-4'>Categories</h1>
          <ul className='font-secondary font-normal flex flex-col gap-3'>
            <li className='flex justify-between'>
              Bolu
              <span className='font-semibold text-primary_color bg-light-green px-2 rounded-xl'>320</span>
            </li>
            <li className='flex justify-between'>
              Mie
              <span className='font-semibold text-primary_color bg-light-green px-2 rounded-xl'>112</span>
            </li>
            <li className='flex justify-between'>
              Pizza
              <span className='font-semibold text-primary_color bg-light-green px-2 rounded-xl'>32</span>
            </li>
            <li className='flex justify-between'>
              Dessert
              <span className='font-semibold text-primary_color bg-light-green px-2 rounded-xl'>48</span>
            </li>
          </ul>
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
            <div className='productItems relative border border-grey_2 p-4 rounded-xl font-primary box-border w-65'>
              <span className='absolute bg-light-green font-semibold text-primary_color px-2 rounded-xl font-primary left-6 top-6'> -36 % </span>
              <img src="/images/BoluSusun.png" />
              <h1 className=' font-medium text-base mt-4'>Bolu Susun</h1>
              <p className=' font-secondary text-sm text-third mb-4'>Disusun dengan penuh kenangan</p>
              <div className='price flex justify-between items-center'>
                <div className='font-semibold'>
                  <h1 className='text-18'>36.000</h1>
                  <h2 className='line-through text-sm text-grey'>40.000</h2>
                </div>
                <button className='font-bold bg-primary_color px-3 border-2 border-secondary h-9 rounded-xl text-white'>Buy Now</button>
              </div>
            </div>

            <div className='productItems relative border border-grey_2 p-4 rounded-xl font-primary box-border w-65'>
              <span className='absolute bg-light-green font-semibold text-primary_color px-2 rounded-xl font-primary left-6 top-6'> -36 % </span>
              <img src="/images/mieaceh.png" />
              <h1 className=' font-medium text-base mt-4'>Mie Aceh</h1>
              <p className=' font-secondary text-sm text-third mb-4'>Rasanya menusuk jiwa dan raga</p>
              <div className='price flex justify-between items-center'>
                <div className='font-semibold'>
                  <h1 className='text-18'>26.000</h1>
                  <h2 className='line-through text-sm text-grey'>30.000</h2>
                </div>
                <button className='font-bold bg-primary_color px-3 border-2 border-secondary h-9 rounded-xl text-white'>Buy Now</button>
              </div>
            </div>

            <div className='productItems relative border border-grey_2 p-4 rounded-xl font-primary box-border w-65'>
              <img src="/images/BoluLapis.png" />
              <h1 className=' font-medium text-base mt-4'>Bolu Lapis</h1>
              <p className=' font-secondary text-sm text-third mb-4'>Lapisan legit disetiap sentuhannya</p>
              <div className='price flex justify-between items-center'>
                <div className='font-semibold'>
                  <h1 className='text-18'>42.000</h1>
                </div>
                <button className='font-bold bg-primary_color px-3 border-2 border-secondary h-9 rounded-xl text-white'>Buy Now</button>
              </div>
            </div>

            <div className='productItems relative border border-grey_2 p-4 rounded-xl font-primary box-border w-65'>
              <img src="/images/Donut.png" />
              <h1 className=' font-medium text-base mt-4'>Donat</h1>
              <p className=' font-secondary text-sm text-third mb-4'>Rasa donat</p>
              <div className='price flex justify-between items-center'>
                <div className='font-semibold'>
                  <h1 className='text-18'>15.000</h1>
                </div>
                <button className='font-bold bg-primary_color px-3 border-2 border-secondary h-9 rounded-xl text-white'>Buy Now</button>
              </div>
            </div>

            <div className='productItems relative border border-grey_2 p-4 rounded-xl font-primary box-border w-65'>
              <span className='absolute bg-light-green font-semibold text-primary_color px-2 rounded-xl font-primary left-6 top-6'> -36 % </span>
              <img src="/images/PizzaHut.png" />
              <h1 className=' font-medium text-base mt-4'>Pizza Hut</h1>
              <p className=' font-secondary text-sm text-third mb-4'>Potongan penuh nikmat</p>
              <div className='price flex justify-between items-center'>
                <div className='font-semibold'>
                  <h1 className='text-18'>30.000</h1>
                  <h2 className='line-through text-sm text-grey'>30.000</h2>
                </div>
                <button className='font-bold bg-primary_color px-3 border-2 border-secondary h-9 rounded-xl text-white'>Buy Now</button>
              </div>
            </div>

            <div className='productItems relative border border-grey_2 p-4 rounded-xl font-primary box-border w-65'>
              <img src="/images/MataSapi.png" />
              <h1 className=' font-medium text-base mt-4'>Mata Sapi</h1>
              <p className=' font-secondary text-sm text-third mb-4'>Penuh mata-mata</p>
              <div className='price flex justify-between items-center'>
                <div className='font-semibold'>
                  <h1 className='text-18'>12.000</h1>
                  <h2 className='line-through text-sm text-grey'>40.000</h2>
                </div>
                <button className='font-bold bg-primary_color px-3 border-2 border-secondary h-9 rounded-xl text-white'>Buy Now</button>
              </div>
            </div>
            <div className='flex bg-primary_color border-2 border-secondary items-center my-104 py-3 px-4 mx-auto rounded-xl'>
              <button className='font-bold text-white font-primary'>Show more products</button>
              <img className='pl-2.5' src='icons/Vector.png'/>
            </div>
          </div>
        </div>
      </div>

      <footer className='flex-col max-w-container px-11 py-16 mx-auto flex justify-between gap-200 font-secondary'>
        <div className='footer-menu flex justify-between w-full'>
          <div className=''>
            <h1 className='mb-4 font-primary font-semibold text-18'>Get in touch</h1>
            <ul className='flex flex-col font-normal gap-4 text-sm_2 text-primary_color '>
              <li><a>About Us</a></li>
              <li><a>Careers</a></li>
              <li><a>Press Releases</a></li>
              <li><a>Blog</a></li>
            </ul>
          </div>

          <div className=''>
            <h1 className='mb-4 font-primary font-semibold text-18'>Connections</h1>
            <ul className='flex flex-col font-normal gap-4 text-sm_2 text-primary_color '>
              <li><a>Facebook</a></li>
              <li><a>Twitter</a></li>
              <li><a>Instagram</a></li>
              <li><a>Youtube</a></li>
              <li><a>LinkedIn</a></li>
            </ul>
          </div>

          <div className=''>
            <h1 className='mb-4 font-primary font-semibold text-18'>Earnings</h1>
            <ul className='flex flex-col font-normal gap-4 text-sm_2 text-primary_color '>
              <li><a>Become an Affiliate</a></li>
              <li><a>Advertise your product</a></li>
              <li><a>Sell on market</a></li>
            </ul>
          </div>
          
          <div className=''>
            <h1 className='mb-4 font-primary font-semibold text-18'>Account</h1>
            <ul className='flex flex-col font-normal gap-4 text-sm_2 text-primary_color '>
              <li><a>Your account</a></li>
              <li><a>Returns Centre</a></li>
              <li><a>100% purchase protection</a></li>
              <li><a>Chat with us</a></li>
              <li><a>Help</a></li>
            </ul>
          </div>
        </div>
        <p className='font-normal font-secondary text-sm_2 -mt-52 -mb-20 pb-16 pt-12'>Copyright &copy; pertbilek.com</p>
      </footer>
      
    </div>
  );
}

export default App;
