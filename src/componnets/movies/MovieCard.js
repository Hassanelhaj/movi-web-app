import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../imgs/logo.png';
import { Addmovie } from '../../redux/Slices/MoviesSlice';
import './cardStyle.css'
const MovieCard = (prob)=>{
const {movi}= prob;
const btn = prob.btn;
const moviesList = useSelector(state=>state.movies.value);
const dispatch = useDispatch();
const handelAddMovie=(el)=>{
  const isFound = moviesList.filter((movi)=>{
    return movi == el;
  })
 
  if(isFound.length >0){
    console.log(isFound);

  }else if(isFound.length == 0){
    dispatch(Addmovie(el));


  }


// console.log(asd);

}

      return (
        <Card className='card-con'>
          <Card.Img variant="top" src={movi.Poster} className='boster'/>
          <Card.Body className='card-info'>
            <Card.Title>{movi.Title.slice(0,40)}</Card.Title>
            <Card.Text>
            
            <h3> {movi.Year}</h3>
            </Card.Text>
            <Button className='card-btn' onClick={()=>handelAddMovie(movi)}>Add To List</Button>
          </Card.Body>
        </Card>
      );

}
export default MovieCard;