import '../styles/App.css'
import Banner from './Banner'
import NoteList from './NoteList'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import noteList from '../datas/noteList'

function App() {

  const [notes, setNotes] = useState(noteList)

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes'))

    if(savedNotes){
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes', JSON.stringify(notes))
  }, [notes])
  

  const addNote = ({noteContent, bgColor}) => {

    console.log(noteContent + ' ' + bgColor)

    const newNote = {
      id: nanoid(),
      content: noteContent,
      bgColor: bgColor
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

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
