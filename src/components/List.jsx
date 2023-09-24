// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { removeCard } from '../store/Slice/SearchSlice'

// const List = () => {
//     const {list}=useSelector(({formSlice,search:{data,searchName}})=>{
//         // debugger
//         // return state.search.data
//         const filterData=data.filter((item)=>item.name.toLowerCase().includes(searchName.toLowerCase()))
//         return{
//             list:filterData
//         }
//     })
//     const dispatch=useDispatch()
//   return (
//   <>
//     <div>
//       {
//           list.map((item)=>{
//               return (
//                   <div className="box">
//                       <h1>{item.name}</h1>
//                       <p>{item.description}</p>
//                       <p>{item.cost}</p>
//                       <button className="btn btn-danger" onClick={()=>dispatch(removeCard(item.id))}>Sil</button>
//                   </div>
//               )
//           })
//       }
//     </div>
//   </>
//   )
// }

// export default List




import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeList } from '../store/Slice/SearchSlice'
const List = () => {
  const {list}=useSelector(({formSlice,searchSlice:{data,searchName}})=>{
    const filteredData=data.filter((item)=>item.name.toLowerCase().includes(searchName.toLowerCase()))
    // return state.searchSlice.data
    return {
      list:filteredData
    }
  })
  const dispatch=useDispatch()
  return (
  <>
    <div>
    {
            list.map((item)=>{
                return (
                    <div className="box">
                        <h1>{item.name}</h1>
                        <p>{item.desc}</p>
                        <p>{item.cost}</p>
                        <button className="btn btn-danger" onClick={()=>dispatch(removeList(item.id))}>Sil</button>
                    </div>
                )
            })
        }
    </div>
  </>
  )
}

export default List

