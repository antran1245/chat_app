import { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import Form from "./Form";

export default (props) => {
    const [inputMessage, setInputMessage] = useState('')
    const {socket} = useContext(SocketContext);
    
    const handleMessage = () => {
        console.log(inputMessage)
        socket.emit('chat message', inputMessage)
    }


    
    return(
        <div className="box chatBox">
            <div className="content"></div>
            <Form input={inputMessage} setInput={setInputMessage} submitButton={"Send"} onSubmit={handleMessage}/>
        </div>
    );
}