import styles from './homepage.module.css'
import { useEffect } from 'react'
import Logo from "../../assets/ModoUI.svg"
import { Link } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'

export default function Homepage({theme, setTheme, page, setPage})
{


   useEffect(() => {
      setPage("home")
   }, [])

   function click()
   {
      alert("hello there")
   }

   return (
      <main className={styles.container}>

         <NavBar theme={theme} setTheme={setTheme} page={page} />
         <div className={styles.logoContainer}>
            <img src={Logo} alt="ModoUILogo" className={styles.logo} />
            <div className={styles.titleContainer}>
               <h1>ModoUI</h1>
               <p className={styles.description}>Simple, Fast, Beautiful</p>
            </div>
         </div>

         <div className={styles.links}>
            <a href="#installation">Get Started</a>
            <Link className={styles.link} to="/Components">View Components</Link>
         </div>

         <div className={styles.featuresContainer}>
            <h2>Key Features</h2>
            <div className={styles.features}>
               <div>
                  <h3>⚡ Lightweight & Fast</h3>
                  <p>Build with Modren React + CSS Variables</p>
               </div>
               <div>
                  <h3>🧩 Modular Components</h3>
                  <p>Import Only what you need</p>
               </div>
               <div>
                  <h3>📦 Npm Ready</h3>
                  <p>Install via npm in Seconds</p>
               </div>
            </div>
         </div>

         <div className={styles.installationContainer}>
            <h2 id="installation">Installation</h2>
            <div className={styles.code}>
               <p style={{wordSpacing: "10px", color: "white"}}>
                  <span style={{color: "#E06C75"}}>npm</span> install <span style={{color: "#61AFEF"}}>@mkhalfadel/modoui-core</span>
               </p>
               <button onClick={() => navigator.clipboard.writeText("npm install modoUI")}>Copy</button>
            </div>
            <h2>Usage Example</h2>
            <div className={styles.code}>
               <pre>
                  <code className={styles.codeBlock}>
                     import {'{'} <span style={{color: "#E06C75"}}>PrimaryButton</span> {'}'} from <span style={{color: "#61AFEF"}}>"@mkhalfadel/modoui-core"</span>;
                     <br /><br />      
                     export default function App( ) {'{'}
                     <br />
                     &nbsp;&nbsp;return &lt;<span style={{color: "#E06C75"}}>PrimaryButton </span> text={"{Click Me...}"} {"/>"}
                     <br />
                     {'}'}
                     
                  </code>
               </pre>
            </div>
         </div>

         <Footer theme={theme} />
      </main>
   )
}