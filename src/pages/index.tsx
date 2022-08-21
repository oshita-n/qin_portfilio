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
