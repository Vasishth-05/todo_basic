function Header({setIsOpen}){
    return <div className="bg-white shadow p-5 flex justify-between items-center">
        <div>Kanban Board</div>
        <button onClick={() => setIsOpen(true)} className="bg-black text-white px-4 py-2 rounded-lg">+ Add Task</button>
    </div>
}

export default Header;