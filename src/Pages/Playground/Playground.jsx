import { useState } from 'react'
import styles from './playground.module.css'
import * as buttons from '../../Components/Buttons/Buttons.jsx';
import * as loaders from '../../Components/Loaders/Loaders.jsx'
import * as inputs from '../../Components/Inputs/Inputs.jsx';
import * as alerts from '../../Components/Alerts/Alerts.jsx';
import * as toggles from '../../Components/Toggles/Toggles.jsx';
import * as sliders from '../../Components/Sliders/Sliders.jsx';
import CodeBlock from '../../Components/CodeBlock/CodeBlock';

export default function Playground({theme, setTheme})
{ 
   const [text, setText] = useState("");
   const [type, setType] = useState("button");
   const props = {}
   const codeString = `<PrimaryAlert props={props} text={text}/>`   
   const installString = `npm install modoUI`;

   return (
      <main className={styles.container}>
         <div className={styles.componentDisplay}>
            <div className={styles.elDisplay}>
               <div className={styles.elTest}>
                  <sliders.GlassSlider text={text} props={props} />
               </div>
               <div className={styles.codeSection}>
                  <CodeBlock code={codeString} showLineNumbers={true} />
               </div>
            </div>
            <div className={styles.elStyles}>
               <table>
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
                     {(type === "button" || type === "input") && (<tr>
                        <td>{type ==='button' ? "onClick" : "onChange"}</td>
                        <th>function</th>
                        <th>undefined</th>
                        <th>Pass a function</th>
                     </tr>)}
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