import { useEffect, useState } from "react"
import {IconButtons} from "./IconButtons"

const Card = ({ id, title, completed, description , onDelete, onComplete, onEdit}) => {
  // const { title, description } = props
  // const Card = ({ title: x1, description: x2 }) - rename

// * --------------------- useStates -------------------

  const [isActive, setIsActive] = useState({color: "none"})
  const [swapAnimation, setSwapAnimation] = useState({
    animation: 'swapAway 0.5s ease-in 0s 1 normal both paused', 
  })
  const [editMode, setEditMode] = useState(false)

  const [editTitle, setEditTitle] = useState(title)
  const [editDescription, setEditDescription] = useState(description)

  
// * --------------------- useEffect. Calls from <iconButtons /> icons with an argiment -------------------

  useEffect(() => {
    if (!completed) setIsActive({color: "lightGreen"})
    else setIsActive({color: "aqua"})
  }, [completed]);
  
// * --------------------- Functions -------------------

  const handleClickAnimation = (event) =>{
    switch(event){
      case "Delete": setSwapAnimation({animation: "swapAway 0.3s ease-in 0s 1 normal both running"}); break;
      case "Completed": setSwapAnimation({animation: "Completed 0.3s ease-in 0s 1 alternate both running"}); break;
      default: ; break;
    }
  }

  const handleEdit = () => {
    setEditMode(true)
  }

  const handleSave = () => {
    setEditMode(false)
    onEdit(editTitle, editDescription)
  }
    
// * --------------------- HTML CARDS -------------------

  return (
    <div className='card' style={swapAnimation}>
      <div className='top'>
        <span>#{id}| {!editMode ? title : <input className="taskfield" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />} - <span style={isActive}>{completed ? 'Completed' : 'Active'}</span></span>
        {!editMode ? <IconButtons completed={completed} onDelete={onDelete} onClickSwap={() => handleClickAnimation("Delete")} onEdit={handleEdit} onComplete={onComplete} onCompleteAnimation={() => handleClickAnimation("Completed")}/> : <button className="taskfield" onClick={handleSave}>Save changes</button>}
      </div>
      <div className='cardBody'>
        {editMode ? <textarea className="taskfield editfield" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} /> : <pre>{description}</pre>}
      </div>
    </div>
  )
}



export default Card