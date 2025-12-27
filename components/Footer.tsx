export default function Footer() {
  return (
    <footer className="main">
      <div className="fbox">
        <div className="fcmpbox">
          <div className="copy">© 2025 WtsMovies</div>

          <span className="top-page">
            <a
              onClick={() =>
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            >
              <i className="fa fa-angle-up"></i>
            </a>
          </span>

          <div className="fmenu">
            <ul id="menu-footer-manu" className="menu">
              <li><a href="/">Home</a></li>
              <li><a href="/dmca">DMCA</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

