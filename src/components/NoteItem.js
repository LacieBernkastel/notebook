import { useState } from 'react'
import '../styles/NoteItem.css'

function NoteItem({ position, id, content, bgColor, handleDeleteNote, handleEditedNote }){

    const [onEdit, setOnEdit] = useState(false)
    const[noteContent, setNoteContent] = useState('')

    const handleChange = (event) => {
        console.log(event.target.value)
        setNoteContent(event.target.value)
    }

    const handleSaveClick = () => {
        if(noteContent.trim().length > 0){
            console.log(noteContent)
            handleEditedNote({position, noteContent})
            setNoteContent('')
            setOnEdit(false)
        }
    }

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