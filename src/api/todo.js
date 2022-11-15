const URL = "http://localhost:1337/api/todos/"


export const todoService = {
  async getAll() {
    try{
      const response = await fetch(URL)
      const fetchedTodos = await response.json()
      const readyTodos = fetchedTodos.data.map(item => {
        return {
          id: item.id,
          title: item.attributes.title,
          description: item.attributes.description,
          completed: item.attributes.completed,
        }
      }).reverse()
      return readyTodos
    }
    catch(e){
      alert(`Обощибка: ${e}`)
    }
  },
  async create(data) {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          title: data.title,
          description: data.description
        }
      })
    })
    const newTodo = await response.json()
    return {
      id: newTodo.data.id,
      title: newTodo.data.attributes.title,
      description: newTodo.data.attributes.description,
      completed: newTodo.data.attributes.completed
    }
  },
  async update(data) {
    const response = await fetch(URL + data.id, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        data: {
            title: data.title,
            description: data.description,
            completed: data.completed
        }
        })
    })
    return response.json()
  },
  async delete(data) {
    const response = await fetch(URL + data.id, {
        method: 'DELETE'
      })
      return response.json()
  }
}