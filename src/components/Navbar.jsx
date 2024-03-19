"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/logo.jpeg";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fixed z-10 w-full h-16 shadow-xl  bg-[#020d17] ">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div className="w-14">
          <Image
            src={Logo}
            alt=""
            width={205}
            height={25}
            className="cursor-pointer"
            priority
          />
        </div>

        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl">Brands</li>
            </Link>

            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl">Blogs</li>
            </Link>

            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Investors
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Academy
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl">Faqs</li>
            </Link>
          </ul>
        </div>

        <div className="sm:hidden cursor-pointer pl-24">
          {menuOpen ? (
            <AiOutlineClose onClick={handleNav} size={30} />
          ) : (
            <AiOutlineMenu onClick={handleNav} size={30} />
          )}
        </div>
      </div>

      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#000000] p-10 case-in duration-500"
            : "fixed left-[-100%] top-0 p-10 case-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end"></div>

        <div className="flex-col py-4 bg-[#000000]">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Brands
              </li>
            </Link>

            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Investors
              </li>
            </Link>

            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Academy
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Faqs
              </li>
            </Link>

            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineFacebook size={30} className="cursor-pointer" />
          <AiOutlineTwitter size={30} className="cursor-pointer" />
        </div>
        <Image
          src={Logo}
          alt=""
          width={105}
          height={25}
          className="cursor-pointer"
          priority
        />
      </div>
    </nav>
  );
}

export default Navbar;
