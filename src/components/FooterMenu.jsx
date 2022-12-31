const FooterMenu = () => {
   return (
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
   )
}

export default FooterMenu;