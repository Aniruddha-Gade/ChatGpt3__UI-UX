import React, { useState, useEffect, useRef } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo.svg'
import { navLinks } from '../constants/index'




const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);

  // when menu bar is open in small devices and user click outside then menu will close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setToggleMenu(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])



  return (
    <div  className="fixed sm:static z-50 bg-black sm:bg-transparent top-0  w-full flex justify-between items-center py-4 px-4 sm:py-8 sm:px-24
     text-white font-manrope font-medium text-[18px]  ">
      <div className="flex-1 flex justify-start items-center ">

        <div className="mr-8 cursor-pointer w-[124px] h-[32px] flex items-center">
          <a href='#home'>
            <img src={logo} className="w-[62.56px] h-[16.02px]" alt="Logo" />
          </a>
        </div>

        <div className="hidden sm:flex ">
          <ul className='flex-1 flex flex-col sm:flex-row  '>
            {
              navLinks.map((link) => (
                <li className='mx-4 flex  text-start outline-none hover:text-red-500 duration-500'
                  key={link.id}>
                  <a href={`#${link.id}`} >
                    {link.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      <div className="hidden xs:flex justify-end items-center">
        <button className='mx-4 outline-none border-none'>
          Sign in
        </button>
        <button type="button" className="mx-4 px-4 py-2 bg-red-500 rounded-lg 
        outline-none border-none font-semibold">
          Sign up
        </button>
      </div>


      <div className={`sm:hidden flex justify-end items-center`}>
        <div onClick={() => setToggleMenu(prev => !prev)}
          className='xs:ml-4 cursor-pointer'>
          {
            toggleMenu
              ? <RiCloseLine color="#fff" size={27} />
              : <RiMenu3Line color="#fff" size={27} />
          }
        </div>

        {
          toggleMenu && (
            <div ref={menuRef}
              className="flex flex-col bg-gray-900 p-4 rounded-xl shadow absolute 
               right-[1.7rem] top-14 mt-4 min-w-[200px]  scale-forward ">

              <div className="flex flex-col  ">
                <ul className='flex-1 flex flex-col sm:flex-row  '>
                  {
                    navLinks.map((link, index) => (
                      <li className=' mb-4' key={link.id} onClick={() => setToggleMenu(false)} >
                        <a href={`#${link.id}`} >
                          {link.title}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className="xs:hidden flex flex-col items-start">
                <button className='mb-4'>
                  Sign in
                </button>
                <button type="button" className=" px-4 py-2 bg-red-500 font-medium rounded-lg 
                    outline-none border-none">
                  Sign up
                </button>
              </div>

            </div>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;






