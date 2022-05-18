import { SocketContext, socket } from './context/SocketContext';
import './App.css';
import ChatName from './components/ChatName';
import { useEffect, useState } from 'react';
import Chat from './components/Chat';

function App() {
  const [name, setName] = useState();

  const handleName = (enteredName) => {
    setName(enteredName)
  }
  useEffect(() => {
    socket.on('connect', () => {
        console.log(socket.id)
    })
    return () => socket.removeAllListeners();
  }, [socket])
  return (
    <SocketContext.Provider value={socket}>
        <h1 className='box' style={{backgroundColor: "gray"}}>MERN Chat</h1>
        {name?<Chat/>: <ChatName onSubmit={handleName}/>}
    </SocketContext.Provider>
  );
}

export default App;
