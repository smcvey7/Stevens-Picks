import React, {useState, useEffect} from "react";
import Comment from "./Comment";

function Post({postInfo}){
  const [likeCount, setLikeCount]=useState(0)
  const comments = postInfo.comments.length===0? <emphasize>no comments yet</emphasize> : postInfo.comments.map(comment=>{
    return <Comment key={comment.id} commentInfo={comment} />
  })

  useEffect(()=>{
    const savedLikes= postInfo.likes
    setLikeCount(savedLikes)
  },[])

  function handleNewLike(){
    console.log("liked")
  }
  return(
    <div className="moduleElement">
      <h3>{postInfo.title}</h3>
      <img src={postInfo.img}></img>
      <p>{postInfo.text}</p>
      <small>Posted by: {postInfo.creator}</small>
      <p>{postInfo.likes} <strong onClick={handleNewLike}>❤️</strong></p>
      <div className="commentList">
        {comments}
      </div>
    </div>
  )
}

export default Post