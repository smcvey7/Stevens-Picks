import React from "react";

function Comment({commentInfo}){
  return(
    <div>
      <strong>{commentInfo.user}:</strong>
      <p>{commentInfo.text}</p>
    </div>
  )
}

export default Comment