import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          href="/fonts/karla-bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        ></link>
        <link
          rel="preload"
          href="/fonts/karla-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        ></link>
        <meta charSet="utf-8" />

        {/* <meta name="google-site-verification" content="3SK90HgPUNr666XDbHneA9y1kTynEOMUQcsrythMgno" /> */}
        <link rel="canonical" href="https://adamdemirel.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="Adam Demirel" />

        <meta name="twitter:image" content="https://adamdemirel.com/favicon-32x32.png" />

        {/* TRACKING */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-145443401-1" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments) }
      gtag('js', new Date());

      gtag('config', 'UA-145443401-1');
    `}
        </Script>
        {/* <Script id="hotjar">
          {`(function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:1439862,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </Script> */}

        {/* FAVICON */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
