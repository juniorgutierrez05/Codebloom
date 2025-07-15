import styles from "./navbar.module.css"
import Button from "../Button/button"
import Link from "next/link"

export default function navbar(){
    return(
        <nav className={styles.navbar}>
                <div className={styles.logoContainer}>
                <img className={styles.logo} src="/Image/logo1.png" alt="Logo de Codebloom " />
            </div>
            <ul className={styles.links}>
                <li className={styles.link}><Link href="/">Home</Link></li>
                <li className={styles.link}><Link href="#filosofia">Soluciones</Link></li>
                <li className={styles.link}><Link href="/">Soporte</Link></li>
                <li className={styles.link}><Link href="/">Contacto</Link></li>
            </ul>
            <div>
                <Button/>
            </div>
        </nav>
    )
}