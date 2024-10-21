import { useState } from 'react'
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
    // map function
    // tasks.map(whatToDoFunction)
    //
    const handleRemoveTask = (id) => {
        setTasksDictionary(tasksDictionary.filter(task => task.id !== id))
        //filter - filter out the task with the given id 
        // data.filter(dataItem => condition)
    }
    return (
        <>
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