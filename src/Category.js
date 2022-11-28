import React, {useState} from "react";
import Post from "./Post";

function Category({posts, updateLikes, heading, currentUser, createComment}){
  const postList = posts? posts.map(post=>{
    return <Post key={post.id} postInfo={post} updateLikes={updateLikes} currentUser={currentUser} createComment={createComment} />
  }):
  <p>no posts available</p>

  return(
    <div>
      <h1 className="categoryTitle">{heading}</h1>
      {postList}
    </div>
  )
};

export default Category