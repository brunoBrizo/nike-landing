import { BiShoppingBag } from "react-icons/bi";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

const Nav = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center">
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>

      <button
        className="lg:hidden p-2 focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-100"
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
      >
        <RxHamburgerMenu size={25} />
      </button>

      <div
        className={`${!isMobileMenuShown && "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 lg:bg-transparent text-lg border border-gray-100 lg:border-none rounded-lg p-4">
          {ROUTES.map((route, i) => {
            return (
              <li
                key={route}
                className={`rounded cursor-pointer py-2 px-3 ${
                  i === 0
                    ? "bg-blue-500 lg:bg-transparent text-white lg:text-blue-500"
                    : "hover:bg-gray-100"
                }`}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="fixed bottom-4 left-4 lg:static">
        <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md">
          <BiShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
