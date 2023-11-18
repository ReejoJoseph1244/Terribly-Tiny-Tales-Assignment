import React from 'react';
import bgphoto from "./assests/bgphoto.jpg";
import profile from "./assests/profile.jpg";
import diamond_icon from "./assests/diamond-icon.png";
import verified_icon from "./assests/verified_icon.png";
import star_icon from "./assests/star.png";
import thumbs_icon from "./assests/thumbs-icon.png";
import like_icon from "./assests/likes_icon.png";
import eye_icon from "./assests/eye-icon.png";

const Header = () => {
  return (
    <div>
        <img src={bgphoto} alt="Logo" className="w-full h-80" />
      <div></div>
      <img src={profile} alt="Logo" className="absolute top-0 left-8 h-36 mt-72 rounded-full border-solid border-2 border-slate-500	"      />

      <div className="flex absolute mx-56 mt-5 align-middle">
        <h2 className="text-xl font-bold">Anuj Gosalia </h2>
        <img src={diamond_icon} alt="Logo" className="h-10 ml-2" />
        <img src={verified_icon} alt="Logo" className="h-10" />
      </div>

      <div className="flex absolute mt-16">
          <div className="absolute mx-56 p-1 pl-5 pr-5 border-solid border-2 text-slate-400 font-bold border-slate-400 rounded-lg">6482</div>
          <p className=" absolute p-1 pl-2 text-slate-400 mt-8 mx-56">Followers</p>
          <div className="absolute mx-80  p-1 pl-5 pr-5 border-solid border-2 text-slate-400 font-bold border-slate-400 rounded-lg">245</div>
          <p className="absolute p-1 text-slate-400 mt-8 mx-80">Following</p>

      </div>

      <div className="mt-44">
      <p>Co-founder & CEO at Terribly Tiny Tales</p>
      <a  href="https://www.instagram.com/anujgosalia" className="text-sky-500">https://www.instagram.com/anujgosalia/</a>
      </div>

      <div className='flex items-center justify-center gap-2 mt-5'>
        <img src={star_icon} alt="Logo" className="h-8 " />
        <span>125</span>
        <img src={thumbs_icon} alt="Logo" className="h-8 " />
        <span>12</span>
        <img src={eye_icon} alt="Logo" className="h-8 " />
        <span>57.8k</span>
        <img src={like_icon} alt="Logo" className="h-8 " />
        <span>26.0k</span>
      </div>

    </div>
  )
}

export default Header