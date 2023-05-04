import React from 'react';
import './singlecontent.css';
import { img_300, unavailable } from '../../config/config';
import { Badge } from '@mui/material';

function SingleComponent({ key,
    id,
    poster,
    title,
    date,
    media_type,
    rating_average}) {
    // console.log("props,props",props)
    return (
        <div className='media'>
            <Badge badgeContent={rating_average} color={rating_average>6?'primary':'secondary'}>
            </Badge>
            <img className="poster" src={poster ? `${img_300}/${poster}`: unavailable} alt={title}/>
            <p className='title'>{title}</p> 
           <span className='subtitle'>{media_type==='tv'?"TV Series":"Movie"}
           <span className='subtitle'>{date}</span>
           </span>
        </div>
    );
}

export default SingleComponent;