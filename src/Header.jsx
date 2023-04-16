import reactLogo from './assets/react.svg'

export default function Header() {
    return(
      <header>
        <div className="container">
          <nav>
            <img className="react-logo" src={reactLogo} alt="React Logo" />
            <ul>
              <li><a href="">Pricing</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }