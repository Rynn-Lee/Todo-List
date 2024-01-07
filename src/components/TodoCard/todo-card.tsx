import Icon from "@/assets/icons"
import styles from "./todo-card.module.sass"
import { useState } from "react"

export default function TodoCard({card, remove, edit}: any){
  const [editData, setEditData] = useState({
    title: card.title,
    description: card.description
  })

  const applyEdited = () => {
    edit(card.timestamp, editData)
  }

  return(
    <div className={styles.card}>
      <div className={styles.title}>
        <div>
          <span className={`${card.active ? styles.active : styles.done}`}>{card.active ? "Active" : "Done!"}</span> - 
          <input className={styles.inputs} value={editData.title} onChange={(e)=>setEditData({...editData, title: e.target.value})}/>
        </div>
        <div className={styles.buttons}>
          <button onClick={()=>remove(card.timestamp)}><Icon.remove/></button>
          <button onClick={()=>edit(card.timestamp, {active: !card.active})}><Icon.check/></button>
          {editData.description != card.description || editData.title != card.title ? <button onClick={applyEdited}><Icon.pen/></button> : <></>}
        </div>
      </div>
      {editData.description}
    </div>
  )
}