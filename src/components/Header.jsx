import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <h1>Router</h1>
                <ul className="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;