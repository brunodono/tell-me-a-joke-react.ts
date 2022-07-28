import { CssBaseline, Container, Box } from "@mui/material"
import axios from "axios";
import { useState } from "react";
import HelloPerson from "../HelloPerson/HelloPerson"
import TellMeAJoke from "../TellMeAJoke/TellMeAJoke"
import './JokeBox.css';

const JokeBox = () => {

    const [joke, setJoke] = useState("Hello Person!")

    const getJoke = () => {
        axios.get('https://icanhazdadjoke.com/slack')
        .then((response) => setJoke(response.data.attachments[0].text))
        .catch(()=> alert("Possibly this API is not working,Im sorry about that, Please try again later"))
    }

    return (
        <>
            <CssBaseline/>
                <Container maxWidth="md" className="container">
                    <Box sx={{height: '70vh' }}  className="box">
                        <HelloPerson jokeMessage={joke} />
                        <TellMeAJoke newJoke={getJoke} />
                    </Box>
                </Container>
        </>
    )
}

export default JokeBox