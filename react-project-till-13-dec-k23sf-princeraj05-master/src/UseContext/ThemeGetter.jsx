
import React, { useContext } from 'react'
import { themeContext } from './ThemeProvider'


const ThemeGetter = () => {
    const {theme, setTheme} = useContext(themeContext);

    const changeTheme = () =>{
        setTheme((utheme)=> {
           return utheme=='light'?'dark':'light'})
    }
  return (
    <div>
        <div style = {{backgroundColor : theme == 'light' ? 'white' : 'black',  color : theme == 'light' ? 'black' : 'white'}}>
        <h2>Mode : {theme}</h2>
        </div>
        <button onClick={changeTheme}>Change Mode</button>
    </div>
  )
}

export default ThemeGetter
