import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <Link href={'/'}>
                    <div className={styles.logo}>
                       <h2>Conor Bailey</h2> 
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header