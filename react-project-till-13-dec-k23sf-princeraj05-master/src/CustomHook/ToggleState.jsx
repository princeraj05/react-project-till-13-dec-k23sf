

import React, { useState } from 'react'
import UseToggle from './UseToggle'

const ToggleState = () => {

    const [toggle, changeToggle] = UseToggle('OFF');
  return (
    <div>
      
      <h2>Toggle : {toggle}</h2>
    <button onClick={changeToggle}>Toggle {toggle == 'OFF' ? 'ON' : 'OFF'}</button>
    </div>
  )
}

export default ToggleState
