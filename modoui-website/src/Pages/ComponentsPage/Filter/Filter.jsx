import styles from './filter.module.css';

export default function Filter({filter, setFilter, isMobile})
{
   return (
      <>
         {!isMobile && <div className={styles.filters}>
               <button className={`${ !filter && styles.clicked}`} onClick={() => setFilter("")}>All</button>
               <button className={`${ filter === 'button' && styles.clicked}`} onClick={() => setFilter("button")}>Buttons</button>
               <button className={`${ filter === 'loader' && styles.clicked}`} onClick={() => setFilter("loader")}>Loaders</button>
               <button className={`${ filter === 'input' && styles.clicked}`} onClick={() => setFilter("input")}>Inputs</button>
               <button className={`${ filter === 'slider' && styles.clicked}`} onClick={() => setFilter("slider")}>Sliders</button>
               <button className={`${ filter === 'alert' && styles.clicked}`} onClick={() => setFilter("alert")}>Alerts</button>
               <button className={`${ filter === 'toggle' && styles.clicked}`} onClick={() => setFilter("toggle")}>Toggles</button>
         </div>}

         {isMobile && <div className={styles.optionsContianer}>
            <h2>Filter</h2>
            <select value={filter} onChange={e => setFilter(e.target.value)} className={styles.filterOptions}>
               <option value="">All</option>
               <option value="button">Buttons</option>
               <option value="loader">Loaders</option>
               <option value="input">Inputs</option>
               <option value="slider">Sliders</option>
               <option value="alert">Alerts</option>
               <option value="toggle">Toggles</option>
            </select>
         </div>}
      </>
   )
}