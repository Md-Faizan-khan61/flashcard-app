import React from "react";
import Flashcard from "./Flashcard";

function FlashcardList({flashcards}){
    return(
        <>
       {flashcards.map((flashcard ,index)=>
        <Flashcard  key={index} flashcard={flashcard}/>
       )}       
        </>
    )
}
export default FlashcardList