import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import Form from "./Form";

export default (props) => {
    const [inputMessage, setInputMessage] = useState('')
    const [message, setMessage] = useState([])
    const socket = useContext(SocketContext);
    
    const handleMessage = () => {
        console.log(inputMessage)
        socket.emit('chat message', inputMessage)
    }
    useEffect(() => {
        let initial = true;
        socket.on('chat message', msg => {
            if(initial) {
                setMessage(prev => {return [...prev, msg];})
                console.log('chat message: ', msg)
            }
        })
        return () => {
            initial = false;
        }
    }, [])
    
    
    return(
        <div className="box chatBox">
            <div className="content">
                {message.map((msg, i) => 
                    <p key={i}>{msg}</p>
                )}
            </div>
            <Form input={inputMessage} setInput={setInputMessage} submitButton={"Send"} onSubmit={handleMessage}/>
        </div>
    );
}