

import React, { useState } from 'react'

const ControlledComponent1 = () => {

    // const [fname, setfname] = useState('');
    // const [lname, setlname] = useState('');
    // const [review, setReview] = useState('');

    const [myData, setmyData] = useState({
        fname : "",
        lname : "",
        review : "",
        state : ""
    })

    const changeData = (e) =>{
        const {name,value} = e.target;
        setmyData((myData) => ({...myData,
            [name] :value
        }))
    }
    

    // const changeFname = (e) =>{
    //     setfname(e.target.value)
    // }

    // const changeLname = (e) =>{
    //     setlname(e.target.value)
    // }

    // const changeReview = (e) =>{
    //     setReview(e.target.value)
    // }

    const handleSubmit = (e) =>{
        alert (`${myData.fname} ${myData.lname} and review : ${myData.review} state:${myData.state}`);
        e.preventDefault();
    }
  return (
   

    <div onSubmit={handleSubmit}>
        <form >
            First Name :<input type = "text" className='border-2 border-solid border-black' 
            value = {myData.fname} onChange={changeData} name = 'fname'/>
            <br/>
            Last Name: <input type = "text" className='border-2 border-solid border-black'
            value={myData.lname} onChange={changeData} name='lname'/>
            <br/>
            State: <select type = "text" className='border-2 border-solid border-black'
            value={myData.state} onChange={changeData} name='state'>
            <option value=""></option>
            <option value="bihar">bihar</option>
            <option value="punjab">punjab</option>
            <option value="up">up</option>
            </select>

            <br/>

            Write Review: <textarea className='border-2 border-solid border-black' 
            value = {myData.review} onChange={changeData} name = 'review'></textarea >
            <br/>
            <button>Submit Form</button>

            <h2>Firstname : {myData.fname}</h2>
            <h2>Lastname : {myData.lname}</h2>
            <h2>State : {myData.state}</h2>
            <h2>Review : {myData.review}</h2>
        </form>
      
    </div>
  )
}

export default ControlledComponent1
