import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./Slices/DataSlice";
import MoviesSlice from "./Slices/MoviesSlice";

const Store = configureStore({
    reducer:{
        movies:MoviesSlice,
        data:DataSlice
    }
});
export default Store;