import React from "react";
import { Helmet } from "react-helmet";

export default ({ title, description, path }) => (
  <Helmet
    htmlAttributes={{
      lang: "en"
    }}
  >
    {/* SEO */}
    <meta charSet="utf-8" />
    <title>{title}</title>
    <link rel="canonical" href="https://adamdemirel.com" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="title" />
    <meta property="og:description" content={description} />
    <meta name="twitter:card" content={description} />
    <meta name="twitter:creator" content="Adam Demirel" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="https://adamdemirel.com/favicon.ico" sizes="32x32" />

    {/* TRACKING */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-145443401-1" />
    <script>
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments) }
      gtag('js', new Date());

      gtag('config', 'UA-145443401-1');
    `}
    </script>
    <script>{`gtag('config', 'UA-145443401-1', {'page_path': ${path}});`}</script>
    <script>
      {`(function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:1439862,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
    </script>

    {/* FAVICON */}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="32x32" />
  </Helmet>
);
