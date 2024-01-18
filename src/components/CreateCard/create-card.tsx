import { useState } from 'react'
import styles from './create-card.module.sass'
import { todo } from '@/types/todo'

export default function CreateCard({add}: {add: Function}){
  const [todoData, setTodoData] = useState<todo>({
    title: "",
    description: "",
    active: true,
    timestamp: 0
  })

  const finishTodo = () => {
    add(todoData)
    setTodoData({title: "", description: "", active: true, timestamp: 0})
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