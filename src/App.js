import { useState, useEffect } from 'react'
import { Header } from './components/Header';
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

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () =>{
    const position = window.scrollY;
    setScrollPosition(position)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true});
    console.log("Scroll even listener has been added");
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log("Scroll even listener has been deleted");
    }
  }, []);


  const [todos, setTodos] = useState([
    {id: 1, title: 'Task #1', description: 'Здесь описание Амёб', stateRN: 'Active'},
    {id: 2, title: 'Task #2', description: 'Здесь описание Бубех', stateRN: 'Active'},
    {id: 3, title: 'Task #3', description: 'Ъо ииоьъиоъиьи', stateRN: 'Active'},
  ].reverse())

  const createTodo = (title, description, stateRN) => {
    const maximum = todos.map(todo => {
      return todo.id;
    })
    let max = 0
    if((max = Math.max(...maximum)) === -Infinity){
      max = 1;
    }
    else{
      max = Math.max(...maximum)+1
    }
    const newTodo = {
      id: max,
      title,
      description,
      stateRN: "Active"
    }
    setTodos([newTodo, ...todos])
  }

  const completeTodo = (id) => {
    console.log(id)
    const filtered = todos.map((todo) => {
      if(todo.id === id){
        return {
          ...todo, stateRN: 'Completed',
        }
      }
      else{
        return todo;
      }
    })
    setTodos(filtered)
  }

  let Timeouts = {}
  const deleteTodo = (id) => {
    Timeouts[id] = setTimeout(() => {

      const newTodos = todos;
      const filtered = newTodos.filter((todo) =>{
        if(todo.id === id){
          return false
        }
        else{
          return true
        }
      });
      setTodos(filtered);
    }, 410)
  }

  // const onComplete = (id) => {
  //   const newState = todos
  // }
  
  return (
    <div className='App'>
      <Header Scrolled={scrollPosition}/>
      <main className='content-wrapper'>
      <CreateTask onCreate={createTodo}/>
        {/* {array.map((value, index) => {
          return <span key={index}>{value}</span>
        })} */}
        {
          todos.map((todo) => {
            return(
              <Card key={todo.id} id={todo.id} title={todo.title} stateRN={todo.stateRN} onDelete={() => deleteTodo(todo.id)} onComplete={() => completeTodo(todo.id)}> {todo.description}</Card>
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

// TODO VS code для работы с JSX
// TODO VS Создание task
// TODO Сделать верстку для todo

//* Добавил ScrollChecker в Header.js и в начале App.js