import styles from '../styles/OpeningHours.module.css'

export default function OpeningHours() {
    return (
        <div className={styles.container}>
            <h1>Åpningstider</h1>
            <ul>
                <li>
                    Mandag-Fredag : 08:00 - 19:00
                </li>
                <li>
                    Lørdag        : 09:00 - 17:00
                </li>
            </ul>
        </div>
    )
}