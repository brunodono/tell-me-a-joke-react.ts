import { Button } from "@mui/material"
import './TellMeAJoke.css'


const TellMeAJoke = (props:any) => {

    return(
        <>
        <Button onClick={props.newJoke} className="button" variant="outlined">Tell me a joke!</Button>
        </>
    )
}

export default TellMeAJoke