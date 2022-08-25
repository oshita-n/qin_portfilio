import type { NextPage } from 'next'

import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import { Hero } from '../components/hero/Hero'
import { Blog } from '../components/blog/Blog'
import { Portfolio } from '../components/portfolio/Portfolio'

import Head from 'next/head'
import { Github } from '../components/github/Github'
import { Twitter } from '../components/twitter/Twitter'

const Home: NextPage = () => {
  return (
    <div role='container' className=''>
      <Head>
        <title>Qin Portfolio</title>
        <meta name="description" content="Qin Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />

      {/* メインコンテンツ */}
      <main className='flex items-center justify-center'>
        <div className='flex flex-col w-[960px]'>
          <Blog />
          <Portfolio />
          <div className='flex flex-row'>
            <div className='flex-1'>
              <Github />
            </div>
            <div className='flex-1  ml-10'>
              <Twitter />
            </div>
        </div>
        </div>
      </main>
      

      <Footer />
    </div>
  )
}

export default Home
