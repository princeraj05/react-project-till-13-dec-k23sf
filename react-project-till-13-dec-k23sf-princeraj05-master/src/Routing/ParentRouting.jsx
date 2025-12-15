
import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import { BrowserRouter, Routes, Route , Link, useNavigate } from 'react-router-dom'
import DataFile from './DataFile'

const ParentRouting = () => {

  const aboutData = {
    compName:"Infosys",
    locationComp: "Banglore",
    work: "Full Stack"
  }

  const NavigatePage = () =>{
    const navigate = useNavigate();
    return(
      <div>
        <button onClick={()=>navigate(-1)}>Previous</button>
        <button onClick={()=>navigate(1)}>Next</button>
      </div>
    )

  }
  return (
    <div>
        <BrowserRouter>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/datafile?name=Harsh&regnno=1234567">Data</Link></div>
        <div><Link to="/abouttttt" state={aboutData}>About</Link></div>
        <div><Link to="/contact?id=4">Contact</Link></div>
        {<NavigatePage/>}
        <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/datafile" element={<DataFile/>}/>
            <Route path ="/abouttttt" element={<About/>}/>
            <Route path ="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default ParentRouting
