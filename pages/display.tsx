/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '@/styles/Display.module.scss'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Foooter'

export default function Display() {
  return (
    <>
      <Head>
        <title>Display</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <h1>Display</h1>
        <Footer />
      </main>
    </>
  )
}