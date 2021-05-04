import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
      <title>Início | Mandula Natural</title>
    </Head>
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <video autoPlay loop>
          <source src="/images/hero.mp4"/>
        </video>
        <img src="/images/beleza.png" alt="beleza"/>
        <img src="/images/que-cura.png" alt="que cura"/>
      </section>
      <SubscribeButton />
    </main>
    </>
  )
}
