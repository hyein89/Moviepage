export const dynamic = 'force-dynamic'

export default function PrivacyPolicy() {
  const domain =
    typeof window !== 'undefined'
      ? window.location.hostname
      : 'xydntvdsg.eu.org'

  return (
    <div id="container">
      <div
        style={{
          color: '#000',
          background: '#fff',
          padding: '20px',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '32px',
            fontWeight: 400,
          }}
        >
          Privacy Policy
        </h1>

        <h2>Who we are</h2>
        <p>
          Our website address is:{' '}
          <strong>https://{domain}</strong>
        </p>

        <h2>Comments</h2>
        <p>
          When visitors leave comments on the site, we collect the data shown
          in the comments form, and also the visitor’s IP address and browser
          user agent string to help spam detection.
        </p>
        <p>
          An anonymized string created from your email address (also called a
          hash) may be provided to the Gravatar service. The Gravatar service
          privacy policy is available at https://automattic.com/privacy/.
          After approval of your comment, your profile picture is visible to
          the public in the context of your comment.
        </p>

        <h2>Media</h2>
        <p>
          If you upload images to the website, you should avoid uploading
          images with embedded location data (EXIF GPS) included. Visitors to
          the website can download and extract any location data from images
          on the website.
        </p>

        <h2>Cookies</h2>
        <p>
          If you leave a comment on our site, you may opt-in to saving your
          name, email address, and website in cookies. These cookies are for
          your convenience and last for one year.
        </p>
        <p>
          If you visit our login page, we will set a temporary cookie to
          determine if your browser accepts cookies. This cookie contains no
          personal data and is discarded when you close your browser.
        </p>
        <p>
          When you log in, we will set up cookies to save your login
          information and screen display preferences. Login cookies last for
          two days, and screen options cookies last for one year.
        </p>
        <p>
          If you edit or publish an article, an additional cookie will be
          saved in your browser. This cookie contains no personal data and
          expires after one day.
        </p>

        <h2>Embedded content from other websites</h2>
        <p>
          Articles on this site may include embedded content (e.g. videos,
          images, articles). Embedded content from other websites behaves in
          the same way as if you visited the other website.
        </p>
        <p>
          These websites may collect data about you, use cookies, embed
          third-party tracking, and monitor your interaction with embedded
          content.
        </p>

        <h2>Who we share your data with</h2>
        <p>
          If you request a password reset, your IP address will be included
          in the reset email.
        </p>

        <h2>How long we retain your data</h2>
        <p>
          If you leave a comment, the comment and its metadata are retained
          indefinitely. This helps us recognize and approve follow-up
          comments automatically.
        </p>
        <p>
          For users that register on our website (if any), we store the
          personal information provided in the user profile. Users can see,
          edit, or delete their personal information at any time (except
          changing their username).
        </p>

        <h2>What rights you have over your data</h2>
        <p>
          If you have an account on this site or have left comments, you can
          request an exported file of the personal data we hold about you.
          You can also request that we erase any personal data we hold about
          you, except data we are required to keep for legal or security
          purposes.
        </p>

        <h2>Where we send your data</h2>
        <p>
          Visitor comments may be checked through an automated spam detection
          service.
        </p>
      </div>
    </div>
  )
}
