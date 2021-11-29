import { useState } from 'react'
import '../styles/NoteItem.css'

function NoteItem({ position, id, content, bgColor, handleDeleteNote, handleEditedNote }){


    // Initilization 
    const [onEdit, setOnEdit] = useState(false)
    const[noteContent, setNoteContent] = useState('')

    // Setting the note content whenever the content of the text area changes
    const handleChange = (event) => {
        setNoteContent(event.target.value)
    }

    // Whenever the add button is clicked, check if the content is empty. If not, pass the note content and background color to the App component.
    // Reinitializing the text area field.
    // Putting the edit button back
    const handleSaveClick = () => {
        if(noteContent.trim().length > 0){
            handleEditedNote({position, noteContent})
            setNoteContent('')
            setOnEdit(false)
        }
    }


    // Checking if the note is on edit mode or not. Changing the button to Edit if it is, to Save if it isn't.
    function setButton(){
        return onEdit ? (
            <div>
                <textarea 
                    className='noteContent' 
                    rows='3' cols='auto' 
                    value={noteContent}
                    onChange={handleChange}
                >
                    { content }
                </textarea>
                <button className='button' onClick={handleSaveClick}>Save</button>
                <button className='button' onClick={() => {handleDeleteNote(id)}}>Delete</button>
            </div> 
        ) : (

            <div>
                <p className='noteContent' contentEditable='false'>{ content }</p>
                <button className='button' onClick={() => setOnEdit(true)}>Edit</button>
                <button className='button' onClick={() => {handleDeleteNote(id)}}>Delete</button>
            </div>
            
        )
    }

    return(
        <div className='noteItem' style={{ backgroundColor: bgColor }}>
            <h4>Note n°{position + 1}</h4>
            { setButton() }
        </div>
    )
}

export default NoteItem