import { useNavigate } from "react-router-dom";
import "./home.css";
import logo from "../../assets/logo.png"

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">

      <nav className="nav">
        <div className="nav-logo">
          <img className="logo-img" src={logo} />
          <h3 className="logo-text">Sahu Notes</h3>
        </div>
      </nav>

      <div className="main-container">
        <div className="empty-div"></div>
        <div className="main-text">
          <p className="main-text-title">It's more than a <span className="main-text-span">Notes App!</span></p>
          <button className="main-btn" onClick={() => navigate("/login")}>Get Started</button>

          <div className="main-footer">
                    <p className="footer-text">Made with ❤️ by Siddhartha Sahu</p>
                    <div className="footer-links">
                        <a href="https://github.com/CallMeSahu" className="github" target="_blank">
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/siddhartha-sahu/" className="linkedin" target="_blank">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="https://twitter.com/CallMeSahu" className="twitter" target="_blank">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </div>
                    
                </div>
        </div>
      </div>

    </div>
  );
};

export { Home };
