import styles from "./buttons.module.css";

export function PrimaryButton({ props, text, onClick }) {

   const style = {
      color: props?.color ?? "white",
      backgroundColor: props?.Background ?? "black",
      border: "none",
      ...props
   };

   return <button style={style} className={styles.primary} onClick={onClick}>{text ?? "Click Me"}</button>;
}

export function OutlineButton({ props, text, onClick }) {

   const style = {
      color: props?.color ?? 'var(--primaryText)',
      backgroundColor: props?.backgroundColor ?? "transparent",
      border: `2px solid ${props?.backgroundColor ?? "green"}`,
      ...props
   };

   return <button style={style} className={styles.outline} onClick={onClick}>{text ?? "Click Me"}</button>;
}

export function GradientButton({ props, text, onClick }) {

   const style = {
      color: props?.color ?? "white",
      backgroundImage: `linear-gradient(45deg, ${props?.backgroundColor ?? "black"}, #4b0082)`,
      border: "none",
      ...props
   };

   return <button style={style} className={styles.gradient} onClick={onClick}>{text ?? "Click Me"}</button>;
}

export function GlassButton({ props, text, onClick }) {

   const style = {
      color: props?.color ?? "black",
      backgroundColor: props?.backgroundColor ?? + "33", // transparent tint
      border: "1px solid rgba(255, 255, 255, 0.3)",
      backdropFilter: "blur(8px)",
      ...props
   };

   return <button style={style} className={styles.glass} onClick={onClick}>{text ?? "Click Me"}</button>;
}

export function ShadowButton({ props, text, onClick }) {
   const style = {
      color: props?.color ?? "white",
      backgroundColor: props?.backgroundColor ?? "#222",
      border: "none",
      boxShadow: props?.shadow ?? "0px 4px 10px rgba(0,0,0,0.3)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      ...props
   };

   return (
      <button 
         style={style}
         className={styles.shadow}
         onClick={onClick}
      >
         {text ?? "Shadow Button"}
      </button>
   );
}

export function PillButton({ props, text, onClick }) {
   const style = {
      color: props?.color ?? "white",
      backgroundColor: props?.backgroundColor ?? "#0d6efd",
      border: "none",
      borderRadius: props?.borderRadius ?? "40px",
      padding: props?.padding ?? "12px 28px",
      fontSize: props?.fontSize ?? "1rem",
      ...props
   };

   return (
      <button 
         style={style}
         className={styles.pill}
         onClick={onClick}
      >
         {text ?? "Pill Button"}
      </button>
   );
}

export function NeonButton({ props, text, onClick }) {

   const base = props?.backgroundColor ?? "#0ff";

   const style = {
      color: props?.color ?? "white",
      backgroundColor: "#000",
      border: `2px solid ${base}`,
      boxShadow: `0 0 8px ${base}`,
      textShadow: `0 0 4px ${base}`,
      ...props
   };

   return (
      <button 
         style={style}
         className={styles.neon}
         onClick={onClick}
      >
         {text ?? "Neon Button"}
      </button>
   );
}

export function SoftButton({ props, text, onClick }) {

   const bg = props?.backgroundColor ?? "#f0f0f0";

   const style = {
      color: props?.color ?? "#333",
      backgroundColor: bg,
      border: `1px solid ${props?.borderColor ?? "#ccc"}`,
      borderRadius: props?.borderRadius ?? "10px",
      padding: props?.padding ?? "10px 20px",
      ...props
   };

   return (
      <button 
         style={style}
         className={styles.soft}
         onClick={onClick}
      >
         {text ?? "Soft Button"}
      </button>
   );
}

export function IconButton({ props, text, onClick }) {

   const style = {
      width: props?.size ?? "45px",
      height: props?.size ?? "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: props?.color ?? "white",
      backgroundColor: props?.backgroundColor ?? "#444",
      borderRadius: "50%",
      border: "none",
      fontSize: props?.fontSize ?? "1.2rem",
      ...props
   };

   return (
      <button 
         style={style}
         className={styles.iconButton}
         onClick={onClick}
      >
         {text ?? "✦"}
      </button>
   );
}


