

import React , {useState} from 'react'

const UseToggle = () => {

    const [toggle, setToggle] = useState('OFF');

    const changeToggle = () =>{
        setToggle((toggle) => toggle == 'OFF' ? 'ON' : 'OFF' )
    }

  return [toggle, changeToggle];
}

export default UseToggle
