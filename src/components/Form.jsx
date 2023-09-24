// 




import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  changeCost, changeDesc, changeName } from '../store/Slice/FormSlice'
import { addList } from '../store/Slice/SearchSlice'

const Form = () => {
  const {name,desc,cost}=useSelector((state)=>{
    return{
      name:state.formSlice.name,
      desc:state.formSlice.desc,
      cost:state.formSlice.cost
    }
  })
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addList({name,desc,cost}))
    console.log("jhvfjw");
  }
  return (
    <>
    <div className="container-fluid">
    <h4>Kurs Elave et</h4>
     <div className="form ">
        <form>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Ad</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=""
        value={name}
        onChange={(e)=>dispatch(changeName(e.target.value))}
        />
      </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Aciqlama</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={1} defaultValue={""}
          value={desc}
          onChange={(e)=>dispatch(changeDesc(e.target.value))}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Qiymet</label>
          <input type="number" className="form-control" id="exampleFormControlInput1" placeholder=""
          value={cost}
          onChange={(e)=>dispatch(changeCost(parseInt(e.target.value)))}
        />
        </div>
        </form>
        <button type="button" className="btn btn-primary me-5" onClick={handleSubmit}>Kaydet</button>
       </div> 

    </div>
    </>
  )
}

export default Form
