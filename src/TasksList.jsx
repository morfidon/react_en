import { v4 } from 'uuid'
function TasksList() {
    const tasks = [
        'Do homework',
        'Buy milk',
        'Clean room',
        'Cook dinner'       
    ]
    const tasksDictionary = tasks.map(
        task =>
        (
            {
                id: v4(),
                text: task
            }
        )
    )
    // map function
    // tasks.map(whatToDoFunction)
    //
    return (
        <>
           <ul>
                {
                    //box.map(data => WHATTODO WITH {DATA} )
                    tasksDictionary.map(task => <li key={task.id}>{task.text}</li>)
                }
           </ul>
        </>
    );
}

export default TasksList