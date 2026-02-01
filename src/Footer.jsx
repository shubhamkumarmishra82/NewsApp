import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-success text-light mt-4">
      <div className="container-fluid p-4">
        <div className="row">

        
          <div className="col-md-4 col-sm-12 mb-3">
            <h5>News-App</h5>
            <p style={{ fontSize: "14px" }}>
              Latest national and international news in multiple categories and languages.
            </p>
          </div>

        
          <div className="col-md-4 col-sm-6 mb-1">
            <h6>Categories</h6>
            <ul className="list-unstyled">
              <li><NavLink className="text-light text-decoration-none" to="/politics">Politics</NavLink></li>
              <li><NavLink className="text-light text-decoration-none" to="/crime">Crime</NavLink></li>
              <li><NavLink className="text-light text-decoration-none" to="/science">Science</NavLink></li>
              <li><NavLink className="text-light text-decoration-none" to="/sports">Sports</NavLink></li>
              <li><NavLink className="text-light text-decoration-none" to="/entertainment">Entertainment</NavLink></li>
            </ul>
          </div>

        
          <div className="col-md-4 col-sm-6 mb-3">
            <h6>Language</h6>
            <ul className="list-unstyled">
              <li>Hindi</li>
              <li>English</li>
            </ul>

            <h6 className="mt-2">Contact</h6>
                                <p className="mb-1"><i className="me-2 fs-5 bi bi-phone"></i><Link className="text-light text-decoration-none" to="tel:8285110736" target="_blank" rel="noreferrer">8285110736</Link></p>
                                <p className="mb-1"><i className="me-2 fs-5 bi bi-whatsapp"></i><Link className="text-light text-decoration-none" to="mailto:Shubham9801033836@gmail.com" target="_blank" rel="noreferrer">Shubham9801033836@gmail.com</Link></p>
                                <p className="mb-1"><i className="me-2 fs-5 bi bi-envelope"></i><Link className="text-light text-decoration-none" to="https://www.instagram.com/mishra_shubh17" target="_blank" rel="noreferrer">mishra_shubh17</Link></p>
            
           
          </div>

        </div>
      </div>

      
      <div className="text-center p-2 bg-black" style={{ fontSize: "13px" }}>
        © {new Date().getFullYear()} News-App | Built with React
      </div>
    </footer>
  );
}
