import React, { useState } from "react"
import { Navigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Footer from "./Footer"

export default function App() {
    let [input , Setinput] = useState("all")
    let [language , Setlangauge] = useState("en")
    return (
        <>
       
            <BrowserRouter>
                <Navbar getdata={Setinput} getlanguage={Setlangauge}/>
                
                <Routes>
                
  <Route path="/" element={<Navigate to="/all" />} />
  <Route path="/all" element={<Home q="All" search={input} changelanguage={language}/>}></Route>
  <Route path="/politics" element={<Home q="Politics" search={input} changelanguage={language}/>}></Route>
  <Route path="/crime" element={<Home q="Crime" search={input} changelanguage={language}/>}></Route>
  <Route path="/education" element={<Home q="Education" search={input} changelanguage={language}/>}></Route>
  <Route path="/science" element={<Home q="Science" search={input} changelanguage={language}/>}></Route>
  <Route path="/economics" element={<Home q="Economics" search={input} changelanguage={language}/>}></Route>
  <Route path="/entertainment" element={<Home q="Entertainment" search={input} changelanguage={language}/>}></Route>
  <Route path="/technologies" element={<Home q="Technologies" search={input} changelanguage={language}/>}></Route>
  <Route path="/ipl" element={<Home q="IPL" search={input} changelanguage={language}/>}></Route>
  <Route path="/cricket" element={<Home q="Cricket" search={input} changelanguage={language}/>}></Route>
  <Route path="/sports" element={<Home q="Sports" search={input} changelanguage={language}/>}></Route>
</Routes>

             
                <Footer />

            </BrowserRouter>
        </>
    )
}