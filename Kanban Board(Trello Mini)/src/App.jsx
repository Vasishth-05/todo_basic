import { useState } from 'react'
import './App.css'
import AddTaskModel from './components/AddTaskModel'
import Board from './components/Board'
import Header from './components/Header'

function App() {

  const [tasks,setTasks] = useState([
    {
      id:1,
      title:"Learn React",
      Status:"todo"
    },
    {
      id:2,
      title:"Build Project",
      Status:"doing"
    }
  ])

  return (
    <>
      <Header/>
      <Board tasks={tasks}/>
      <AddTaskModel/>
    </>
  )
}

export default App
