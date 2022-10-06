import { useState } from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [toggleState, setToggleState] = useState(null);
  const handleToggle = () => {
    return(
      setToggleState(!toggleState)
    )
  }
  return (
    <div className="navbar">
      <div className="navbar-heading">
        <h1>Blog Journal</h1>
      </div>
      <div className="navbar-links">
        <Link to={'/'}><h2>Home</h2></Link>
        <Link to={'/About'}><h2>About</h2></Link>
        <Link to={'/Write'}><h2>Write</h2></Link>
      </div>
      <div className="toggle-btn-container">
        <div onClick={() => handleToggle()}>
          <i className="fa-solid fa-bars toggle-btn"></i>
        </div>
        {
          toggleState ? <div className="toggle-btn-links">
            <Link to={'/'}><h2>Home</h2></Link>
            <Link to={'/About'}><h2>About</h2></Link>
            <Link to={'/Write'}><h2>Write</h2></Link>
          </div> : null
        }
      </div>
    </div>
  )
}
