import { useState } from 'react'
import './App.css'
import FlashcardForm from './FlashcardForm'
import FlashcardList from './FlashcardList'

function App() {
  const [flashcards ,  setFlashcards] = useState([])
  function addFlashcard(flashcard){
    setFlashcards([...flashcards ,flashcard])
    console.log("Flashcard-Items",flashcards);
  }

  return (
    <>
      <h2 style={{background:"pink"}}>FlashcardForm</h2>
      <FlashcardForm  addFlashcard={addFlashcard}/>
      <FlashcardList flashcards={flashcards}/>
    </>
  )
}

export default App
