import styles from './components.module.css'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import { componentsList } from './ComponentsRegistry.jsx'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Filter from './Filter/Filter.jsx'
import { saveStorage } from '../../sessionStorage.js'

export default function Components({theme, setTheme, setItem, search, setSearch, page, setPage})
{

   const [filter, setFilter] = useState("");
   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
   

   useEffect(() => {
      setPage("components")
   }, [])

   const navigate = useNavigate();

   function navigatePage(compName)
   {
      const showCased = componentsList.find(c => c.name === compName)
      saveStorage(showCased.name);
      setItem(showCased);
      navigate("/Playground")
   }

   function searchOrFilter()
   {
      if(search && filter)
         return componentsList.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) && c.type === filter)
      else if(search)
         return componentsList.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
      else if(filter)
         return componentsList.filter(c => c.type === filter)
      else
         return componentsList;
   }

   function displayComponents()
   {
      const filteredComponents = searchOrFilter();

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
         <Filter  filter={filter} setFilter={setFilter} isMobile={isMobile} />
         <section className={styles.grid}>
            {displayComponents()}
         </section>
         <Footer theme={theme} />
      </main>
   )
}