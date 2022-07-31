import { Link } from 'react-router-dom'
import './style.css'
export function Navbar() {
    return(
        <div className="nav shadow-sm">
            <Link className="nav-title" to="/"><li><h1>Marketing Club</h1></li></Link>
            <ul className="nav-links">
                <Link className="nav-list" to = "/class"><li>CLASS</li></Link>
                <Link className="nav-list" to = "/community"><li>COMMUNITY</li></Link>
                <Link className="nav-list" to = "/myPage"><li>MY</li></Link>
            </ul>
        </div>
    )
}