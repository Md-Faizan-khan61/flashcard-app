import React, { useState } from "react";

function FlashcardForm({addFlashcard}) {

const [ques ,setQues] = useState('')   
const [ans ,setAns] = useState('')   
   const handleSubmit = (e) => {
     e.preventDefault();
     addFlashcard({ques,ans})
     setQues('');
     setAns('')
   }   
    return (
        <>
            
            <div className="form">
              <form className="form-items" onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="ques."
                className="ques"
                value={ques}
                onChange={(e)=>{setQues(e.target.value)}}
                />
                <input 
                type="text"
                placeholder="Ans."
                className="ans"
                value={ans}
                onChange={(e)=>{setAns(e.target.value)}}
                />
                <button>Add Flashcard</button>
              </form>
            </div>
        </>
    )
}

export default FlashcardForm