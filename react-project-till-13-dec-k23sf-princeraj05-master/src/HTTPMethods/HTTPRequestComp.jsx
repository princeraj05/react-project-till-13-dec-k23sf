

// import React, {useState, useEffect} from 'react'

// const HTTPRequestComp = () => {

//     const [posts, setposts] = useState([]);
// useEffect(() => {

//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         setposts(data);
//     })
    
// }, []);
    


//   return (
//     <div>
//         <ul>
//             {
//                 posts.map((item)=>{
//                     return(
//                         <li key= {item.id}>
//                             ID : {item.id}<br/>
//                             Title : {item.title} <br/>
//                             User id : {item.userId} 
//                         </li>
//                     )
//                 })
//             }
//         </ul>


      
//     </div>
//   )
// }

// export default HTTPRequestComp




import React, {useState, useEffect} from 'react'

const HTTPRequestComp = () => {

    const [posts, setposts] = useState([]);
    const [resMessage, setresMessage] = useState('');
    const [errMessage, seterrMessage] = useState('');

    const fetchData = () =>{
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data.users);
        setposts(data.users);
    }) 
}

    const postData = () =>{
        const newData = {
            userId: 400,
            title:"React Class"
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers : {"Content-Type":"application/json"},
            body: JSON.stringify(newData)
        })
        .then(res=>
            {
                console.log(res.status)
                if(!res.ok){
                    throw new error(`${res.status}`)
                }
   
            return res.json()})
        .then(data =>{
            console.log(data);
            setresMessage("Post Added Successflly");
            seterrMessage("");
        }
        )
        .catch(()=>{
            seterrMessage("Post is not added!!! There is a failure");
            setresMessage("");
        }

        )

    }


    const putData = () =>{
        const updateData = {
            userId: 400,
            title:"React Class"
        }

        fetch('https://jsonplaceholder.typicode.com/posts/5', {
            method: "PUT",
            body: JSON.stringify(updateData),
            headers : {"Content-Type":"application/json"}
            
        })
        .then(res=>
            {
                console.log(res.status)
                if(!res.ok){
                    throw new error(`${res.status}`)
                }
                
                
            return res.json()})
        .then(data =>{
            console.log("Updated Data ", data);
            setresMessage("Post Updated Successflly");
            seterrMessage("");
        }
        )
        .catch(()=>{
            seterrMessage("Post is not updated!!! There is a failure");
            setresMessage("");
        }

        )

    }


    const deleteData = () =>{
        

        fetch('https://jsonplaceholder.typicode.com/posts/5', {
            method: "DELETE",
            headers : {"Content-Type":"application/json"}
            
        })
        .then(res=>
            {
                console.log(res.status)
                if(!res.ok){
                    throw new error(`${res.status}`)
                }
            return res.json()})
        .then(data =>{
            console.log(data);
            setresMessage("Post Deleted Successflly");
            seterrMessage("");
        }
        )
        .catch(()=>{
            seterrMessage("Post is not deleted!!! There is a failure");
            setresMessage("");
        }

        )

    }
    


  return (
    <div>

        <button onClick={fetchData}>Fetch Data</button>
        <button onClick={postData}>Post Data</button>
        <button onClick={putData}>Put Data</button>
        <button onClick={deleteData}>Delete Data</button>
        <p className='text-green-500'>{resMessage}</p>
        <p className='text-red-700'>{errMessage}</p>
        <ul>
            {
                posts.map((item)=>{
                    return(
                        <li key= {item.id}>
                            ID : {item.id}<br/>
                            firstname : {item.firstName} <br/>
                            lastname : {item.lastName} 
                        </li>
                    )
                })
            }
        </ul>


      
    </div>
  )
}

export default HTTPRequestComp

