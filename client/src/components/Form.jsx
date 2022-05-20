export default (props) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit()
        e.target.reset();
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => props.setInput(e.target.value)}/>
            <input type="submit" value={props.submitButton}/>
        </form>
    );
}