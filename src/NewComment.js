import React, {useState, useEffect} from "react";

function NewComment({currentUser, id, createComment, existingComments, type}){
  const [comment, setComment]=useState({
    user: currentUser? currentUser: "anonymous",
    text: ""
  })

  function handleChange(e){
    const updatedComment = {
      ...comment,
      [e.target.name]: e.target.value
    }

    setComment(updatedComment)
  }

  function handleSubmit(e){
    e.preventDefault()
    const newCommentList = [...existingComments, comment]
    createComment(newCommentList, id, type)
    setComment({
      ...comment,
      text: ""
    })
  }

  return(
    <div className="individualComment">
      <form onSubmit={handleSubmit}>
        <em><strong>{comment.user}:</strong></em>
        <textarea name="text" value={comment.text} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default NewComment