// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { changeSearch } from '../store/Slice/SearchSlice'

// const Search = () => {
// const searchName=useSelector((state)=>{
//   return state.search.searchName
// })
// const dispatch=useDispatch()
//   return (
//     <>
//      <div className="search">
//        <h3>Kurslarim</h3>
       
//        <div className="search-list">
//          <label htmlFor="">Search:</label>
//          <input type="text"
//          value={searchName}
//          onChange={(e)=>dispatch(changeSearch(e.target.value))}
//          />
//        </div>
//     </div> 
//     </>
//   )
// }

// export default Search

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSearch } from '../store/Slice/SearchSlice'

const Search = () => {
const searchName=useSelector((state)=>{
  return state.searchSlice.searchName
})
  const dispatch=useDispatch()
  return (
    <>
     <div className="search">
       <h3>Kurslarim</h3>
       <div className="search-list">
         <label htmlFor="">Search:</label>
         <input type="text"
         value={searchName}
        onChange={(e)=>dispatch(changeSearch(e.target.value))}
         />
       </div>
    </div> 
    </>
  )
}

export default Search
