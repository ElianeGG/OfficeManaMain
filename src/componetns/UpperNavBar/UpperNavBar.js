import { Link } from "react-router-dom"
import "./UpperNavBar.scss"
export default function UpperNavBar() {
    return ( 
    <nav className="nav">
    <Link to="/" className="site-title">
    Office Management
    </Link>
    <ul>
        <CustomLink to ="/User Name">User Name</CustomLink>
    </ul>
    </nav>
    )
}

function CustomLink({to,children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === to ? "active" : " "}>
            <Link to={to} {...props}> 
                {children}
            </Link>
        </li>
    )
}