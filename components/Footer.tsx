'use client'

import { SITE_NAME } from '../lib/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="main">
      <div className="fbox">
        <div className="fcmpbox">
          <div className="copy">
            © {year} Copyright {SITE_NAME}. All Rights Reserved.
          </div>

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
