import type { Metadata } from 'next'
export const dynamic = 'force-dynamic'
export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { page?: string }
}): Promise<Metadata> {
  const domain = 'https://www.xydntvdsg.eu.org'

  return {
    alternates: {
      canonical: `${domain}/terms`,
    },
  }
}


export default function TermsAndConditions() {
  return (
    <div id="container">
      <div
        style={{
          height: '100vh',
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
          Terms and Conditions
        </h1>

        <p>
          On this page you will find information about our website’s Terms and
          Conditions. These Terms and Conditions apply to all visitors. If you
          do not agree with these Terms and Conditions, you must not access or
          use the services provided by this website.
        </p>

        <h3>Links to Other Websites</h3>
        <p>
          Our website may contain links to third-party websites or services.
          We do not control these external sites and are not responsible for
          their content, policies, or practices. Please review the terms and
          conditions of any third-party websites you visit.
        </p>

        <h3>Changes</h3>
        <p>
          We may update or modify our Terms and Conditions from time to time
          to improve our website and services. Any changes will be posted on
          this page. Continued use of the website after changes have been
          made constitutes acceptance of the updated Terms and Conditions.
        </p>
      </div>
    </div>
  )
}
