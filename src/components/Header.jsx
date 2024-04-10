import logo from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { useEffect } from "react";
import { drops, dropsMobile } from "../data";

const Header = ({ toggleMobileNav, setToggleMobileNav }) => {
  const handleResize = () => {
    if (window.innerWidth >= 768) setToggleMobileNav(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-main-blue px-8 lg:px-24 py-6 sticky top-0">
      <header className="flex justify-between items-center">
        <img src={logo} alt="Cyberlogitec Vietnam Logo" className="w-[130px] min-[320px]:w-[178px]"/>
        <ul className="hidden text-white gap-x-5 list-none min-[768px]:flex">
          {drops.map(drop => (
            <li key={drop.id} className="relative group">
              <div className="group-hover:text-hover-text cursor-pointer">
                <a href="*">{drop.title}</a>
                {drop.drop.length > 0 && (
                  <IoIosArrowDown className="inline pl-1 w-5" />
                )}
              </div>
              {drop.drop.length > 0 && (
                <div
                  className={`absolute bg-main-blue h-0 ${drop?.height} group-hover:transition-[height] ease-in-linear duration-100`}
                >
                  <div className="p-3 leading-10 text-[14px] overflow-hidden group-hover:border-solid group-hover:border-[1px] h-full">
                    <a
                      href="*"
                      className="underline hover:text-hover-text hover:no-underline transition duration-75"
                    >
                      Overview
                    </a>
                    <ul>
                      {drop.drop.map(dropItem => (
                        <li key={dropItem}>
                          <a
                            href="*"
                            className="pl-4 text-nowrap hover:text-hover-text transition duration-75"
                          >
                            {dropItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        <button className="text-main-blue rounded-lg bg-white px-5 py-2 hover:bg-hover-text hover:text-white transition duration-100 hidden min-[768px]:block">
          Contact Us
        </button>
        {/* small screen nav */}
        <div
          className={`block md:hidden rounded-lg hover:bg-hamburger-hover ${
            toggleMobileNav &&
            "rotate-90 border-[2px] border-hamburger-hover opacity-0.5"
          } transition duration-300`}
        >
          <button
            className="p-2 text-white text-[30px]"
            onClick={() => setToggleMobileNav(!toggleMobileNav)}
          >
            <IoMenuOutline />
          </button>
        </div>
        {toggleMobileNav && (
          <div className="absolute top-[92px] w-full left-0 px-10 px-8 bg-main-blue text-[14px] min-[768px]:hidden flex flex-col gap-y-6 pb-4">
            <div>
              <button className="rounded-lg px-3 py-2 bg-hover-text text-white hover:scale-110 transition duration-100">
                Contact Us
              </button>
            </div>
            <ul className="text-white gap-x-5 list-none flex flex-col gap-y-4 px-2">
              {dropsMobile.map(drop => (
                <li key={drop.id} className="relative group">
                  <div className="group-hover:text-hover-text cursor-pointer flex justify-between">
                    <a href="*">{drop.title}</a>
                    {drop.drop.length > 0 && (
                      <IoIosArrowDown className="inline pl-1 w-5" />
                    )}
                  </div>
                  {drop.drop.length > 0 && (
                    <div
                      className={`mt-2 absolute bg-main-blue text-[14px] leading-10 h-0 overflow-hidden ${drop?.height} group-hover:transition-[height] ease-in-linear z-10 min-w-5/6`}
                    >
                      <div className="p-3 border-[1px] border-white">
                        <a
                          href="*"
                          className="underline hover:text-hover-text hover:no-underline transition duration-75"
                        >
                          Overview
                        </a>
                        <ul>
                          {drop.drop.map(dropItem => (
                            <li key={dropItem}>
                              <a
                                href="*"
                                className="pl-4 text-nowrap hover:text-hover-text transition duration-75"
                              >
                                {dropItem}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
