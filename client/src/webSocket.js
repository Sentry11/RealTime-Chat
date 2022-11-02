import React, { useState, useRef} from 'react';
import axios from "axios";


const WebSock = () => {
  
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const socket = useRef()
    const [connected, setConnected] = useState(false)
    const [username, setUsername] = useState('')



    function connect() {

        socket.current = new WebSocket('ws://localhost:5000')

        socket.current.onopen = () => {
            setConnected(true)
            console.log('Connected')
            const message = {
                event:'connection',
                username,
                id: Date.now()
            }
            socket.current.send(JSON.stringify(message))
        }

        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data)
            setMessages(prev => [message,...prev])
        }

        socket.current.onclose = () => {
            console.log('socket closed')
        }

        socket.current.onerror = () => {
            console.log('socket error')
        }
    }


    const sendMessage = async () => {
       const message = {
        username,
        message: value,
        id: Date.now(),
        event: 'message'
       }
       socket.current.send(JSON.stringify(message));
       setValue('')
    }

    if(!connected){
        return(
            <div className='container'> 
              <div className='main'>
              <input placeholder='Enter your name' value={username} onChange={e => setUsername(e.target.value)} type="text"/>
             <button onClick={connect}>Enter</button>
            </div>
            </div>
        )
    }

    return(
    <>
        <div className='container'> 
        <div className='main'>
            <input 
            value={value} 
            onChange={e => setValue(e.target.value)} 
            type="text"/>
            <button onClick={sendMessage}>Send</button>
        </div>

        <div className='messages'> 
            {messages.map(mess =>
                <div  key={mess.id}>
                  {mess.event === 'connection'
                  ? <div className='user'> User {mess.username} connected </div>
                  : <div className="message">{mess.username} : {mess.message} </div>
                    }
                </div>
            )}
            </div>
        </div>
    </>    
    )
    
}

export default WebSock