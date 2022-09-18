import { Link } from "react-router-dom";
import images from "./umiya.jpeg";
import "../App.css";
function Header()
{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-info sticky-top" >
          <div className="container-fluid">
            
                <img className="logo"  src={images} alt=".. "/>
          
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="./home"><h5>Home</h5></Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="../smartphone"><h5>SmartPhones</h5></Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="../smartphone/add"><h5>Add_SmartPhones</h5></Link>
                </li>
               
                <li className="nav-item">
                  <Link className="nav-link active" to="./about"><h5>About</h5></Link>
                </li>
  
                <li className="nav-item">
                  <Link className="nav-link active" to="./contact"><h5>Contact</h5> </Link>
                </li>
  
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
  
      </>
    )
}
export default  Header