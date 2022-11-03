import { useState } from "react"

const CreateTask = (props) => {

    const [title, setTitle] = useState('New Task');
    const [description, setDescription] = useState('Empty description');
    
    return(
        <div className="card">Create a todo
            <textarea className="taskfield" placeholder="Title" onChange={(e) => setTitle(e.target.value)}></textarea>
            <textarea className="taskfield" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
            <button className="taskfield" onClick={() => props.onCreate(title, description)}>Create a new task</button>
        </div>
    )
}

export default CreateTask