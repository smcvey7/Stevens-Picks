import React, {useState, useEffect} from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";

function Post({postInfo, updateLikes, currentUser, createComment}){
  const [likeCount, setLikeCount]=useState(0)
  const [comments, setComments]=useState(null)

  useEffect(()=>{
    if (postInfo.comments.length===0){
      setComments(<div className="individualComment flexContainer"><em>Be the first to comment!</em></div>)
    }else {
      const commentList = postInfo.comments.map(comment=>{
        return <Comment key={comment.text} commentInfo={comment} />
      })
      setComments(commentList)
    }

    const savedLikes= postInfo.likes
    setLikeCount(savedLikes)
  }, [postInfo])

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
        <NewComment currentUser={currentUser} id={postInfo.id} createComment={createComment} existingComments = {postInfo.comments} type={postInfo.type} />
        {comments}
      </div>
    </div>
  )
}

export default Post