import { useState } from "react";


function RepeatText() {
    const [content, setContent] = useState('');

    const handleChange = (event) => {
        setContent(event.target.value);
    };

    return (
        <div>
            <h3>Digite um texto:</h3>
            <textarea name="TextContent" id="TextContent" onChange={handleChange}></textarea>
            <p>{content}</p>
        </div>
    )
}

export default RepeatText