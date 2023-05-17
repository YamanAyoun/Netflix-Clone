import axios from "axios";
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from "./ModalMovie";

function Movie(props){

    const [showFlag, setShowFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});

    const handleShow = (item) => {
        setShowFlag(true)
      
        setClickedMovie(item)
    }

    const handleClose = () => {
        setShowFlag(false)
    }

    const addToFav = (item) =>{
        const serverURL = `http://localhost:3005/addToFav`;
        axios.post(serverURL, item)
        .then(response=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        // console.log(item)
    
    }
    
    return(
        <>
        {/* <button onClick={props.getTrending}>send req</button> */}
        <h1>home</h1>

        
        
                    <Card style={{ width: '18rem' }} key={props.item.ID}>
                        <Card.Body>
                            <Card.Title>{props.item.title}</Card.Title>
                            <Card.Text>
                               <p>{props.item.release_date}</p>
                            </Card.Text>
                            <Button variant="primary" onClick={()=>{addToFav(props.item)}}>Add to Favorite</Button>
                        </Card.Body>
                    </Card>
                
                
            <ModalMovie showFlag={showFlag} handleClose={handleClose} clickedMovie={clickedMovie}/>
        </>
    )
}

export default Movie;