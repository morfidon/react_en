import { useState, useRef } from 'react'
import { v4 } from 'uuid'
const SortButton = ({ sortDirection, onSort }) => 
(    
    <button onClick={onSort}>
          Sort {sortDirection === 'asc' ? 'desc' : 'asc'}
    </button>
)
const TaskItem = ({ task, onRemove }) =>
(
    <li>
       {task.text}
       <button onClick={() =>onRemove(task.id)}>X</button>
    </li>
)
const TaskForm = ({ onAddTask }) =>
{
    const [newTask, setNewTask] = useState('')
    const inputTaskRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault()
        inputTaskRef.current.focus()
        if (newTask === '') {
            return;
        }  

        onAddTask(newTask)
        setNewTask('')
    }
    return (               
    <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}
         ref={inputTaskRef} autoFocus
        />
        <button type="submit">Add Task</button>
    </form>)
}
function TasksList() 
{
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
    const renderCount = useRef(0);
    renderCount.current++;



    const [sortDirection, setSortDirection] = useState('asc')
    const handleRemoveTask = (id) => {
        setTasksDictionary(tasksDictionary.filter(task => task.id !== id))
    }
    const handleAddTask = (newTask) => {

        const updatedTasks = ([
            ...tasksDictionary,
            {
                id: v4(),
                text: newTask
            }
        ])
        updatedTasks.sort((a, b) => b.text.localeCompare(a.text))
        setTasksDictionary(updatedTasks)
   
    }


    const handleSort = () => {
            const sortedTasks = [...tasksDictionary].sort((a, b) => {                
                return sortDirection === 'asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
            })

            setTasksDictionary(sortedTasks)
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    }
    return (
        <>  
               <h1>Render amount: {renderCount.current}</h1>
               <TaskForm onAddTask={handleAddTask} />

               <SortButton 
                   sortDirection={sortDirection}
                   onSort={handleSort}
               />
               
           <ul>
                {
                    tasksDictionary.map(task => 
                    
                    <TaskItem 
                        key={task.id}
                        task={task}
                        onRemove={handleRemoveTask}
                    />
                
                    )
                }
           </ul>
        </>
    );
}

export default TasksList