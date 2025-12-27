'use client'

export default function Header() {
  return (
    <div id="data-container">

      <header className="responsive">
        <div id="menubtn" className="nav">
          <a className="aresp nav-resp">
            <i className="fa fa-bars"></i>
          </a>
        </div>

        <div id="searchbtn" className="search">
          <a className="aresp search-resp">
            <i className="fa fa-search"></i>
          </a>
        </div>

        <div className="logo">
          <a href="/">
            <img src="/img/logo.png" alt="logo" />
          </a>
        </div>
      </header>

      <div className="search_responsive">
        <form
          method="get"
          id="form-search-resp"
          className="form-resp-ab"
        >
          <input
            type="text"
            className="footer_search_input"
            placeholder="Search..."
            name="keyword_search"
            id="keyword"
            autoComplete="off"
          />
          <input id="key_pres" name="key_pres" type="hidden" />
          <input id="keyword_search_replace" name="keyword_search_replace" type="hidden" />
        </form>

        <div className="live-search" id="header_search_autocomplete"></div>
      </div>

      <div id="arch-menu" className="menuresp">
        <div className="menu">
          <ul className="resp">
            <li><a href="/"><i className="fas fa-home"></i><div className="mvs">Home</div></a></li>
            <li><a href="/movies"><i className="fas fa-film"></i><div className="mvs">Movies</div></a></li>
            <li><a href="/populer"><i className="fas fa-chart-line"></i><div className="mvs">Popular Movies</div></a></li>
            <li><a href="/top-rated"><i className="fas fa-star"></i><div className="mvs">Top Rated Movies</div></a></li>
             <li>
  <li>
  <a href="/now-playing">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
      <path d="M17 10.5V6c0-1.1-.9-2-2-2H3C1.9 4 1 4.9 1 6v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.5l6 4v-11l-6 4z"/>
    </svg>
    <div className="mvs">Now Playing Movies</div>
  </a>
</li>

<li>
  <a href="/upcoming">
    <i className="fas fa-calendar-alt"></i>
    <div className="mvs">Upcoming Movies</div>
  </a>
</li>
            
          </ul>
        </div>
      </div>

    </div>
  )
}
