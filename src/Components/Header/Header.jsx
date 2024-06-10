import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>NavBar </h1>
            <nav>


            {/* Link use korle page refresh hobe na */}
            {/* <a></a> use korle page refresh hobe everytime */}


                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
                <Link to="/contact">Contact Us</Link>
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="contact">Contact Us</a> */}
            </nav>
        </div>
    );
};

export default Header;