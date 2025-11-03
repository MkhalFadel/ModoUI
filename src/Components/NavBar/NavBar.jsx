import styles from './navBar.module.css'
import moonIcon from '../../assets/Icons/moon.png'
import sunIcon from '../../assets/Icons/sun.png'
import { useNavigate } from 'react-router-dom'

export default function NavBar({theme, setTheme, search, setSearch, page})
{

   const navigate = useNavigate();

   return (
      <nav className={styles.navBar}>
         {page !== 'home' && <div className={styles.returnBtn}>
            <button onClick={() => navigate(page === 'components' ? "/" : "/Components")}>Return</button>
         </div>}

         {page === 'components' && <input value={search} onChange={e => setSearch(e.target.value)} placeholder='Search Components...' className={styles.search} type="text" />}

         <div style={page === 'home' ? {position: 'fixed', top: "15px", right: "0"} : {}} className={styles.darkMode}>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : "dark")}>
               <img src={theme === 'dark' ? sunIcon : moonIcon} alt="enableDarkMode" />
            </button>
         </div>
      </nav>
   )
}