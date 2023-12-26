import "./Navbar.css"
const Navbar = () => {
    return (
      <>
        <div className="nav">
          <div className="logo">
            <h1>Claver</h1>
          </div>
          <ul className="menu-list">
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li className="contact">Contact</li>
          </ul>
        </div>
      </>
    )
  }
  
  export default Navbar