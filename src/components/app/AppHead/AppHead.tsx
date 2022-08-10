import Head from 'next/head'

import { SERVICE } from '@/constatns/common'

export const AppHead = () => {
  return (
    <Head>
      <title>{SERVICE.TITLE}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={SERVICE.DESCRIPTION} />
      <meta property="og:url" content={SERVICE.URL} />
      <meta property="og:title" content={SERVICE.TITLE} />
      <meta property="og:site_name" content={SERVICE.TITLE} />
      <meta property="og:description" content={SERVICE.DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={SERVICE.OGP_IMAGE} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="icon" href={SERVICE.ICON_URL}></link>
      <link rel="canonical" href={SERVICE.URL} />
    </Head>
  )
}
