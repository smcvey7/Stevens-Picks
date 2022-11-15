import React, {useState} from "react";

function NewComment(){
  const [commentText, setCommentText]=useState("")

  function handleChange(e){

  }
  return(
    <div className="individualComment">
      <form>
        <input/>
      </form>
    </div>
  )
}

export default NewComment