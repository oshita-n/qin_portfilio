import type { NextPage } from 'next'
import Head from 'next/head'

export const Header: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Qin Portfolio</title>
        <meta name="description" content="Qin Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  ) 
}