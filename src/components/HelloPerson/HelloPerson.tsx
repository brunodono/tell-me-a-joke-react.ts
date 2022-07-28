import './HelloPerson.css'

const HelloPerson = (props:any) => {
    return(
        <>
        <h2 className='floating'>{props.jokeMessage}</h2>
        </>
    )
}

export default HelloPerson