import React, {useState} from "react";
import Post from "./Post";

function Category({posts, title}){
  console.log(title, "category receives", posts)
  
  return(
    <div>
      <h1>{title}</h1>
    </div>
  )
};

export default Category