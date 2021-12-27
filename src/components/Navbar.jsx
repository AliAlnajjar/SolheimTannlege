import styles from '../styles/Layout.module.css'
import Image from 'next/image'
export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <ul>
                    <li> <Image src="/logo.svg" height={72} width={72} /></li>
                    <li>  <h1>Solheim tannklinikk</h1></li>
                </ul>
                {/* <ul>
                    <li> icon</li>
                    <li>  <h2>91280406</h2></li>
                </ul> */}
                <ul>
                    <li> <Image src="/no.svg" height={20} width={30} /></li>
                    <li> <Image src="/Eng.svg" height={30} width={30} /></li>
                    <li> <Image src="/Ar.svg" height={30} width={30} /></li>
                </ul>
                
            </div>
            <nav className={styles.nav}> 
                <ul>
                <li> Bestil time</li>
                    <li> priser</li>
                    <li> Tjenester</li>
                    <li> åpningstider</li>
                    <li> finn oss</li>

                </ul>
            </nav>
        </header>
    )
}