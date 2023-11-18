import React from "react";
import thumbs_icon from "./assests/thumbs-icon.png";

const PostContent = () => {
  return (
    <div>
      <div className="absolute w-full mt-10">
        <div className="flex w-full">
          <h1 className="absolute left-5 font-bold text-xl">
            A Changing World Order
          </h1>
          <img src={thumbs_icon} alt="Logo" className="h-8 absolute right-5" />
        </div>
        <div className="absolute mt-12 ml-5 mr-5">
          <p class="text-ellipsis overflow-hidden ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos
            hic eveniet facere, laudantium non quaerat facilis consequatur
            voluptatibus, dolorem iusto blanditiis eligendi accusantium alias
            officia nostrum tempora repellat ratione.....
          </p>
        </div>
        <div className="flex mt-44 w-full">
          <div className="absolute left-5">
            <p>
              <span>musing</span> by anujgosalia
            </p>
          </div>
          <div className="absolute right-5">
            <p>
              <span>August 2</span>
              <span> &#183; 2 mins Read</span>
              <span> &#183; 102 views</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
