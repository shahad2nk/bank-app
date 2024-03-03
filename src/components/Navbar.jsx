import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <nav className='w-full flex  justify-between p-4  '>
      <img src={logo} alt="logo" className="w-[124px] h-[60px]" />

      <ul className="list-none text-white  sm:flex hidden justify-end items-center flex-1 ">
        {navLinks.map((link, index) => (

          <li
          key={link.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] 
          ${active === link.title ? "text-[#33bbcf]" : "text-dimWhite"}
          ${index === navLinks - 1 ? "mr-0" : "mr-10"}`}
          onClick={()=> setActive(link.title)}>

            <a href={`#${link.id}`}> {link.title}</a>
          </li>



        ))}
      </ul>

      {/* Small devices menu */}
      <div className="text-white sm:hidden flex flex-1 justify-end items-center cursor-pointer">
        <img src={toggle ? close : menu } alt="menu" 
        className="w-[28px] h-[28px] object-contain"
        onClick={() => setToggle((prev) => !prev)}/>

        <div className= {`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col ">
            {navLinks.map((link, index) => (
              <li
              key={link.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] 
              ${active === link.title ? "text-[#33bbcf]" : "text-dimWhite"}
              ${index == navLinks.length - 1 ? "mr-0" : "mb-6"}`}
              onClick={()=> setActive(link.title)}>

                <a href="{`#${link.id}`}"> {link.title}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>
      </nav>
  )
}

export default Navbar
