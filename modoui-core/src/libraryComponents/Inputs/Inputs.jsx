import styles from "./inputs.module.css";

export function PrimaryInput({text, props, onChange, value}) 
{
   const style = {
      color: props.color || "white",
      backgroundColor: props.backgroundColor || "black",
      border: props.border || `2px solid #ccc`,
      fontSize: props.fontSize || "1rem",
      width: props.width || "250px",
      borderRadius: props.borderRadius || "8px",
   };

   return (
      <input 
         value={value}
         onChange={e => onChange(e.target.value)}
         type="text" 
         className={styles.input} 
         placeholder={text || "Enter Text..."} 
         style={style} />
   );
}

export function OutlineInput({ text, props, onChange, value }) {
   const style = {
      color: props.color || "white",
      backgroundColor: props.backgroundColor || "transparent",
      border: props.border || "2px solid #007bff",
      fontSize: props.fontSize || "1rem",
      width: props.width || "250px",
      borderRadius: props.borderRadius || "6px",
   };

   return (
      <input
         value={value}
         type="text"
         className={styles.outline}
         placeholder={text || "Enter text..."}
         style={style}
         onChange={onChange}
      />
   );
}

export function FilledInput({ text, props, onChange, value }) {
   const style = {
      color: props.color || "white",
      backgroundColor: props.backgroundColor || "#007bff",
      border: props.border || "2px solid #007bff",
      fontSize: props.fontSize || "1rem",
      width: props.width || "250px",
      borderRadius: props.borderRadius || "8px",
   };

   return (
      <input
         value={value}
         type="text"
         className={styles.filled}
         placeholder={text || "Enter text..."}
         style={style}
         onChange={onChange}
      />
   );
}

export function UnderlineInput({ text, props, onChange, value }) {
   const style = {
      color: props.color || "white",
      backgroundColor: props.backgroundColor || "transparent",
      border: "none",
      borderBottom: props.border || "2px solid #000",
      fontSize: props.fontSize || "1rem",
      width: props.width || "250px",
      borderRadius: props.borderRadius || "0px",
   };

   return (
      <input
         value={value}
         type="text"
         className={styles.underline}
         placeholder={text || "Enter text..."}
         style={style}
         onChange={onChange}
      />
   );
}

export function GlowInput({ text, props, onChange, value }) {
   const style = {
      color: props.color || "white",
      backgroundColor: props.backgroundColor || "#111",
      border: props.border || "1px solid #00ffcc",
      boxShadow: props.boxShadow || "0 0 10px #00ffcc",
      fontSize: props.fontSize || "1rem",
      width: props.width || "250px",
      borderRadius: props.borderRadius || "10px",
   };

   return (
      <input
         value={value}
         type="text"
         className={styles.glow}
         placeholder={text || "Enter text..."}
         style={style}
         onChange={onChange}
      />
   );
}
