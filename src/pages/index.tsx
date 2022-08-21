import type { NextPage } from 'next'

import { Footer } from '../layout/Footer'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div role='container' className=''>
      <Head>
        <title>Qin Portfolio</title>
        <meta name="description" content="Qin Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='flex w-screen h-16 bg-sky-400'>
        <h1 className='text-left mt-5 ml-5'>Shimabu IT University</h1>
        <ul className='flex ml-auto mt-5 mr-5'>
            <li className='ml-2'><a href='#'>About</a></li>
            <li className='ml-2'><a href='#'>Blog</a></li>
            <li className='ml-2'><a href='#'>Portfolio</a></li>
            <li className='ml-2'><a href='#'>Contact</a></li>
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
