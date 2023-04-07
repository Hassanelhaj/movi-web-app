import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { useSelector } from "react-redux";

const add=(arr,el)=>{
     arr.push(el);
     return arr;


}
const MoviesSlice= createSlice({
    name:'movies',
    initialState:{value:[]},
    reducers:{
        Addmovie:(state,action)=>{
        
            state = state.value.push(action.payload);
            const myList = action.payload;
            console.log(myList);
        
          
        },
        RemoveMovi:(state)=>{

        }
    }
});

export const {Addmovie,RemoveMovi}=MoviesSlice.actions;
export default MoviesSlice.reducer;