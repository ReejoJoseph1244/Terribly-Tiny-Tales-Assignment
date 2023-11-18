import React from "react";
import logo_icon from "./assests/ttt.svg";

const Navbar = () => {
  return (
    <div>
      <div className="h-50 w-full bg-black text-white absolute flex">
        <div className="flex gap-4">
          <img src={logo_icon} alt="Logo" className="pt-5 pl-10 pb-5" />
          <div className="h-10 w-px bg-slate-400 mt-4"></div>
          <h1 className="font-mono text-2xl tracking-widest pt-5 pb-5">
            STORIES
          </h1>
        </div>
        <button
          type="submit"
          className="block absolute right-2 mt-3  rounded-md bg-yellow-500 p-3 pl-5 pr-5 text-center font-bold text-black shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        >
          Courses
        </button>
      </div>
    </div>
  );
};

export default Navbar;
