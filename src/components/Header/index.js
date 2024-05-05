import './index.css'

const Header = props => {
  const {name, quantity} = props

  return (
    <>
      <nav className="nav-header">
        <div className="nav-content">
          <h1>{name}</h1>
          <p>My Orders</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-bar-img"
          />
          <span className="cart-count-badge">{quantity}</span>
        </div>
      </nav>
    </>
  )
}

export default Header
