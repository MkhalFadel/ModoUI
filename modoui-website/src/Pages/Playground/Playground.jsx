import { useState, useEffect } from 'react'
import styles from './playground.module.css'
import NavBar from '../../Components/NavBar/NavBar.jsx';
import * as buttons from '../../../../modoui-core/src/libraryComponents/Buttons/Buttons.jsx';
import * as loaders from '../../../../modoui-core/src/libraryComponents/Loaders/Loaders.jsx'
import * as inputs from '../../../../modoui-core/src/libraryComponents/Inputs/Inputs.jsx';
import * as alerts from '../../../../modoui-core/src/libraryComponents/Alerts/Alerts.jsx';
import * as toggles from '../../../../modoui-core/src/libraryComponents/Toggles/Toggles.jsx';
import * as sliders from '../../../../modoui-core/src/libraryComponents/Sliders/Sliders.jsx';
import CodeBlock from '../../Components/CodeBlock/CodeBlock.jsx';

export default function Playground({ item, page, setPage, theme, setTheme })
{ 

   useEffect(() => {
      setPage("playGround")
   }, [])

   const codeString = item.display;   
   const installString = `npm install @mkhalfadel/modoui-core`;

   return (
      <main className={styles.container}>
         <NavBar page={page} theme={theme} setTheme={setTheme} />
         <div className={styles.componentDisplay}>
            <div className={styles.elDisplay}>
               <div className={styles.elTest}>
                  {item.component}
               </div>
               <div className={styles.codeSection}>
                  <CodeBlock code={codeString} showLineNumbers={true} />
               </div>
            </div>
            <div className={styles.elStyles}>
               <table>
                  <colgroup>
                     <col style={{ width: "25%" }} />
                     <col style={{ width: "20%" }} />
                     <col style={{ width: "25%" }} />
                     <col style={{ width: "30%" }} />
                  </colgroup>
                  <thead>
                     <tr>
                        <th>Prop</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>text</td>
                        <th>String</th>
                        <th>Enter Text...</th>
                        <th>Text Showen</th>
                     </tr>
                     <tr>
                        <td>props</td>
                        <th>Object</th>
                        <th>{"{ }"}</th>
                        <th>Styles</th>
                     </tr>
                     {(item.type === "button" || item.type === "input") && (<tr>
                        <td>{item.type ==='button' ? "onClick" : "onChange"}</td>
                        <th>function</th>
                        <th>undefined</th>
                        <th>Pass a function</th>
                     </tr>)}
                     {item.type === 'toggle' && <tr>
                        <td>Name</td>
                        <th>attribute</th>   
                        <th>undefined</th>   
                        <th>Pass a name to prevent Multiple answers if needed</th>   
                     </tr>}
                  </tbody>
               </table>
               <div className={styles.installSection}>
                  <CodeBlock code={installString} />
               </div>
            </div>
         </div>
      </main>
   )
}