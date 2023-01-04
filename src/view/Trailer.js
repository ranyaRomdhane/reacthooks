import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom'

function Trailer({movies}) {
  const params = useParams(); 
  const movie = movies.filter((el) => el.id == params.id)[0];
  console.log(movie);
  return (
    <div>  
      <img src={movie.posterurl}/>
      <h1>{movie.name}</h1>
     <ReactStars
     count={5} 
     size={24}
     activeColor="#ffd700"
     value={movie.rating}
      edit={false}
       />
    </div>
  )
}

export default Trailer