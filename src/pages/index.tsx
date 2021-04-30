import Head from 'next/head'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
      <title>Início | Mandula Natural</title>
    </Head>
    <h1 className={styles.title}>
      <span>Hello World</span>
    </h1>
    </>
  )
}
