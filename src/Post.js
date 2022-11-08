import React from "react";
import Comment from "./Comment";

function Post({postInfo}){
  const comments = postInfo.comments.length===0? <emphasize>no comments yet</emphasize> : postInfo.comments.map(comment=>{
    return <Comment commentInfo={comment} />
  })
  return(
    <div className="moduleElement">
      <h3>{postInfo.title}</h3>
      <small>{postInfo.creator}</small>
      <img src={postInfo.img}></img>
      <p>{postInfo.text}</p>
      <div className="commentList">
        
      </div>
    </div>
  )
}

export default Post