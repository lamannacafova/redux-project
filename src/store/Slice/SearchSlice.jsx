// import { createSlice, nanoid } from "@reduxjs/toolkit";

import { createSlice, nanoid } from "@reduxjs/toolkit";

// const searchSlice=createSlice({
//     name:"search",
//     initialState:{
//         searchName:"",
//         data:[]
//     },
//     reducers:{
//      addList:(state,action)=>{
//          state.data.push({
//              id:nanoid(),
//              name:action.payload.name,
//              description:action.payload.description,
//              cost:action.payload.cost

//          })
//      },
//      changeSearch:(state,action)=>{
//       state.searchName=action.payload
//      },
//      removeCard:(state,action)=>{
//          state.data=state.data.filter((item)=>item.id !== action.payload)
//      }
//     }
// })
// export const {addList,removeCard,changeSearch}=searchSlice.actions
// export default searchSlice.reducer


const searchSlice=createSlice({
    name:"search",
    initialState:{
    searchName:"",
    data:[]
    },
    reducers:{
     changeSearch:(state,action)=>{
       state.searchName=action.payload
    },
    addList:(state,action)=>{
        state.data.push({
            id:nanoid(),
            name:action.payload.name,
            desc:action.payload.desc,
            cost:action.payload.cost
        })
    },
    removeList:(state,action)=>{
        state.data=state.data.filter((item)=>item.id !== action.payload)
    }

    }
})
export const {addList,removeList,changeSearch}=searchSlice.actions
export default searchSlice.reducer