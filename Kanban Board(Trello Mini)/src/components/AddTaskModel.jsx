function AddTaskModel({isOpen,setIsOpen}){

    if(!isOpen){
        return null
    }

    return <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl w-96">
            <div>title</div>
            <input type="text" />
            <button>Add</button>
            <button>Close</button>
        </div>
    </div>
}

export default AddTaskModel;