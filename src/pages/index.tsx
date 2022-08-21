import type { NextPage } from 'next'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div role='container' className=''>
      <Head>
        <title>Qin Portfolio</title>
        <meta name="description" content="Qin Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <div className="w-screen bg-[#E64980] text-white">
        <div className="flex h-[248px] max-w-7xl flex-col justify-around p-4 sm:mx-auto sm:flex-row sm:items-center sm:justify-between md:pr-20 lg:pr-36">
        </div>
      </div>
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
