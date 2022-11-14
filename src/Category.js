import React, {useState} from "react";
import Post from "./Post";

function Category({posts, title, updateLikes}){
  const postList = posts? posts.map(post=>{
    return <Post key={post.id} postInfo={post} updateLikes={updateLikes} />
  }):
  <p>no posts available</p>

  return(
    <div>
      <h1 className="categoryTitle">{title}</h1>
      {postList}
    </div>
  )
};

export default Category