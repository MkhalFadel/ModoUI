import { Highlight, themes } from "prism-react-renderer";
import styles from "./codeBlock.module.css";

export default function CodeBlock({ code }) {
   const handleCopy = async () => {
   await navigator.clipboard.writeText(code);
};

return (
   <div className={styles.codeWrapper}>
      <button onClick={handleCopy} className={styles.copyBtn}>
         Copy
      </button>
      <Highlight theme={themes.nightOwl} code={code.trim()} language="jsx" showLineNumbers={true} >
         {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} ${styles.code}`} style={style}>
               {tokens.map((line, i) => (
               <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                  ))}
               </div>
            ))}
            </pre>
         )}
      </Highlight>
   </div>
   );
}
