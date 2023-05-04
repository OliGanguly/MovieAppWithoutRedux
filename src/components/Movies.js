import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PaginationComp from './custompagination/PaginationComp';
import SingleComponent from './singlecontent/SingleComponent';
import Genres from './genres/Genres';
import useGenres from "../hooks/useGenres";
function Movies(props) {
    const[content,setContent]=useState([])
    //for pagination
    //add to api calling as well
    const[page,setPage]=useState(1) 
    const[noOfPages,setNoOfPages]=useState()
    const [selectedGenrus,setSeletedGenrus]=useState([]);
    const[genrus,setGenrus]=useState()
   const  genredorURL = useGenres(selectedGenrus);

      const fetchMovies = async () => {
          const {data}  = await axios.get(
              `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&&page=${page}&&with_genres=${genredorURL}`
          )
         
          setContent(data.results);
          setNoOfPages(data.total_pages)
        };
        useEffect(()=>{fetchMovies()},[page,genredorURL])
    return (
        <div>
        <span className='pageTitle'>Movies</span> 
        <div className='trending'>
             <Genres
             type="movie"
             selectedGenrus={selectedGenrus}
             setSeletedGenrus={setSeletedGenrus}
             genrus={genrus}
             setGenrus={setGenrus}
             setPage={setPage}
             />
         {content&&content.map((item)=>{
             return <SingleComponent 
             key={item.id} 
             id={item.id}
             poster={item.poster_path}
             title={item.title || item.name}
             date={item.first_air_date||item.release_date}
             media_type="Movie"
             rating_average={item.vote_average}
             />
         })}

        </div>
        {/* it wills how number of pages now */}
        <PaginationComp setPage={setPage} numOfPages={noOfPages}/>
     </div>
    );
}

export default Movies;