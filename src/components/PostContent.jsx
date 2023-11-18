import React from "react";
import thumbs_icon from "./assests/thumbs-icon.png";

const PostContent = (props) => {
  const MAX_DESCRIPTION_LENGTH = 120;
  const Description = props.data.Description;
  const truncatedDescription = Description.length > MAX_DESCRIPTION_LENGTH 
                            ? `${Description.slice(0, MAX_DESCRIPTION_LENGTH)}...` : Description;
  return (
    <div>
      <div className="absolute w-full mt-10">
        <div className="flex w-full">
          <h1 className="absolute left-5 font-bold text-xl cursor-pointer">
            {props.data.Title}
          </h1>
          <img src={thumbs_icon} alt="Logo" className="h-8 absolute right-5 cursor-pointer" />
        </div>
        <div className="absolute mt-12 ml-5 mr-5">
          <p class="text-ellipsis overflow-hidden text-left	 ">
            
          {truncatedDescription.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
          
        ))}
          </p>
        </div> 
        <div className="flex mt-52 w-full text-xs">
          <div className="absolute left-5">
            <p>
              <span className="text-sky-500">{props.data.type}</span> by {props.data.by}
            </p>
          </div>
          <div className="absolute right-5">
            <p>
              <span>{props.data.date}</span>
              <span> &#183; {props.data.readtime}</span>
              <span> &#183; {props.data.views} views</span>
            </p>
          </div> 
        </div>
      </div> <br ></br>
    </div>
  );
};

export default PostContent;
