import { Data } from "../../Data";
import axios from 'axios';
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { show } from "../../redux/Slices/DataSlice";

const MoviesList = ()=>{

  const [movies,setMovies] =useState([]); 
    const fetchData= async()=>{
        try{
         setMovies(await Data());
        }catch(err){
            console.log('wrong happend');
    show(fetchData());  

        }
    }
    show(fetchData());  
    return(  
        movies.length ==0?<h1 className="notFound mt-5">No Movies ...</h1>:    
         
        movies.map((movi,ind)=>{
            // console.log(movi);
            
            
            return (
            <MovieCard key={ind} movi={movi}/>
            );
            
            // </div>
            
        }



    ));
      
          

      
 


    
}
export default MoviesList;