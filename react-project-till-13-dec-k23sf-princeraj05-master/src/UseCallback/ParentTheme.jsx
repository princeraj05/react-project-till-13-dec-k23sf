

import React , {useCallback, useState} from 'react'
import ChildTheme from './ChildTheme';

const ParentTheme = () => {
    const [count,setCount] = useState(0);
    const [theme, setTheme] = useState('light');

    const changeCount = useCallback(() =>{
        setCount(pre => pre+1)
    },[count])

    const changeTheme = () =>{
        setTheme((theme) => theme=='light' ? 'dark' : 'light')
    }

    console.log("Parent Component Rendered")
  return (
    <div>
        <h2>Count : {count}</h2>
        <ChildTheme countfunc = {changeCount} />

        <h2>Theme : {theme}</h2>
        <button onClick={changeTheme}>Change Theme</button>
      
    </div>
  )
}

export default ParentTheme
