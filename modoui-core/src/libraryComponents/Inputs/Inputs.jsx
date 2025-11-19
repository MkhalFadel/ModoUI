import styles from "./inputs.module.css";

export function PrimaryInput({placeholder, props, onChange, value}) 
{
   const style = {
      color: props?.color ?? "white",
      backgroundColor: props?.backgroundColor ?? "black",
      border: props?.border ?? `2px solid #ccc`,
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "250px",
      borderRadius: props?.borderRadius ?? "8px",
      ...props
   };

   return (
      <input 
         value={value}
         onChange={e => onChange(e)}
         type="text" 
         className={styles.input} 
         placeholder={placeholder ?? "Enter Text..."} 
         style={style} />
   );
}

export function OutlineInput({ placeholder, props, onChange, value }) {
   const style = {
      color: props?.color ?? "white",
      backgroundColor: props?.backgroundColor ?? "transparent",
      border: props?.border ?? "2px solid #007bff",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "250px",
      borderRadius: props?.borderRadius ?? "6px",
      ...props
   };

   return (
      <input
         value={value}
         type="text"
         className={styles.outline}
         placeholder={placeholder ?? "Enter text..."}
         style={style}
         onChange={e => onChange(e)}
      />
   );
}

export function FilledInput({ placeholder, props, onChange, value }) {
   const style = {
      color: props?.color ?? "white",
      backgroundColor: props?.backgroundColor ?? "#007bff",
      border: props?.border ?? "2px solid #007bff",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "250px",
      borderRadius: props?.borderRadius ?? "8px",
      ...props
   };

   return (
      <input
         value={value}
         type="text"
         className={styles.filled}
         placeholder={placeholder ?? "Enter text..."}
         style={style}
         onChange={e => onChange(e)}
      />
   );
}

export function UnderlineInput({ placeholder, props, onChange, value }) {
   const style = {
      color: props?.color ?? "white",
      backgroundColor: props?.backgroundColor ?? "transparent",
      border: "none",
      borderBottom: props?.border ?? "2px solid #000",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "250px",
      borderRadius: props?.borderRadius ?? "0px",
      ...props
   };

   return (
      <input
         value={value}
         type="text"
         className={styles.underline}
         placeholder={placeholder ?? "Enter text..."}
         style={style}
         onChange={e => onChange(e)}
      />
   );
}

export function GlowInput({ placeholder, props, onChange, value }) {
   const style = {
      color: props?.color ?? "white",
      backgroundColor: props?.backgroundColor ?? "#111",
      border: props?.border ?? "1px solid #00ffcc",
      boxShadow: props?.boxShadow ?? "0 0 10px #00ffcc",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "250px",
      borderRadius: props?.borderRadius ?? "10px",
      ...props
   };

   return (
      <input
         value={value}
         type="text"
         className={styles.glow}
         placeholder={placeholder ?? "Enter text..."}
         style={style}
         onChange={e => onChange(e)}
      />
   );
}

export function RoundedInput({ placeholder, props, onChange, value }) {
   const style = {
      color: props?.color ?? "#222",
      backgroundColor: props?.backgroundColor ?? "#f1f1f1",
      border: props?.border ?? "2px solid #ddd",
      padding: props?.padding ?? "10px 16px",
      borderRadius: props?.borderRadius ?? "50px",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "260px",
      ...props
   };

   return (
      <input
         value={value}
         type="text"
         className={styles.rounded}
         placeholder={placeholder ?? "Type something..."}
         style={style}
         onChange={e => onChange(e)}
      />
   );
}

export function GlassInput({ placeholder, props, onChange, value }) {
   const style = {
      color: props?.color ?? "white",
      backgroundColor: props?.backgroundColor ?? "rgba(255,255,255,0.15)",
      border: props?.border ?? "1px solid var(--primaryText)",
      backdropFilter: "blur(8px)",
      padding: props?.padding ?? "10px 14px",
      borderRadius: props?.borderRadius ?? "12px",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "260px",
      ...props
   };

   return (
      <input
         value={value}
         type="text"
         className={styles.glass}
         placeholder={placeholder ?? "Glass input..."}
         style={style}
         onChange={e => onChange(e)}
      />
   );
}

export function ShadowInput({ placeholder, props, onChange, value }) {
   const style = {
      color: props?.color ?? "#222",
      backgroundColor: props?.backgroundColor ?? "#0000",
      border: props?.border ?? "1px solid #ddd",
      padding: props?.padding ?? "10px 14px",
      borderRadius: props?.borderRadius ?? "8px",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "260px",
      boxShadow: props?.boxShadow ?? "0 4px 10px rgba(0,0,0,0.1)",
      ...props
   };

   return (
      <input
         value={value}
         type="text"
         className={styles.shadow}
         placeholder={placeholder ?? "Shadow input..."}
         style={style}
         onChange={e => onChange(e)}
      />
   );
}

export function TerminalInput({ placeholder, props, onChange, value }) {
   const style = {
      color: props?.color ?? "#00ff66",
      backgroundColor: props?.backgroundColor ?? "#111",
      border: props?.border ?? "2px solid #00ff66",
      fontFamily: props?.fontFamily ?? `"Courier New", monospace`,
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "250px",
      borderRadius: props?.borderRadius ?? "4px",
      padding: props?.padding ?? "10px 14px",
      ...props
   };

   return (
      <input
         value={value}
         className={styles.terminal}
         placeholder={placeholder ?? "Enter command..."}
         onChange={(e) => onChange(e)}
         style={style}
         type="text"
      />
   );
}

export function NeonPulseInput({ placeholder, props, onChange, value }) {
   const style = {
      color: props?.color ?? "#fff",
      backgroundColor: props?.backgroundColor ?? "#0a0a0a",
      border: props?.border ?? "2px solid #ff00ff",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "250px",
      borderRadius: props?.borderRadius ?? "8px",
      padding: props?.padding ?? "10px 14px",
      ...props
   };

   return (
      <input
         value={value}
         className={styles.neonPulse}
         placeholder={placeholder ?? "Enter text..."}
         onChange={(e) => onChange(e)}
         style={style}
         type="text"
      />
   );
}
