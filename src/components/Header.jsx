import { Link } from "react-router-dom";
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../lib/animate/animate.min.css";
import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";

//0342975638

function Header() {
    return (
        <div className="container-xxl p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <Link href="/" className="navbar-brand p-0">
                    <h1 className="text-primary m-0">
                        <i className="fa fa-utensils me-3"></i>EateryEase
                    </h1>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <Link to="/" className="nav-item nav-link">
                            Home
                        </Link>
                        <Link to="/" className="nav-item nav-link">
                            About
                        </Link>
                        <Link to="/" className="nav-item nav-link">
                            Service
                        </Link>
                        <Link to="/" className="nav-item nav-link">
                            Menu
                        </Link>
                        <Link
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            Pages
                        </Link>
                        <Link href="contact.html" className="nav-item nav-link">
                            Contact
                        </Link>
                    </div>
                    <Link href="" className="btn btn-primary py-2 px-4">
                        Sign up
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;
