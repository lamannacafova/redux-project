// import React from 'react'
// import { useSelector } from 'react-redux'

// const Value = () => {
//   const totalList=useSelector(({formSlice,search:{data,searchName}})=>{
//     const filteredData=data.filter((item)=>item.name.toLowerCase().includes(searchName.toLowerCase()))
//     let cost=0
//     for(let course of filteredData){
//        cost+=course.cost
//     }
//     return cost
//   })
//   return (
//     <>
//      <div>
//        <p style={{fontSize:"25px", fontWeight:"bold"}}>Toplam puan : {totalList} $</p>
//        </div> 
//     </>
//   )
// }

// export default Value


import React from 'react'
import { useSelector } from 'react-redux'

const Value = () => {
  const totalList=useSelector(({formSlice,searchSlice:{data,searchName}})=>{
    const filterData=data.filter((item)=>item.name.toLowerCase().includes(searchName.toLowerCase()))
    let sumCost=0
    for( let item of filterData){
      sumCost+=item.cost
    }
    return sumCost
  })
  return (
    <>
     <div>
       <p style={{fontSize:"25px", fontWeight:"bold"}}>Toplam puan :{totalList} $</p>
       </div> 
    </>
  )
}

export default Value






