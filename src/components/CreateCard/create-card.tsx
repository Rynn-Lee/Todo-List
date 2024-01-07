import { useState } from 'react'
import styles from './create-card.module.sass'
import { addItem } from '@/lib/local-storage'

export default function CreateCard({add}: any){
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
    active: true
  })

  const finishTodo = () => {
    setTodoData({title: "", description: "", active: true})
    add(todoData)
  }

  return(
    <div className={styles.block}>
      Create card
      <input  value={todoData.title}
              onChange={(e: any) => setTodoData({...todoData, title: e.target.value})}
              placeholder="What's the title?"/>
      <input  value={todoData.description}
              onChange={(e: any) => setTodoData({...todoData, description: e.target.value})}
              placeholder="What's the description?"/>
      <button onClick={finishTodo}>Create a new todo</button>
    </div>
  )
}