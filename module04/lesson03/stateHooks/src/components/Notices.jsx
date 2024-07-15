import { useState, useEffect } from "react";

function Notices() {
    const [notice, setNotice] = useState(null);
    const [id, setID] = useState(1);

    useEffect( () => {
        const fetchNotice = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
            const data = await response.json();
            setNotice(data);
        };

        fetchNotice();

        const change = setInterval( () => {
            setID(prevID => prevID + 1);
        }, 5000);

        return () => {
            setNotice(null);
            clearInterval(change);
        };
    }, [id]);

    return (
        <div>
            { 
                notice ? (
                    <>
                    <h1>Título: {notice.title}</h1>
                    <p>{notice.body}</p>
                    </>
                ) :
                ( 
                    <p>Carregando...</p> 
                )
            }
        </div>
    );
}

export default Notices