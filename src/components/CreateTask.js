import { useState } from "react"

const CreateTask = (props) => {

// * --------------------- useStates -------------------

    const [title, setTitle] = useState('New Task');
    const [description, setDescription] = useState('Empty description');

// * --------------------- HTML CREATE CARDS DIV -------------------
    const Create = () => {
        props.onCreate(title, description)
    }    

    return(
        <div className="card">Create a todo
            <textarea className="taskfield writehere" placeholder="Title" onChange={(e) => setTitle(e.target.value)}></textarea>
            <textarea className="taskfield writehere" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
            <button className="taskfield" onClick={() => Create()}>Create a new task</button>
        </div>
    )
}

export default CreateTask