import React, { useState } from "react";

function Flashcard({flashcard}){
    const [showAnswer,setShowAnswer] = useState(false)
    return(
     <div 
     className="flashcard"
     onClick={()=>setShowAnswer(!showAnswer)}
     >
      {showAnswer ? flashcard.ans : flashcard.ques} 
     </div>
    )
}
export default Flashcard