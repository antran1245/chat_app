import {useState} from 'react';
import Form from './Form';
import '../App.css';

export default (props) => {
    const [name, setName] = useState();

    const handleSubmit = () => {
        props.onSubmit(name)
    }
    return(
        <div className='box nameBox'>
            <h2>Get started right now!</h2>
            <p>I want to start chatting with the name...</p>
            <Form input={name} setInput={setName} submitButton={"Start Chatting"} onSubmit={handleSubmit}/>
        </div>
    );
}