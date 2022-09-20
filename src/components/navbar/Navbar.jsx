import { useSidebar, useAuth } from "../../context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./navbar.css";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const navigate = useNavigate();
  const { setSidebar } = useSidebar();
  const { authDispatch } = useAuth();

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
    toast.success("Successfully Logged Out");
  };

  return (
    <nav className="nav">        
        <div className="nav-logo">
           <span
          className="hamburger-btn"
          onClick={() => setSidebar((prev) => !prev)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </span>
            <img className="logo-img" src={logo} />
            <h3 className="logo-text">Sahu Notes</h3>
        </div>
        <div>
          <button className="btn link-btn"  onClick={logoutHandler}>Logout</button>
        </div>
      </nav>
  );
};
export { Navbar };
