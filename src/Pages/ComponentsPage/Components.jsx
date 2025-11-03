import styles from './components.module.css'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import Footer from '../../Components/Footer/Footer'
import { componentsList } from './ComponentsRegistry.jsx'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Components({theme, setTheme, setItem, search, setSearch, page, setPage})
{

   useEffect(() => {
      setPage("components")
   }, [])

   const navigate = useNavigate();

   function navigatePage(compName)
   {
      const showCased = componentsList.find(c => c.name === compName)
      setItem(showCased);
      navigate("/Playground")
   }

   function displayComponents()
   {
      const filteredComponents = search ? componentsList.filter(c => c.name.toLowerCase().includes(search.toLowerCase())) : componentsList;

      const componentsEl = filteredComponents.map(com => (
      <div onClick={() => navigatePage(com.name)} className={styles.card} key={com.name}>
            <div onClick={e => e.stopPropagation()} className={styles.preview}>
               {com.component}
            </div>
            <p className={styles.name}>{com.name}</p>
         </div>
      ))

      return componentsEl;
   }

   return (
      <main className={styles.container}>
         <NavBar theme={theme} setTheme={setTheme} search={search} setSearch={setSearch} page={page} />
         <section className={styles.grid}>
            {displayComponents()}
         </section>
         <Footer theme={theme} />
      </main>
   )
}