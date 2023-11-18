import React from 'react';
import bgphoto from "./assests/bgphoto.jpg";
import profile from "./assests/profile.jpg";
import diamond_icon from "./assests/diamond-icon.png";
import verified_icon from "./assests/verified_icon.png";
import star_icon from "./assests/star.png";
import thumbs_icon from "./assests/thumbs-icon.png";
import like_icon from "./assests/likes_icon.png";
import eye_icon from "./assests/eye-icon.png";

const Header = (props) => {
  return (
    <div>
        <img src={bgphoto} alt="Logo" className="w-full h-80" />
      <div></div>
      <img src={profile} alt="Logo" className="absolute top-0 left-2 h-32 mt-72 rounded-full border-solid border-2 border-slate-500	"      />

      <div className="flex absolute mx-28 mt-5 ">
        <div className=''>
        <h2 className="text-xl font-bold truncate ml-10">{props.profiledata.Name}</h2>
        </div>
        <div className='w-10 flex'>
          <img src={diamond_icon} alt="Logo" className="h-8 ml-2" />
          <img src={verified_icon} alt="Logo" className="h-8" />
        </div>
      </div>

      <div className="flex absolute mt-16">
          <div className="absolute mx-40 p-1 pl-5 pr-5 border-solid border-2 text-slate-400 font-bold border-slate-400 rounded-lg">{props.profiledata.Followers}</div>
          <p className=" absolute p-1 pl-2 text-slate-400 mt-8 mx-40">Followers</p>
          <div className="absolute mx-64  p-1 pl-5 pr-5 border-solid border-2 text-slate-400 font-bold border-slate-400 rounded-lg">{props.profiledata.Following}</div>
          <p className="absolute p-1 text-slate-400 mt-8 mx-64">Following</p>
      </div>

      <div className="mt-44">
      <p>{props.profiledata.Bio}</p>
      <a  href="https://www.instagram.com/anujgosalia" className="text-sky-500">{props.profiledata.InstaId}</a>
      </div>

      <div className='flex items-center justify-center gap-2 mt-5'>
        <img src={star_icon} alt="Logo" className="h-8 " />
        <span>{props.profiledata.Star}</span>
        <img src={thumbs_icon} alt="Logo" className="h-8 " />
        <span>{props.profiledata.Likes}</span>
        <img src={eye_icon} alt="Logo" className="h-8 " />
        <span>{props.profiledata.Views}</span>
        <img src={like_icon} alt="Logo" className="h-8 " />
        <span>{props.profiledata.Liked}</span>
      </div>

    </div>
  )
}

export default Header