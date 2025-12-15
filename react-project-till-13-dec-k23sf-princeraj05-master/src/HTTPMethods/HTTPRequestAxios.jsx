

import React, {useState} from 'react'
import axios from 'axios';

const HTTPRequestAxios = () => {

    const [users, setusers] = useState([]);
    const [resMessage, setresMessage] = useState("");
    const [errorMessage, seterrorMessage] = useState("");


    const fetchData = () =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setusers(res.data))
        .catch(err => console.log(err))
    }

    const postData = () =>{

        const newData = {
            name : "Aman",
            username: "Aman64",
            email : "aman2345@gmail.com"
        }
        axios.post("https://jsonplaceholder.typicode.com/users", newData )
        .then(res=>{
            console.log(res.data);
            setresMessage("USer created successfully");
            seterrorMessage("");
        })
        .catch((err)=>{
            console.log(err);
            seterrorMessage("User not created Successfully");
            setresMessage("")
        })

    }

    const putData = () =>{

        const newData = {
            name : "Aman",
            username: "Aman64",
            email : "aman2345@gmail.com"
        }
        axios.put("https://jsonplaceholder.typicode.com/users/8", newData )
        .then(res=>{
            console.log(res.data);
            setresMessage("USer created successfully");
            seterrorMessage("");
        })
        .catch((err)=>{
            console.log(err);
            seterrorMessage("User not created Successfully");
            setresMessage("")
        })

    }

     const deleteData = () =>{

        
        axios.delete("https://jsonplaceholder.typicode.com/users/8" )
        .then(res=>{
            console.log(res.data);
            setresMessage("User Deleted successfully");
            seterrorMessage("");
        })
        .catch((err)=>{
            console.log(err);
            seterrorMessage("User not Deleted");
            setresMessage("")
        })

    }
  return (
    <div>
    <button onClick={fetchData}>Fetch Data</button>
    <button onClick={postData}>Post Data</button>
    <button onClick={putData}>Put Data</button>
    <button onClick={deleteData}>Delete Data</button>
    <p className='text-green-600'>{resMessage}</p>
    <p className='text-red-500'>{errorMessage}</p>
    <ul>
            {
                users.map((item)=>{
                    return(
                        <li key= {item.id}>
                            ID : {item.id}<br/>
                            Name : {item.name} <br/>
                            Email : {item.email} 
                        </li>
                    )
                })
            }
        </ul>

      
    </div>
  )
}

export default HTTPRequestAxios
