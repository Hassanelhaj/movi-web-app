import axios from 'axios';
export const Data = async(key)=>{
    const url = 'http://www.omdbapi.com/?s=spider%20man&apikey=56d0c1be';
    const _url = 'http://www.omdbapi.com/?s=harry%20potter&apikey=56d0c1be';
    const kk = 'http://www.omdbapi.com/?s='+key+'&apikey=56d0c1be';


    try{
    const{data} =  await axios.get(_url);
     return( data.Search) ;
    }catch(err){
        console.log('wrong');
    }
}
