import type { NextPage } from 'next'

import { Footer } from '../components/Footer'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div role='container' className=''>
      <Head>
        <title>Qin Portfolio</title>
        <meta name="description" content="Qin Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='w-screen h-16 bg-sky-400'>
        <ul>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Portfolio</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </header>

      <main className=''>
        <div>
          <div className=''>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
