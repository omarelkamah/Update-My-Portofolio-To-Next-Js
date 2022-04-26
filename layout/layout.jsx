import Head from 'next/head'
import React from 'react'
// import { Children } from 'react/cjs/react.development'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Home</title>

        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
          integrity=''
        />

        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
          integrity=''
          referrerpolicy='no-referrer'
        />
      </Head>
      {children}
    </div>
  )
}

export default Layout
