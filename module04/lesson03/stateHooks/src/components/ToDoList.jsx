import { useState } from "react";

function ToDoList() {
    const [toDo, setToDo] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addToDo = () => {
        setToDo([... toDo, inputValue])
        setInputValue('')
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={addToDo}>Adicionar Tarefa</button>

            <ul>
                {toDo.map((toDo, index) => (
                    <li key={index}>{toDo}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;