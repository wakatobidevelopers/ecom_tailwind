function MainMenu(props) {
   return (<li className=' flex items-center gap-0.5'>
   {props.title}
   <span>
     <img src="icons/arrow.png"></img>
   </span>
 </li>)
}

export default MainMenu;