import React from "react";

function Comment({commentInfo}){
  return(
    <div className="individualComment">
      <p><strong>{commentInfo.user}: </strong>{commentInfo.text}</p>
      
    </div>
  )
}

export default Comment