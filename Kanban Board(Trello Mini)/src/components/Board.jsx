function Board({tasks}){

    const todoTasks = tasks.filter(task => task.status === "todo");
    const doingTasks = tasks.filter(task => task.status === "doing");
    const doneTasks = tasks.filter(task => task.status === "done");

    return <div className="grid grid-cols-3 gap-6 p-6">
        <div>
            Todo 
            <div>{todoTasks.map((task) => task.title)}</div>
        </div>
        <div>
            Doing
            <div>{doingTasks.map((task) => task.title)}</div>
        </div>
        <div>
            Done
            <div>{doneTasks.map((task) => task.title)} </div>
        </div>
    </div>
}

export default Board;