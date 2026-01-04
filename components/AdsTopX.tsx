'use client'

export default function AdsTopX() {
  const closeAds = () => {
    const el = document.getElementById('adsTopX')
    if (el) el.style.display = 'none'
  }

  return (
    <div className="adsTopX_wrapper" id="adsTopX">
      <div className="adsTopX_container">

        <div className="adsTopX_image">
          <img src="/img/home.jpg" alt="Stream Without Ads" />
        </div>

        <div className="adsTopX_content">
          <h2 className="adsTopX_title">
            Enjoy Streaming Without Ads
          </h2>

          <p className="adsTopX_desc">
            Register an account to watch movies and series with a more comfortable experience without ad interruptions.
          </p>
        </div>

        <div className="adsTopX_action">
          <a href="#" className="adsTopX_button">
            Sign Up & Watch Ad-Free
          </a>
        </div>

        <button
          className="adsTopX_close"
          onClick={closeAds}
          aria-label="Close ads"
        >
          ×
        </button>

      </div>
    </div>
  )
}
