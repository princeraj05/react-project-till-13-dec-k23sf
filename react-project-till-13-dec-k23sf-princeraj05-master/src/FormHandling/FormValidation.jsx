

import React , {useState} from 'react'

const FormValidation = () => {

    const [myData, setmyData] = useState({
            fname : "",
            lname : "",
            
        })

    const [error, setError] = useState({
        fnameerror : "",
        lnameerror : ""
    })

        const changeData = (e) =>{
        const {name,value} = e.target;
        setmyData((myData) => ({...myData,
            [name] :value
        }))}

        const handleSubmit = (e) =>{
            let fnameerror = "";
            let lnameerror = "";
            if(!myData.fname){
                fnameerror = "First Name Field is Required";
            }
            if(!myData.lname){
                lnameerror = "Last Name Field is Required"
            }
            setError({
                fnameerror,
                lnameerror
            })
            if(!fnameerror && !lnameerror){
                alert (`${myData.fname} ${myData.lname}` );
            }
        e.preventDefault();
    }
    
  return (
    <div>

        <form onSubmit={handleSubmit} >
            First Name :<input type = "text" className='border-2 border-solid border-black' 
            value = {myData.fname} onChange={changeData} name = 'fname'/>
            <br/>
            <span style={{color:"red"}}>{error.fnameerror}</span><br/>
            Last Name: <input type = "text" className='border-2 border-solid border-black'
            value={myData.lname} onChange={changeData} name='lname'/>
            <br/>
            <span style={{color:"red"}}>{error.lnameerror}</span><br/>
            <button>Submit Form</button>
        </form>
      
    </div>
  )
}

export default FormValidation
