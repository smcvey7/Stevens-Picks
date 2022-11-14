import React, {useState, useEffect} from "react";
import Comment from "./Comment";

function Post({postInfo, updateLikes}){
  const [likeCount, setLikeCount]=useState(0)
  const comments = postInfo.comments.length===0? <emphasize>no comments yet</emphasize> : postInfo.comments.map(comment=>{
    return <Comment key={comment.id} commentInfo={comment} />
  })

  useEffect(()=>{
    const savedLikes= postInfo.likes
    setLikeCount(savedLikes)
  },[])

  function handleNewLike(){
    const newLikeCount = likeCount + 1
    const updatedLikeCount = newLikeCount
    setLikeCount(updatedLikeCount)
    updateLikes(postInfo.id, newLikeCount, postInfo.type)
  }
  return(
    <div className="moduleElement">
      <a className="postTitle" href={postInfo.link}><h3>{postInfo.title}</h3></a>
      <img src={postInfo.img}></img>
      <p>{postInfo.text}</p>
      <small>Posted by: {postInfo.creator}</small>
      <button onClick={handleNewLike}>{likeCount} ❤️</button>
      <div className="commentList">
        {comments}
      </div>
    </div>
  )
}

export default Post