import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="mb-10 px-4  text-gray-500 flex flex-col justify-center items-center  dark:text-gray-200 ">
      <small className="mb-2 block text-xs">
        &copy; 2023 Moga Charity Association. All rights reserved.
      </small>
    </footer>
  );
}
