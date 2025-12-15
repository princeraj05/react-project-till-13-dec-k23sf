


import React , {useState, useEffect} from 'react'

const UseEffectExample = () => {

    const [Like, setLike] = useState(0);
    const [value,setValue] = useState("React");

    useEffect(() => {
        console.log("The component is mounted" , Like)
        return ()=>console.log("The component is unmounted" ,Like)
    },[Like]);

    const changeLike = () =>{
            setLike((pre)=>pre+1);
    }

    const changeValue = () =>{
            setValue(() => {return "Java"})
    }

  return (
    <div>
        <h1>Likes : {Like} and value : {value}</h1>
        <button onClick={changeLike}>Like</button>
        <button onClick={changeValue}>Change Value</button> 
    </div>
  )
}

export default UseEffectExample
