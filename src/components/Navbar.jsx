// import React from "react";
import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { TransactionContext } from "../context/TransactionContext";
import logo from "../images/logo.png";
// import { useMoralis } from "react-moralis";
const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { currentAccount } = useContext(TransactionContext);
  // const { authenticate, isAuthenticated, user } = useMoralis();

  // const { currentAccount1, disconnectWallet } = useContext(TransactionContext);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {/* {[
          "Services",
          "Latest Transactions",
          "Currency Convertor",
          "Cryptocurrency Prices",
        ].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))} */}
        {/* <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full"> */}
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          {/* <NavLink to="/" exact> */}
          <a href="#welcome"> Home</a>
          {/* </NavLink> */}
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          {/* <NavLink to="/Services"> */}
          <a href="#services"> Services </a>
          {/* </NavLink> */}
        </p>

        <p className="text-white text-base text-center mx-2 cursor-pointer">
          {/* <NavLink to="/Transactions"> */}
          <a href="#transaction"> Latest Transactions</a>
          {/* </NavLink> */}
        </p>

        {/* </div> */}

        {/* if (!isAuthenticated){" "}
        {
          <div>
            <button onClick={() => authenticate()}>Authenticate</button>
          </div>
        } */}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Services", "Latest Transactions"].map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                classprops="my-2 text-lg "
              />
            ))}{" "}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
