export const dynamic = 'force-dynamic'

  const domain = 'https://www.xydntvdsg.eu.org'

  return {
    alternates: {
      canonical: `${domain}/dmca`,
    },
  }
}

export default function DMCA() {
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
          DMCA
        </h1>

        <p>
          Please be informed that we do not host any of the videos embedded
          here. All videos found on our site are freely available around the
          web. Our mission is to organize those videos and make searching for
          the latest movies and series easier. We simply link to content that
          is already hosted on third-party websites.
        </p>

        <p>
          If you are concerned about copyrighted material appearing on this
          website, please contact the website that hosts the content and
          request its removal. Once the content is removed from the hosting
          website, it will automatically be removed from {domain}. We are not
          affiliated with any video or stream providers.
        </p>

        <p>
          All content is copyright of their respective owners. Links on this
          site point to locations elsewhere on the web. Please direct all
          copyright infringement issues to the companies hosting these files
          (vidsrc, 2embed, vidcloud, doodstream, etc.).
        </p>

        <p>
          It is our policy to respond to clear notices of alleged copyright
          infringement. This page outlines the information required to submit
          such notices.
        </p>

        <p>
          No copyright infringement is intended or implied.
          <br />
          {domain} acts solely as a search engine and is not responsible for
          content hosted on external websites. Please ensure before sending
          a DMCA request that the media is actually hosted by {domain}.
        </p>

        <p>
          The most effective way to protect your rights is to request removal
          from the original hosting provider. This will also remove the
          content from {domain} and other search engines.
        </p>

        <p>
          <strong>Streams Widget</strong>
        </p>

        <p>
          We do not host or upload any streams. We are not responsible for the
          accuracy, legality, or content of external streams. We only provide
          links to third-party websites.
        </p>

        <p>
          By using this website, you understand that all streams originate
          from third-party sources freely available on the internet. {domain}{' '}
          does not copy, host, distribute, or sell any copyrighted content.
        </p>

        <p>
          <strong>Images</strong>
        </p>

        <p>
          {domain} may use external images automatically gathered from public
          movie databases such as TMDB or IMDb. We do not claim ownership of
          these images. All images and trademarks belong to their respective
          owners.
        </p>
      </div>
    </div>
  )
}
