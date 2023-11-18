import React from "react";
import PostContent from "./PostContent";

const Posts = () => {
  return (
    <div>
      <div class="flex">
        <div className='w-1/6 h-10 pl-5 pr-2 h-10 border-t-2 border-r-2 border-slate-400'> <span className='text-sky-600 font-semibold'>134 Posts</span> </div>
        <div className='w-5/6 border-b-2 h-10 border-slate-400'></div>
      </div>

     {/* post content */}
     <PostContent /> 
     <hr className="mt-64"></hr >
     <PostContent /> 
     <hr className="mt-64"></hr >
     <PostContent /> 
     <hr className="mt-64"></hr >




    </div>
  );
};

export default Posts;
