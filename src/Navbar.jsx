import { useState} from "react"
  
import "./assets/css/navbar.css"
import { NavLink } from "react-router-dom"
export default function Navbar({getdata ,  getlanguage}){
     let [seachvalue , Setsearchvalue] = useState("")

    

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light  background">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">News-App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link  text-light" aria-current="page" to="/all" onClick={()=>getdata("all")}>All</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/politics" onClick={()=>getdata("politics")}>Politics</NavLink>
        </li>
          <li className="nav-item">
          <NavLink className="nav-link text-light" to="/crime" onClick={()=>getdata("crime")}>Crime</NavLink>
        </li>
          <li className="nav-item">
          <NavLink className="nav-link text-light" to="/education" onClick={()=>getdata("education")}>Education</NavLink>
        </li>
          <li className="nav-item">
          <NavLink className="nav-link text-light" to="/science" onClick={()=>getdata("science")}>Science</NavLink>
        </li>
          <li className="nav-item">
          <NavLink className="nav-link text-light" to="/economics" onClick={()=>getdata("economics")}>Economics</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link text-light" to="/entertainment" onClick={()=>getdata("entertainment")}>Entertainment</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link text-light" to="/technologies" onClick={()=>getdata("technology")}>Technology</NavLink>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            other
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="/ipl" onClick={()=>getdata("ipl")} >IPL</NavLink></li>
            <li><NavLink className="dropdown-item" to="/cricket" onClick={()=>getdata("cricket")}>Cricket</NavLink></li>
                  <li><NavLink className="dropdown-item" to="sports" onClick={()=>getdata("sports")}>Sports</NavLink></li>
    

          </ul>
        </li>
         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><button className="btn text-dark" onClick={()=>getlanguage("hi")}>Hindi</button></li>
            <li><button className="btn text-dark" onClick={()=>getlanguage("en")}>English</button></li>
      

          </ul>
        </li>
      
      </ul>
      <form className="d-flex" onSubmit={(e)=>{
  e.preventDefault();
  getdata(seachvalue);
    Setsearchvalue("");
}}>

      <input
      className="form-control me-2"
      type="search"
      placeholder="Search"
      onChange={(e) =>Setsearchvalue(e.target.value) }

    />
        <button className="btn btn1" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        
        </>
    )
}