import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      Joule
      <nav className="nav-links">
        <Link className="header-links" to="/">
        ☀️
        </Link>
        <Link className="header-links" to="/weeks">
        📈
        </Link>
        <Link className="header-links" to="/favorites">
        ⭐
        </Link>
      </nav>
    </div>
  )
}

export default Header
