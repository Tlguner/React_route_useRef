import { Link } from "react-router-dom";

function Header(){

return (


    <nav className='nav'>

    <ul>
    <li><Link to="/Home">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Product">Product</Link></li>
      <li><Link to="/Service">Service</Link></li>
      

    </ul>

</nav>
)


}

export default Header;