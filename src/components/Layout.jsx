import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <head>
        <title>Solheim tannlegevakt</title>
        <meta name="description" content="" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> 
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet"/>
      </head>
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </div>

    </>
  )
}