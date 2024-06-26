"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/logo.png";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fixed z-10 w-full h-16 shadow-xl  bg-black ">
      <div className="flex justify-between items-center h-full  px-4 2xl:px-16">
        <div className="w-36">
          <Link href="/">
            <Image
              src={Logo}
              alt=""
              width={205}
              height={25}
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>

        <div className="hidden sm:flex">
          <ul className="hidden sm:flex text-white">
            <Link href="/brands">
              <li className="ml-10 uppercase hover:border-b text-xl">Brands</li>
            </Link>

            <Link href="/blogs">
              <li className="ml-10 uppercase hover:border-b text-xl">Blogs</li>
            </Link>

            <Link href="/investors">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Investors
              </li>
            </Link>
            <Link href="/auth/login">
              <li className="ml-10 uppercase hover:border-b text-xl">Login</li>
            </Link>
            <Link href="/faqs">
              <li className="ml-10 uppercase hover:border-b text-xl">Faqs</li>
            </Link>
          </ul>
        </div>

        <div className="sm:hidden text-white cursor-pointer pl-24">
          {menuOpen ? (
            <AiOutlineClose onClick={handleNav} size={30} />
          ) : (
            <CgMenuRightAlt onClick={handleNav} size={30} />
          )}
        </div>
      </div>

      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[70%]  sm:hidden h-screen bg-[#000000] p-10 case-in duration-600"
            : "fixed left-[-100%] top-0 p-10 case-in duration-600"
        }
      >
        <div className="flex w-full items-center justify-center"></div>

        <div className="flex-col py-4 text-white bg-[#000000]">
          <ul>
            <Link href="/brands">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Brands
              </li>
            </Link>

            <Link href="/investors">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Investors
              </li>
            </Link>

            <Link href="/auth/login">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Login
              </li>
            </Link>
            <Link href="/faqs">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Faqs
              </li>
            </Link>

            <Link href="/auth/register">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Register
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
