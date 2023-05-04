import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleComponent from '../singlecontent/SingleComponent';
import './Trending.css';
import Pagination from '../custompagination/PaginationComp';
import PaginationComp from '../custompagination/PaginationComp';
// I am using movie db api->generate api key based on that fetch data
function Trending() {
  const[content,setContent]=useState([])
  //for pagination
  //add to api calling as well
  const[page,setPage]=useState(1) 
    const fetchTrending = async () => {
        const {data}  = await axios.get(
            `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        )
        setContent(data.results);
      };
      useEffect(()=>{fetchTrending()},[page])
    return (
        <div>
           <span className='pageTitle'>Trending</span> 
           <div className='trending'>
            {content&&content.map((item)=>{
                return <SingleComponent 
                key={item.id} 
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.first_air_date||item.release_date}
                media_type={item.media_type}
                rating_average={item.vote_average}
                />
            })}
           </div>
           <PaginationComp setPage={setPage}/>
        </div>
    );
}

export default Trending;
// .env file add files name in git ignore