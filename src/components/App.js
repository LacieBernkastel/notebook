import '../styles/App.css'
import Banner from './Banner'
import NoteList from './NoteList'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import noteList from '../datas/noteList'

function App() {

  // Initialiazing the notes with a list of notes
  const [notes, setNotes] = useState(noteList)

  // If some notes are already stored in the local storage, get them when launching the application
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes'))

    if(savedNotes){
      setNotes(savedNotes)
    }
  }, [])


  // Updating the local storage whenever the notes are modified (here, it happens whenever a note is added, edited or deleted)
  useEffect(() => {
    localStorage.setItem('react-notes', JSON.stringify(notes))
  }, [notes])
  

  // Adding a new note
  const addNote = ({noteContent, bgColor}) => {

    const newNote = {
      id: nanoid(),
      content: noteContent,
      bgColor: bgColor
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  // Deleting a note by its id
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  // Editing a note
  const editedNote = ({position, noteContent}) => {
    const newNotes = [...notes]
    newNotes[position].content = noteContent
    setNotes(newNotes)
  }

  return (
    <div>
      <Banner />
      <NoteList 
        notes={notes} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        handleEditedNote={editedNote}
      />
    </div>
    
  );
}

export default App
