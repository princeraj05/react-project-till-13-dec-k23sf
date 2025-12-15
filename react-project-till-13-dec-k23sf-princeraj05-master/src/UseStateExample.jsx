

// import React, { useState } from 'react'

// const UseStateExample = () => {
//     const [count, setCount] = useState(0);

//     // const incre = () =>{

//     //     setCount((preVal) => {
//     //         return (preVal+1);
//     //     });
//     // }

//     const decre = () =>{
//         setCount(preVal => preVal-1);
//     }


//   return (
//     <div>
//         <h1>Count : {count}</h1>
//         <button onClick={()=>setCount(preVal =>preVal+1)}>Increment</button>
//         <button onClick={decre}>Decrement</button>

//     </div>
//   )
// }

// export default UseStateExample



// import React, { useState } from 'react'

// const UseStateExample = () => {

//     const [Led,setLed] = useState({
//         brand : "Samsung",
//         color : "Black",
//         price: "25k"
//     });
    
//     const changeColor = () =>{
//         setLed((preState) => {
//             return ({...preState,color:"silver"})
//         })
//     }
//   return (
//     <div>
//         <h2>My led is of brand {Led.brand}  and color is {Led.color}. The price of Led is {Led.price}</h2>
//         <button onClick={changeColor}>Change Color</button>
      
//     </div>
//   )
// }

// export default UseStateExample

import React , {useState} from 'react'

const UseStateExample = () => {

    const [subject, setSubject] = useState(["React", "Java", "PHP"]);
  
    const changeSubject = () =>{
        setSubject((preState) => {
            return ([...preState, "C++"])
        })
    }
  
    return (
    <div>
        <h2>The subjects are : {subject.join(',')}</h2>
        <button onClick={changeSubject}>Add</button>
      
    </div>
  )
}

export default UseStateExample


