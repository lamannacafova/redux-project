// import { configureStore } from "@reduxjs/toolkit";
// import formSlice from "../store/Slice/FormSlice"
// import searchSlice from "../store/Slice/SearchSlice"
// export const store=configureStore({
//     reducer:{
//         formSlice,
//         search:searchSlice
//     }
// })

import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../store/Slice/FormSlice"
import searchSlice from "./Slice/SearchSlice"
export const store=configureStore({
    reducer:{
        formSlice,
        searchSlice
    }
})