import { useState } from "react"

export const EditCard = (props) => {

// * --------------------- useStates -------------------

    const [title, setTitle] = useState('New Task');
    const [description, setDescription] = useState('Empty description');

// * --------------------- HTML CREATE CARDS DIV -------------------
    
    return(
        <div className="card">Create a todo
            <textarea className="taskfield" placeholder="Title" onChange={(e) => setTitle(e.target.value)}></textarea>
            <textarea className="taskfield" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
            <button className="taskfield" onClick={() => props.onCreate(title, description)}>Create a new task</button>
        </div>
    )
}