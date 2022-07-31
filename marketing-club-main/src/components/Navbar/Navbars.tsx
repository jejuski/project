import { Link } from 'react-router-dom'
import './style.css'
export function Navbars() {
    return(
        <div className="nav shadow-sm">
            <Link to="/"><li><h1 className="nav-title">Marketing Club</h1></li></Link>
            <ul className="nav-links">
                <Link to = "/class"><li>CLASS</li></Link>
                <Link to = "/community"><li>COMMUNITY</li></Link>
                <Link to = "/myPage"><li>MY</li></Link>
            </ul>
        </div>
    )
}