
import Header from "./component/Header";
import FeedBackList from "./component/FeedBackList.jsx";
import feedbackData from "./API/feedpeople.js";
import { useState } from "react";
function App() {
const [feedback,setFeedback] = useState(feedbackData)
  return (  
    <>
      <div className="container">
        <Header />
        <FeedBackList feedback={feedback}/>
      </div>
    </>
  );
}

export default App;
