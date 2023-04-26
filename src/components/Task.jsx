import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './Task.css'

export default function Task() {
  const [tasks, setTasks] = useState([])
  const [showAddFields, setShowAddFields] = useState(false)
  const [newTaskName, setNewTaskName] = useState('')
  const [newTaskStatus, setNewTaskStatus] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [isDataFetched, setIsDataFetched] = useState(false)


  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => {
        setTasks(data.slice(0, 3))
        setIsDataFetched(true)
        setErrorMessage(false)
      }
      )
      .catch(() => {
        setIsDataFetched(false)
        setErrorMessage("Something went wrong! Please try refreshing the page.")
      })
  }, [])

  const deleteHandler = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const toggleAddFields = () => {
    setShowAddFields(!showAddFields)
  }

  const addTaskHandler = () => {
    const newTask = {
      id: tasks.length + 1,
      title: newTaskName,
      completed: newTaskStatus
    }
    setTasks([...tasks, newTask])
    setNewTaskName('')
    setNewTaskStatus(false)
    setShowAddFields(false)
  }

  return (
    <>
      <Navbar />
      {errorMessage ? (
        <h1 className="errorMessage">{errorMessage}</h1>
      ) : isDataFetched && tasks.length === 0 ? (
        <h1>Your task list is currently empty. You can create new task by clicking on below button.</h1>) : (
          <div className="tableContainer">
        <table>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.completed ? "True" : "False"}</td>
                <td><button className="delete" onClick={() => deleteHandler(task.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
      <div>
        <button className="AddorHideButton" onClick={toggleAddFields}>{showAddFields ? "Hide Fields" : "Add Task"}</button>
        {showAddFields && (
          <div className="addTasksFields">
            <div className="taskName">
              <label className="taskLabels" htmlFor="taskName">Task Name </label>
              <input type="text" id="taskName" value={newTaskName} onChange={(event) => setNewTaskName(event.target.value)} required />
            </div>
            <div className="taskStatus">
              <label className="taskLabels" htmlFor="status">Completed </label>
              <input type="checkbox" id="status" value={newTaskStatus} onChange={(event) => setNewTaskStatus(event.target.checked)} />
            </div>
            <div className="button">
              <button className="saveButton" onClick={addTaskHandler}>Save Task</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
