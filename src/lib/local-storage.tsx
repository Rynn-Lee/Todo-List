const getItem = (storage: string) => {
  const result = localStorage.getItem(storage)
  if (!result){return []}
  return JSON.parse(result)
}

const setItem = (storage: string, values: any) => {
  const stringValues = JSON.stringify(values)
  localStorage.setItem(storage, stringValues)
  return values
}

const addItem = (storage: string, value: any) => {
  const state = getItem(storage)
  if(!state.length)
    return setItem(storage, [value])
  const newState = [...state, value]
  setItem(storage, newState)
  return newState
}

const removeByTimestamp = (storage: string, timestamp: number) => {
  const state = getItem(storage)
  const filtered = state.filter((todo: any) => todo.timestamp != timestamp)
  setItem(storage, filtered)
  return filtered
}

const toggleActiveByTimestamp = (storage: string, timestamp: number, active: boolean) => {
  const state = getItem(storage)
  const filtered = state.map((todo: any) => todo.timestamp != timestamp ? todo : {...todo, active: active})
  setItem(storage, filtered)
  return filtered
}

const editByTimestamp = (storage: string, timestamp: number, values: any) => {
  const state = getItem(storage)
  const filtered = state.map((todo: any) => todo.timestamp != timestamp ? todo : {...todo, ...values})
  setItem(storage, filtered)
  return filtered
}

export {getItem, setItem, addItem, removeByTimestamp, toggleActiveByTimestamp, editByTimestamp}