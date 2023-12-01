import React from "react";
import FeedBackItem from "./FeedBackItem";

export default function FeedBackList({ feedback }) {
  console.log(feedback);
  if(!feedback || feedback.length ===0){
    return <h3>No feedback yet</h3>;
  }
  return <div className="feedback-list">
    {feedback.map((item)=>(
        <FeedBackItem  key={item.id} item={item}/>
    ))}
  </div>;
}
