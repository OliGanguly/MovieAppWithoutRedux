import { Chip } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';

function Genres({
    type,
    selectedGenrus,
    setSeletedGenrus,
    genrus,
    setGenrus,
    setPage
}) {

   const fetchGenrus=async()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    setGenrus(data.genres)
   } 
   useEffect(()=>{
    fetchGenrus();
    // when we chaing the page we want this genres component unmounted
    return ()=>{
      setGenrus([]);
    }
   },[])
   //once we select one it should move to 
   //selectedGenres
//    Here we are removing from real Array 
//    and add to selected array
   const handleAdd=(genre)=>{
   setSeletedGenrus([...selectedGenrus,genre])
   setGenrus(genrus.filter((g)=>g.id!==genre.id))
   setPage(1)
   }


   //and remove from actual list of genres
   //Here do opp , remove from seleted and to real

   const handleRemove=(genre)=>{
   setSeletedGenrus(selectedGenrus.filter((g)=>g.id!=genre.id))
   setGenrus([...genrus,genre])
   setPage(1)
   }
   console.log(genrus)
    return (
        <div style={{
            padding:"30px"
        }}>
             {selectedGenrus&&selectedGenrus.map((item)=>{
            return <Chip 
            color="success" 
            label={item.name} 
            style={{margin:"2px"}}
            clickable
            size="small"
            key={item.id}
            onDelete={()=>handleRemove(item)}
            />
          })}
          {genrus&&genrus.map((item)=>{
            return <Chip 
            color="primary" variant="outlined"
            label={item.name} 
            style={{margin:"2px"}}
            clickable
            size="small"
            key={item.id}
            onClick={()=>handleAdd(item)}
            />
          })}
        </div>
    );
}

export default Genres;