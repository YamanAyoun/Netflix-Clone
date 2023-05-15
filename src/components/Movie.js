import axios from "axios";
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Movie(){
    const [TrendingData, setTrendingData] = useState([])

    const getTrending = () =>{
        const serverURL = `http://localhost:3000/trending`;

        fetch(serverURL)
            .then(response => {
                response.json().then(data => {
                    console.log(data)
                    setTrendingData(data)

                })
            })
    }

    useEffect(()=>{
        getTrending()
    },[])

    const addFav = (item) =>{
        const serverURL = `http://localhost:3000/addMovie`;
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
        <button onClick={getTrending}>send req</button>
        <h1>home</h1>

        {TrendingData.map(item => {
                return (
                    <Card style={{ width: '18rem' }} key={item.ID}>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                               <p>{item.release_date}</p>
                            </Card.Text>
                            <Button variant="primary" onClick={()=>{addFav(item)}}>Add to Favorite</Button>
                        </Card.Body>
                    </Card>
                )
            })}
  
        </>
    )
}

export default Movie;