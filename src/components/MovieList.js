import Movie from "./Movie.js";


function MovieList(props){
    return(
        <>
        {
        props.TrendingData.map(item=>
          {
            return  <div>
                  
            <Movie item={item}/>
              </div>
      })
      }
        </>
    )
}

export default MovieList;