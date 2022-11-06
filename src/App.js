import { useState, useEffect } from 'react'
import { Header } from './components/Header';
import { EditCard } from './components/EditCard';
import { todoService } from './api/todo';
import Card from './components/Card';
import CreateTask from './components/CreateTask';
import './App.sass';

// * --------------------- useEffect -------------------

// const Component = () => {
//   const [counter, setCounter] = useState(10)
//   const [text, setText] = useState('')

//   useEffect(() => {
//     console.count("i have rendered!")
//   })

//   useEffect(() => {
//     console.log("text have changed!", text)
//   }, [text])

//   useEffect(() => {
//     console.log("I'm alive!")
//     return () => {
//       console.log("I'm dead :(")
//     }
//   }, [])

  // return <div>Hello World! <button onClick={() => setCounter(counter + 1)}>{counter}</button> <input value={text} onChange={(e) => setText(e.target.value)} /></div>
// }

// * --------------------- ARRAYS -------------------

// array.forEach((value) => console.log(value))
// const mapped = array.map((value) => {
//     return value
// })
// console.log('mapped', mapped)

// const filtered = array.filter((value) => {
//   return value % 2 === 0
// })

// console.log('filtered', filtered)

// * --------------------- ARRAYS -------------------

const App = () => {

  const [todos, setTodos] = useState([])

// * --------------------- FUNCTIONS -------------------

  useEffect(() => {
    const fetchTodos = async () => {
      const fetchedTodos = todoService.fetchAll()
      setTodos(fetchedTodos)
    }

    fetchTodos()
  },[])


  const editTodo = (id, title, description) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return {...todo, title, description}
      else return todo
    })
    todoService.update(id, {title, description})
    setTodos(newTodos)
  }

  const createTodo = async (title, description) => {
    const newTodo = await todoService.create({title, description})
    setTodos([newTodo, ...todos])
  }

  const completeTodo = (id) => {
    const filtered = todos.map((todo) => {
      return todo.id === id ? {...todo, completed: true} : todo
    })
    todoService.update(id, {completed: true})
    setTodos(filtered)
  }

  const deleteTodo = (id) => {
    setTimeout(() => {
      const filtered = todos.filter((todo) => todo.id !== id);
      setTodos(filtered);
    }, 410)
    todoService.delete(id)
  }

// * --------------------- MAIN APP HTML -------------------
  
  return (
    <div className='App'>
      <Header />
      <main className='content-wrapper'>
      <CreateTask onCreate={createTodo}/>
        {/* {todos.map((value, index) => {
          return <span key={index}>{value}</span>
        })} */}
         
        
        {
          todos.map((todo, index) => {
            return(
              <Card 
                key={todo.id} 
                id={todo.id} 
                title={todo.title} 
                completed={todo.completed} 
                onEdit={(title, description) => editTodo(todo.id, title, description)} 
                onDelete={() => deleteTodo(todo.id)} 
                onComplete={() => completeTodo(todo.id)} 
                description={todo.description} 
              />
            )
          })
        }
        {/* <Card title="Task #1">Здесь описание Амёб</Card>
        <Card title="Task #2">Здесь описание Бубех <i>italian</i></Card> */}
      </main>
    </div>
  );
}


export default App;