import React from 'react'
import AddM from './AddM';
import CardM from './CardM';


function Movielist({ movies, setmovies, text, rate }) {
   
  return (
    <div>
    <div  className="show">
      <AddM movies={movies} setmovies={setmovies} text={text}/>
      </div>
    <div className='car'>
   {movies.filter((el) => el.name.toLowerCase().includes(text.toLowerCase()) && el.rating >= rate) 
    .map((x) =>(
    <CardM movies ={x} />
   ))}
    </div>
    </div>
  );
}


export default Movielist