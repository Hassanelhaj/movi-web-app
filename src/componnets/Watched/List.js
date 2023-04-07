import { useSelector } from "react-redux";
import MovieCard from "../movies/MovieCard";

const List =()=>{

const movies = useSelector(state=>state.movies.value);
const btn = 'remove';
    return(
        movies.length ==0?
     <h1 className="p-2 m-3 notFound"> No Movies ....</h1>:
     movies.map((el,ind)=>{
        return(<MovieCard key ={ind} movi={el} />)
     })
      
        
       
    );
}
export default List;