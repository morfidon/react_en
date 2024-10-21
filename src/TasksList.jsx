function TasksList() {
    const tasks = [
        'Do homework',
        'Buy milk',
        'Clean room',
        'Cook dinner'       
    ]
    // map function
    // tasks.map(whatToDoFunction)
    //
    return (
        <>
           <ul>
                {
                    //box.map(data => WHATTODO WITH {DATA} )
                    tasks.map(task => <li>{task}</li>)
                }
           </ul>
        </>
    );
}

export default TasksList