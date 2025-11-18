import styles from './footer.module.css'
import Logo from '../../assets/ModoUILogo.svg'
import LogoDark from '../../assets/ModoUILogoDark.svg'
import { Link } from 'react-router-dom'

export default function Footer({theme})
{
   return (
      <footer className={styles.footer}>
         <div className={styles.left}>
            <img src={theme === 'dark' ? Logo : LogoDark} alt="ModoLogo" className={styles.logo} />
            <p>Project By [ <a style={{textDecoration: "none", color: "#61AFEF"}} href="https://github.com/MkhalFadel" target='_blank'>MkhalFadel</a> ]</p>
         </div>
         <div className={styles.right}>
            <div className={styles.pages}>
               <p>Pages:</p>
               <Link to="/">Homepage</Link>
               <Link to="/Components">Components Page</Link>
            </div>
            <div className={styles.projects}>
               <p>Other Projects:</p>
               <a href="https://mkhalfadel.github.io/Lock-Ledger/" target='_blank'>Lock-Ledger</a>
               <a href="https://github.com/MkhalFadel/Dukkan-Store" target='_blank'>Dukkan Store</a>
               <a href="https://mkhalfadel.github.io/MatchingCards-Game/" target='_blank'>MatchingCards Game</a>
            </div>
         </div>
      </footer>
   )
}