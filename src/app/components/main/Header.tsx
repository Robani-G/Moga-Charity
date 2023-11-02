import { navlinks } from "@/app/lib/data";
import React from "react";
import Link from "next/link";
function Header() {
  return (
    <div className="h-12  mt-2 p-2 flex  w-full  items-center justify-between">
      <a href="/" className="font-semibold">
        Moga
      </a>
      <ul className="flex gap-3">
        {navlinks.map((nav, index) => (
          <Link className="font-semibold" key={index} href={nav.href}>
            {nav.name}
          </Link>
        ))}
      </ul>
      <div className=" flex items-center gap-2">
        <button className=" font-bold text-cyan-600  p-2"> Log in</button>
        <button className=" font-bold text-cyan-600  p-2"> Sign Up</button>{" "}
      </div>
    </div>
  );
}

export default Header;
