import type { DocumentProps } from 'next/document'
import { Head, Html, NextScript, Main } from 'next/document'
import React from 'react'

const Document: React.FC<DocumentProps> = () => {
  return (
    <Html lang="en">

      <Head></Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
