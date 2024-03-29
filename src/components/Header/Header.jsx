"use client";
import {  useState } from "react";
import Link from "next/link";

/**
 * Header Component
 * 
 * This component represents the header section of the website.
 * It contains the navigation links and a mobile menu toggle.
 */

const Header = () => {
 const [menuBtn, setMenuBtn] = useState(false);

 let mobileMenu;
 if (menuBtn) {
   mobileMenu = (
     <div className="fixed top-auto z-50 w-full shadow-sm bg-theme">
       <ul className="text-white bg-theme">
         <li className="my-3">
           <Link className="w-full block p-2 my-0.5 text-sm" href="/">
             Home
           </Link>
         </li>
         <li className="my-3">
           <Link className="w-full block p-2 my-0.5 text-sm" href="/about">
             About us
           </Link>
         </li>
         <li className="my-3">
           <Link className="w-full block p-2 my-0.5 text-sm" href="/contact">
             Contact
           </Link>
         </li>
         <li className="my-3">
           <Link
             className="w-full block p-2 my-0.5 text-sm"
             href="/policyholder-portal"
           >
             Policyholder Portal
           </Link>
         </li>
         <li className="my-3">
           <Link
             className="w-full block p-2 my-0.5 text-sm"
             href="/report-claim"
           >
             Report a Claim
           </Link>
         </li>
       </ul>
     </div>
   );

 }
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="flex items-center justify-between w-full px-3 py-3 mx-auto xl:px-0 max-w-7xl">
        <div className="w-full lg:w-1/6">
          <Link href="/">
            <img
              className="mx-auto lg:mx-0"
              src="/img/logo/logo.webp"
              alt="header_logo"
            />{" "}
          </Link>
        </div>
        <div className="hidden lg:inline-block text-end">
          <ul>
            <li className="inline-block mx-4">
              <Link className="p-3 font-medium" href="/">
                Home
              </Link>
            </li>
            <li className="inline-block mx-4">
              <Link className="p-3 font-medium" href="/about">
                About us
              </Link>
            </li>
            <li className="inline-block mx-4">
              <Link className="p-3 font-medium" href="/contact">
                Contact
              </Link>
            </li>
            <li className="inline-block mx-4">
              <Link className="p-3 font-medium" href="/policyholder-portal">
                Policyholder Portal
              </Link>
            </li>
            <li className="inline-block">
              <Link
                className="px-5 py-3 text-white transition-all duration-300 ease-linear border hover:text-theme bg-theme rounded-3xl border-theme hover:bg-white"
                href="/report-claim"
              >
                Report a Claim
              </Link>
            </li>
          </ul>
        </div>
        <div className="order-3 inline-block cursor-pointer lg:hidden">
          <button
            aria-label="toggle-navbar"
            onClick={() => setMenuBtn(!menuBtn)}
            className="flex flex-col items-center justify-center p-1 border border-theme"
          >
            <img src="/img/icons/toggle.webp" alt="" />
          </button>
        </div>
      </div>
  <div className={menuBtn ? `h-screen w-screen absolute bg-[#00000080]`:``}>{mobileMenu}</div>
    </header>
  );
};

export default Header;
