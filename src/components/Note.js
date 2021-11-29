import '../styles/Note.css'
import { useState } from 'react'

function Note({ handleAddNote }){

    const[noteContent, setNoteContent] = useState('')
    const[bgColor, setBgColor] = useState('')

    const handleChange = (event) => {
        console.log(event.target.value)
        setNoteContent(event.target.value)
    }

    const handleColorChange = (event) => {
        setBgColor(event.target.value)
    }

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