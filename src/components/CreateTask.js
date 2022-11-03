import { useState } from "react"

const CreateTask = (props) => {

    const [title, setTitle] = useState('Новая задача');
    const [description, setDescription] = useState('Описание пустое');
    
    return(
        <div className="card">Создать задачу
            <textarea className="taskfield" placeholder="Название" onChange={(e) => setTitle(e.target.value)}></textarea>
            <textarea className="taskfield" placeholder="Описание" onChange={(e) => setDescription(e.target.value)}></textarea>
            <button className="taskfield" onClick={() => props.onCreate(title, description)}>Отправить</button>
        </div>
    )
}

export default CreateTask