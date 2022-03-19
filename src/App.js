import React from "react";
import Tweet from "./Tweet";

function App() {
  return(
    <div className="app">
      <Tweet name="Stephen" message="This is a random tweet"/>
      <Tweet name="John Snow" message="I am the true king of the north"/>
      <Tweet name="Winter is comming" message="Winter is almost over"/>
      <Tweet name="Mosh" message="I hit the club and turn the crowd into a mosh-pit"/>
    </div>
  )
}


export default App;