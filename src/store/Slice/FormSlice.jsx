// import { createSlice } from "@reduxjs/toolkit";
// import { addList } from "./SearchSlice";

import { createSlice } from "@reduxjs/toolkit";
import { addList } from "./SearchSlice";

// const formSlice=createSlice({
//     name:"form",
//     initialState:{
//         name:"",
//         description:"",
//         cost:0
//     },
//     reducers:{
//       changeName(state,action){
//         //   debugger;
//           state.name=action.payload
//       },
//       changeDescription(state,action){
//         state.description=action.payload
//       },
//       changeCost(state,action){
//           state.cost=action.payload
//       }
//     },
//     extraReducers:(builder)=>{
//         builder.addCase(addList,(state)=>{
//             state.name='',
//             state.description='',
//             state.cost=0
//         })
//     }
// })
// export const {changeName,changeDescription,changeCost}=formSlice.actions
// export default formSlice.reducer



const formSlice=createSlice({
  name:"form",
  initialState:{
    name:"",
    desc:"",
    cost:0,
    data:[]
  },
  reducers:{
    changeName:(state,action)=>{
      state.name=action.payload
    },
    changeDesc:(state,action)=>{
      state.desc=action.payload
    },
    changeCost:(state,action)=>{
      state.cost=action.payload
    }

  },
  extraReducers:(builder)=>{
    builder.addCase(addList,(state)=>{
      state.name="",
      state.desc="",
      state.cost=0
    })
  }
 
})
export const {changeName,changeDesc,changeCost}=formSlice.actions
export default formSlice.reducer