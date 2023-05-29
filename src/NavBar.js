
import { Link } from "react-router-dom";
import myImage from './logo.png';
function NavBar() {
  const un = localStorage.getItem("un");

  return (
    <>
      <div className="navbar h-[2.0 rem] m-0">
        <img src={myImage} className="logo h-[40px] ml-[21px]  " alt="website logo" />
        <div className="nav-links">
          {(un == null) && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">SignUp</Link>
            </>
          )}
          {(un != null) && (
            <>
              <Link to="/home">Home</Link>
              <Link to="/ge">Genre-Wise</Link>
              <Link to="/cp">Change Password</Link>
              
            </>
          )}
          {(un == null) && (<Link className="mr-3" to="/fp">Forgot Password</Link>)}
          {(un != null) && (
            <>
              <Link to="/bs">Best Selling</Link>
              <Link to="/nt">Now Trending</Link>
              <Link to="/ds">Discount Books</Link>
              <Link to="/bm" className="mr-0">Book of the Month</Link>
              <Link to="/br" className="mr-10" >Book Recommendation</Link>
           
            </>
          )}
        </div>
      </div>
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #fff;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-bottom: 3px solid black;
            border-top: 3px solid black;
          }
          .logo { 
            height: 20px;
            cursor: pointer;
          }

          .nav-links {
            display: flex;
          }

          .nav-links > * {
            margin-left: 20px;
            font-size: 18px;
            text-decoration: underline;
            color: #333;
            transition: color 0.2s ease-out;
            font-weight: bold;
            
          }

          .nav-links > *:hover {
            color: #FF0000;
            
          }

        .logo {
          margin-left:21px;
  height: 85px;
  width: auto;
  cursor: pointer;
  
  

}

.logo:hover {
  transform: scale(1.1); /* increase the size of the logo slightly */
  opacity: 0.8; /* reduce the opacity of the logo slightly */
  transition: all 0.3s ease-out; /* add a smooth transition effect */
}

        `}
      </style>
    </>
  );
}

export default NavBar;
