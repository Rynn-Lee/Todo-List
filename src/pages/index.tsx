import CreateCard from '@/components/CreateCard/create-card'
import TodoCard from '@/components/TodoCard/todo-card'
import { addItem, editByTimestamp, getItem, removeByTimestamp, toggleActiveByTimestamp } from '@/lib/local-storage'
import { todo } from '@/types/todo'
import { Fragment, useEffect, useState } from 'react'

export default function Home() {
  const [todos, setTodos] = useState<todo[]>([])

  useEffect(()=>{
    const result = getItem('todos')
    setTodos(result)
  }, [])

  const add = (todoData: todo) => {
    const signedData: any = {...todoData, timestamp: Date.now()}
    addItem("todos", signedData)
    setTodos([...todos, signedData])
  }

  const remove = (timestamp: number) => {
    const newData = removeByTimestamp("todos", timestamp)
    setTodos(newData)
  }

  const edit = (timestamp: number, values: boolean) => {
    const newData = editByTimestamp("todos", timestamp, values)
    console.log(values)
    setTodos(newData)
  }

  return (
    <>
      <CreateCard add={add}/>
      {
        todos?.map((card: todo) => (
          <Fragment key={card.timestamp}>
            <TodoCard
              card={card}
              remove={remove}
              edit={edit}/>
          </Fragment>
        )).reverse()
      }
    </>
  )
}
