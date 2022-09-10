import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="title">
      Joule 🔥
      </div>
      <nav className="nav-links">
        <Link className="header-links" to="/">
        Daily☀️
        </Link>
        <Link className="header-links" to="/weeks">
         Weekly📈
        </Link>
        <Link className="header-links" to="/favorites">
        Favorites⭐ 
        </Link>
      </nav>
    </div>
  )
}

export default Header
