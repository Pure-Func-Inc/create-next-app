import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    console.info('[APP Version]', process.env.NEXT_PUBLIC_APP_VERSION)
  }, [])

  return (
    <Component {...pageProps} />
  )
}

export default App
