import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Data } from "../../Data";



const DataSlice= createSlice({
    name:'data',
    initialState:{value: []},
    reducers:{
        show:(state,action)=>{
       state.value = Data(action.payload);
          
        },
        hide:(state)=>{

        }
    }
});

export const {show,hide}=DataSlice.actions;
export default DataSlice.reducer;