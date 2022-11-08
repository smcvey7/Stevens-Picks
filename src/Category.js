import React, {useState} from "react";
import Post from "./Post";

function Category({posts, title}){
  const postList = posts? posts.map(post=>{
    return <Post key={post.id} postInfo={post} />
  }):
  <p>no posts available</p>

  return(
    <div>
      <h1>{title}</h1>
      {postList}
    </div>
  )
};

export default Category