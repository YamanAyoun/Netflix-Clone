
import MovieList from "./MovieList";
import { useEffect, useState } from 'react';

function Home(){

    const [TrendingData, setTrendingData] = useState([])

    const getTrending = () =>{
        const serverURL = `http://localhost:3005/trending`;

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
    
    return(
        <>
        <MovieList TrendingData={TrendingData}/> 
  
        </>
    )
}

export default Home;