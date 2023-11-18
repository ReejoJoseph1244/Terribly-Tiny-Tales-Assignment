import React, { useEffect, useState } from "react";
import PostContent from "./PostContent";

const Posts = () => {
    const [postdata, setpostdata] = useState([
      {
        Title: "A Changing World Order",
        Description: "The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including.",
        type: "musing",
        by: "anujgosalia",
        date: "August 2",
        readtime: "2 mins",
        views: 102,
      },
      {
        Title: "Indian v/s Australia",
        Description:
          "Think about it - this cricket series was akin to therapy.\n Laying our childhood trauma up top, working with it slowly and surely over two m",
        type: "thought",
        by: "anujgosalia",
        date: "January 21",
        readtime: "1 min",
        views: 156,
      },
      {
        Title: "Write To Build",
        Description:
          "Writing is the first step to create:  \n - stories \n-products \n- companies",
        type: "thought",
        by: "anujgosalia",
        date: "November 18",
        readtime: "1 min",
        views: 228,
      },
    ]);
    // save data to localStorage
    var saveStateToLocalStorage = () => {
      localStorage.setItem("postdata", JSON.stringify(postdata));
    };
  
    // Fetch data from local storage
    var getStateFromLocalStorage = () => {
      let data = localStorage.getItem("postdata");
      if (data !== undefined) {
        setpostdata(JSON.parse(data));
      }
    };
  
    useEffect(() => {
      // Fetch data from local storage
      saveStateToLocalStorage();
      getStateFromLocalStorage();
    }, []);
  return (
    <div>
      <div class="flex mt-2">
        <div className='w-2/6 h-10 pl-5 pr-2 h-10 border-t-2 border-r-2 border-slate-400'> <span className='text-sky-600 font-semibold truncate'>134 Posts</span> </div>
        <div className='w-4/6 border-b-2 h-10 border-slate-400'></div>
      </div>

     {/* post content */}
     {
      postdata && postdata.map((data,index)=>{
        return(
          <>
          <PostContent data = {data}/> 
          <hr className="mt-64"></hr >
          </>
        )
        
        
      })
     }
     
     {/* <PostContent /> 
     <hr className="mt-64"></hr >
     <PostContent /> 
     <hr className="mt-64"></hr > */}




    </div>
  );
};

export default Posts;
