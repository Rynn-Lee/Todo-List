import { useEffect, useState } from "react"
import {IconButtons} from "./IconButtons"

const Card = ({ id, title, stateRN, children , onDelete, onComplete}) => {
  // const { title, description } = props
  // const Card = ({ title: x1, description: x2 }) - rename
  const [isActive, setIsActive] = useState({color: "none"})
  const [swapAnimation, setSwapAnimation] = useState({
    animation: 'swapAway 0.5s ease-in 0s 1 normal both paused', 
  })

  useEffect(() => {
    switch(stateRN){
      case "Active": setIsActive({color: "lightGreen"}); break;
      case "Completed": setIsActive({color: "aqua"}); break;
      default: setIsActive({color: "black"}); break;
    }
  }, [stateRN]);

  const onClickHandler = (event) =>{
    switch(event){
      case "Delete": setSwapAnimation({animation: "swapAway 0.3s ease-in 0s 1 normal both running"}); break;
      case "Completed": setSwapAnimation({animation: "Completed 0.3s ease-in 0s 1 alternate both running"}); break;
      default: ; break;
    }
  }
    

  return (
    <div className='card' style={swapAnimation}>
      <div className='top'>
        <span>#{id}| {title} - <span style={isActive}>{stateRN}</span></span>
        <IconButtons onDelete={onDelete} onClickSwap={() => onClickHandler("Delete")} onComplete={onComplete} onCompleteAnimation={()=>onClickHandler("Completed")}/>
      </div>
      <div className='cardBody'>
        <pre>{children}</pre>
      </div>
    </div>
  )
}



export default Card