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
  
  <a href="/now-playing">
    <i className="fas fa-video"></i>
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
