function TaskCard({task}){
    return <div className="bg-white p-4 rounded-lg shadow mb-3">
        {task.title}
    </div>
}

export default TaskCard;