import React, { useEffect, useState } from 'react';
import '../styles/home.css'
function Home() {

    const [data, setData] = useState("")
    const [addOption, setAddOption] = useState([])
    const [isSubmit, setIsSubmit] = useState(true)
   const[trackDone,setTrackDone]=useState(false)
    const addToDo = () => {
        setAddOption([...addOption, {work:data,isDone:false}])
        setData("")
        setIsSubmit(true)
    }
    const removeToDo = (index) => {
        const newArr = addOption.filter((_, i) => i !== index)
        setData("")
        setAddOption(newArr)
    }
    const handleSubmit = () => {
        setIsSubmit(false)
    }

    function handleDone(index) {
        setAddOption((prev)=>
            prev.map((todo,i)=>(
                i===index ? {...todo,isDone:!todo.isDone}:todo
            ))
        )
        

    }

    return (
        <div className='home-Main-Conatiner'>
            <div className="home-Conatiner">
                <h2>ToDoList</h2>
                <p>Manage Your Work</p>
                <hr />
                <div className="toDo-Main-Conatiner">
                    {addOption.map((task, index) => (
                        <div className="toDo-Conatiner" key={index}>
                            <span className={task.isDone===true ? 'markNotDone':'markDone'}>{task.work}</span>
                            <div className="toDo-Conatiner-buttons">
                                <button onClick={() => { setIsSubmit(true) }}>+</button>
                                <button onClick={() => { removeToDo(index) }}>X</button>
                                <button onClick={() => handleDone(index)} 
                                >✓</button>
                            </div>
                        </div>
                    ))}
                    <div className={isSubmit === true ? 'active' : 'closed'}>
                        <input placeholder='Your Task' value={data} onChange={(event) => { setData(event.target.value) }} />
                        <button onClick={addToDo}>+</button>
                        <button onClick={() => setData("")}>X</button>

                    </div>
                    <button onClick={handleSubmit}
                        style={{ width: "max-content", margin: "0 auto" }}
                        className={isSubmit === true ? 'active' : 'closed'}
                    >Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Home;