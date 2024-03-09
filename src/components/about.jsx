import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos non
        temporibus suscipit maiores. Odit nulla officia consequatur dolorum
        iste, possimus minima quos eveniet, repellendus debitis molestias
        dolores explicabo natus in?
      </p>

      <ul>
        <li>
          <Link to="/About/Image">Images</Link>
        </li>
        <li>
          <Link to="/About/Prices">Prices</Link>
        </li>
        <li>
          <Link to="/About/Location">Location</Link>
        </li>

        <Outlet />
      </ul>
    </div>
  );
}
export default About;
