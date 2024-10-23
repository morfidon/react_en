import { useState, useRef } from 'react'
import { v4 } from 'uuid'
function TasksList() {
    const tasks = [
        'Do homework',
        'Buy milk',
        'Clean room',
        'Cook dinner'       
    ]
    const [tasksDictionary, setTasksDictionary] = useState(tasks.map(
        task =>
        (
            {
                id: v4(),
                text: task
            }
        )
    ))
    const inputTaskRef = useRef(null);
    // map function
    // tasks.map(whatToDoFunction)
    //
    const [newTask, setNewTask] = useState('')
    const [sortDirection, setSortDirection] = useState('asc')
    const handleRemoveTask = (id) => {
        setTasksDictionary(tasksDictionary.filter(task => task.id !== id))
        //filter - filter out the task with the given id 
        // data.filter(dataItem => condition)
    }
    const handleAddTask = (e) => {
        e.preventDefault()
        inputTaskRef.current.focus()
        if (newTask === '') {
            return;
        }
        const updatedTasks = ([
            ...tasksDictionary,
            {
                id: v4(),
                text: newTask
            }
        ])
        updatedTasks.sort((a, b) => b.text.localeCompare(a.text))
        setTasksDictionary(updatedTasks)
        setNewTask('')
    }

    //useRef
    //onChange, managed state forms
    const handleSort = () => {
            const sortedTasks = [...tasksDictionary].sort((a, b) => {                
                return sortDirection === 'asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
            })

            setTasksDictionary(sortedTasks)
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    }
    return (
        <>  
           
               <form onSubmit={handleAddTask}>
                   <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}
                    ref={inputTaskRef} autoFocus
                   />
                   <button type="submit">Add Task</button>
               </form>
               <button onClick={handleSort}>
                   Sort {sortDirection === 'asc' ? 'desc' : 'asc'}
               </button>
           <ul>
                {
                    //box.map(data => WHATTODO WITH {DATA} )
                    tasksDictionary.map(task => <li key={task.id}>{task.text}
                        <button onClick={() =>handleRemoveTask(task.id)}>X</button>
                    </li>)
                }
           </ul>
        </>
    );
}

export default TasksList