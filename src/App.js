import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './comp/Navbarr';
import './App.css';
import Movielist from './comp/Movielist';
import React, { useState } from 'react';


function App() { 
  const [movies, setmovies] = useState([

  {posterurl:"https://i.pinimg.com/564x/7a/63/fd/7a63fdeffa80a72b2289abd85e59db1c.jpg",
  name:'Spirited away',
  rating:5,},

     {posterurl:"https://i.pinimg.com/564x/62/19/c6/6219c6e00b76d29bdc07585c9acae9fe.jpg",
     name:'Your name',
     rating:4,},

      { posterurl:"https://i.pinimg.com/564x/33/10/a9/3310a9c4972d704555d8d534cd763c7a.jpg",
      name:'Weather with you',
      rating:3,},

     {posterurl:"https://i.pinimg.com/564x/44/e3/4b/44e34b8559b3bc6c95a7f6b9c8dc6b2c.jpg",
     name:'Your lie in April',
     rating:5,},

      { posterurl:"https://i.pinimg.com/564x/d9/91/b3/d991b382a608e7187d4fe56a998f693c.jpg",
      name:'A silent voice',
      rating:5,},

      { posterurl:"https://i.pinimg.com/564x/e9/43/f0/e943f0e3e80b6c16c68b314d2e5a80ff.jpg",
      name:'I want to eat Pancreas',
      rating:4,},
      {posterurl:"https://i.pinimg.com/564x/82/fa/08/82fa08f6706c1326ba06f49d49ae9ea4.jpg",
      name:'The garden of words',
      rating:2,},
      {posterurl:"https://i.pinimg.com/564x/d8/3d/f3/d83df3c51318eefd0a77519c6d7fbbaa.jpg",
      name:'My neighbor ToToRo',
      rating:3,},
      {posterurl:"https://i.pinimg.com/564x/d4/26/d6/d426d634460d9aaad2f70afecd3b9469.jpg",
      name:'Ponyo',
      rating:5,},
     {posterurl:" https://i.pinimg.com/564x/ce/77/0b/ce770b8c8f2fc518a5c8ca01d3b5bac1.jpg",
     name:'A whisker away',
     rating:5,},
     {posterurl:" https://i.pinimg.com/564x/35/a3/30/35a33077738b1bbd4c295016ea588b8a.jpg",
     name:'Whene Marnie was there',
     rating:5,},
     {posterurl:" https://i.pinimg.com/564x/d1/b5/1b/d1b51b9a910bc818fc1a0b004b714040.jpg",
     name:'Drifting home',
     rating:3,},
     {posterurl:" https://i.pinimg.com/564x/32/7b/36/327b364f0b11859821db85d41bdcd856.jpg",
     name:'Bubble',
     rating:4,},
     {posterurl:" https://i.pinimg.com/564x/6b/d0/25/6bd025296153d55beed73c0b33218378.jpg",
     name:'Summer ghost',
     rating:2,},
     {posterurl:" https://i.pinimg.com/564x/df/3b/ba/df3bbad6cb8019402ce639d03e5b3422.jpg",
     name:'Her blue sky',
     rating:5,},
     {posterurl:" https://i.pinimg.com/564x/f0/1d/a0/f01da0c6a297c2cff502f238ac5645e0.jpg",
     name:'Hello world',
     rating:5,},
     {posterurl:" https://i.pinimg.com/564x/60/b1/58/60b1589111f9441798e6dd43879519ab.jpg",
     name:'Children who chase lost voice',
     rating:5,},
     {posterurl:" https://i.pinimg.com/564x/7a/ae/b0/7aaeb0b1bbf8feecfc1649d60cb779ce.jpg",
     name:'Violet Evercardo',
     rating:5,},
     {posterurl:" https://i.pinimg.com/564x/bb/ad/cb/bbadcb373ef2fc0f0481269b3ebad623.jpg",
     name:'5 Centimeters per second',
     rating:5,},
     {posterurl:" https://i.pinimg.com/564x/0b/bc/06/0bbc0602cfa4384ebc7acec2ecf265fa.jpg",
     name:'Orange',
     rating:3,},     
]);

const [text, settext] = useState("");
const [rate, setrate] = useState(0);

return (
<div className="App">
    <Navbarr settext={settext} setrate={setrate}  />
    <Movielist movies={movies} setmovies={setmovies} text={text} rate={rate}/>
    <br/>
</div>
);
}



export default App;
