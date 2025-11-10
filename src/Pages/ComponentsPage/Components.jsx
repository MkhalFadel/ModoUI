import styles from './components.module.css'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import Footer from '../../Components/Footer/Footer'
import { componentsList } from './ComponentsRegistry.jsx'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Components({theme, setTheme, setItem, search, setSearch, page, setPage})
{

   const [filter, setFilter] = useState("");

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
         <div className={styles.filters}>
            <button className={`${ !filter && styles.clicked}`} onClick={() => setFilter("")}>All</button>
            <button className={`${ filter === 'button' && styles.clicked}`} onClick={() => setFilter("button")}>Buttons</button>
            <button className={`${ filter === 'loader' && styles.clicked}`} onClick={() => setFilter("loader")}>Loaders</button>
            <button className={`${ filter === 'input' && styles.clicked}`} onClick={() => setFilter("input")}>Inputs</button>
            <button className={`${ filter === 'slider' && styles.clicked}`} onClick={() => setFilter("slider")}>Sliders</button>
            <button className={`${ filter === 'alert' && styles.clicked}`} onClick={() => setFilter("alert")}>Alerts</button>
            <button className={`${ filter === 'toggle' && styles.clicked}`} onClick={() => setFilter("toggle")}>Toggles</button>
         </div>
         <section className={styles.grid}>
            {displayComponents()}
         </section>
         <Footer theme={theme} />
      </main>
   )
}