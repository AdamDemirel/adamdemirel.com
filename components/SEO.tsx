import React from "react"
import { Helmet } from "react-helmet"
import Head from 'next/head'

const SEO = ({ title, description, path }) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {/* <script>{`gtag('config', 'UA-145443401-1', {'page_path': ${path}});`}</script> */}
  </Head>
)

export default SEO
