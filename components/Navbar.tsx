import Link from 'next/link'
import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div className={styles.navlinks}>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/display" className={styles.link}>Display</Link>
        <Link href="/login" className={styles.link}>SignIn</Link>
      </div>
    </div>
  )
}