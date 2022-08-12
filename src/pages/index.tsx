import type { NextPage } from 'next'

import { Footer } from '../components/Footer'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Qin Portfolio</title>
        <meta name="description" content="Qin Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <p>hello world</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
