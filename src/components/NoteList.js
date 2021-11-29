import NoteItem from './NoteItem'
import '../styles/NoteList.css'
import Note from './Note'

function NoteList({ notes, handleAddNote, handleDeleteNote, handleEditedNote }){

    return(
        <div>
            <div className='newNote'>
                <Note 
                    handleAddNote={handleAddNote}
                />
            </div>
            <div className='noteList'>
                <h4>Your notes</h4>
                <div className='noteContent'>
                    {notes.map((note, index) => (
                        <div key = {note.id}>
                            <NoteItem
                                position = {index}
                                id = {note.id}
                                content={note.content}
                                bgColor={note.bgColor}
                                handleDeleteNote={handleDeleteNote}
                                handleEditedNote={handleEditedNote}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NoteList