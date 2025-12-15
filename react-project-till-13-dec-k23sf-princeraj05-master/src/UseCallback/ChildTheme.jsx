

import React from 'react'

const ChildTheme = (props) => {
    console.log("Child component Rendered")
  return (
    <div>
        <button onClick={props.countfunc}>Increment</button>
      
    </div>
  )
}

export default React.memo(ChildTheme);
