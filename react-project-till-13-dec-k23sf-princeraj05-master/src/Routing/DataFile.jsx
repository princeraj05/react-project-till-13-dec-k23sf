

import React from 'react'

const DataFile = () => {

    const queryparam = new URLSearchParams(window.location.search);
    const name = queryparam.get('name');
    const regnno = queryparam.get('regnno');
  return (
    <div>
      <p>This is Data file</p>
      <p>Name : {name}</p>
      <p>Regn No: {regnno}</p>
    </div>
  )
}

export default DataFile
