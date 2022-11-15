import React, {useState, useEffect} from "react";
import Comment from "./Comment";

function Post({postInfo, updateLikes}){
  const [likeCount, setLikeCount]=useState(0)
  const comments = postInfo.comments.length===0? <em>no comments yet</em> : postInfo.comments.map(comment=>{
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
    <div className="moduleElement flexContainer">
      <div className="flexContainer nonComment">
        <div className="flexContainer postHeading">
          <a className="postTitle" href={postInfo.link}><h3>{postInfo.title}</h3></a>
          <img src={postInfo.img}></img>
        </div>
        <div className=" flexContainer postMain">
          <p>{postInfo.text}</p>
          <div className="postExtras flexContainer">
            <small>Posted by: {postInfo.creator}</small>
            <div className="likeContainer">
              <strong className="likeButton" onClick={handleNewLike}>❤️ </strong>
              {likeCount}
            </div>
          </div>
        </div>
      </div>
      <div className="flexContainer commentList">
        {comments}
      </div>
    </div>
  )
}

export default Post