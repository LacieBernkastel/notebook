import '../styles/Note.css'
import { useState } from 'react'

function Note({ handleAddNote }){


    // Initialization 
    const[noteContent, setNoteContent] = useState('')
    const[bgColor, setBgColor] = useState('')


    // Setting the note content whenever the content of the text area changes
    const handleChange = (event) => {
        setNoteContent(event.target.value)
    }

    // Setting the color background whenever the selected color changed
    const handleColorChange = (event) => {
        setBgColor(event.target.value)
    }


    // Whenever the add button is clicked, check if the content is empty. If not, pass the note content and background color to the App component.
    // Reinitializing the text area field.
    const handleAddClick = () => {
        if(noteContent.trim().length > 0){
            handleAddNote({noteContent, bgColor})
            setNoteContent('')
        }
    }


    return(
        <div className='addNote'>
            <h4>Add a note</h4>
            <select className='backgroundColor' onChange={handleColorChange}>
                <option value=''>White</option>
                <option value='#ffa8c1'>Pink</option>
                <option value='#ba4747'>Red</option>
                <option value='#f0a767'>Orange</option>
                <option value='#fae97a'>Yellow</option>
                <option value='#a5f0b9'>Green</option>
                <option value='#a5c4f0'>Blue</option>
                <option value='#d1a5f0'>Purple</option>
            </select>
            <br/>
            <textarea 
                className='newNoteContent' 
                rows='5' cols='80' 
                placeholder='Type a new note'
                value={noteContent}
                onChange={handleChange}>
            </textarea>
            <br/>
            <button className='addButton' onClick={handleAddClick}>Add</button>
        </div>
    )
}

export default Note