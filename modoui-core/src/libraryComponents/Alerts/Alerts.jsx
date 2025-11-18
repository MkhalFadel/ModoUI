import styles from "./alerts.module.css";

export function PrimaryAlert({ text, props }) {
   const style = {
      backgroundColor: props?.backgroundColor ?? "#007bff22",
      color: props?.color ?? "#007bff",
      border: props?.border ?? "1px solid #007bff",
      borderRadius: props?.borderRadius ?? "8px",
      padding: props?.padding ?? "12px 16px",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "fit-content",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      ...props
   };

   return (
      <div className={styles.alert} style={style}>
         <span className={styles.icon}>ℹ️</span>
         <p className={styles.message} style={{color: props?.color ?? "var(--primaryText)"}}>{text ?? "This is a primary alert!"}</p>
      </div>
   );
}

export function SuccessAlert({ text, props }) {
   const style = {
      backgroundColor: props?.backgroundColor ?? "#28a74522",
      color: props?.color ?? "#28a745",
      border: props?.border ?? "1px solid #28a745",
      borderRadius: props?.borderRadius ?? "8px",
      padding: props?.padding ?? "12px 16px",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "fit-content",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      ...props
   };

   return (
      <div className={styles.alert} style={style}>
         <span className={styles.icon}>✅</span>
         <p className={styles.message} style={{color: props?.color ?? "var(--primaryText)"}}>{text || "Action completed successfully!"}</p>
      </div>
   );
}

// ⚠️ Warning
export function WarningAlert({ text, props }) {
   const style = {
      backgroundColor: props?.backgroundColor ?? "#ffc10722",
      color: props?.color ?? "#856404",
      border: props?.border ?? "1px solid #ffc107",
      borderRadius: props?.borderRadius ?? "8px",
      padding: props?.padding ?? "12px 16px",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "fit-content",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      ...props
   };

   return (
      <div className={styles.alert} style={style}>
         <span className={styles.icon}>⚠️</span>
         <p className={styles.message} style={{color: props?.color ?? "var(--primaryText)"}}>{text || "Be careful with this action!"}</p>
      </div>
   );
}

// ❌ Error
export function ErrorAlert({ text, props }) {
   const style = {
      backgroundColor: props?.backgroundColor ?? "#dc354522",
      color: props?.color ?? "#dc3545",
      border: props?.border ?? "1px solid #dc3545",
      borderRadius: props?.borderRadius ?? "8px",
      padding: props?.padding ?? "12px 16px",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "fit-content",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      ...props
   };

   return (
      <div className={styles.alert} style={style}>
         <span className={styles.icon}>❌</span>
         <p className={styles.message} style={{color: props?.color ?? "var(--primaryText)"}}>{text || "Something went wrong!"}</p>
      </div>
   );
}

export function InfoAlert({ text, props }) {
   const style = {
      backgroundColor: props?.backgroundColor ?? "#17a2b822",
      color: props?.color ?? "#17a2b8",
      border: props?.border ?? "1px solid #17a2b8",
      borderRadius: props?.borderRadius ?? "8px",
      padding: props?.padding ?? "12px 16px",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "fit-content",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      ...props
   };

   return (
      <div className={styles.alert} style={style}>
         <span className={styles.icon}>💡</span>
         <p className={styles.message} style={{color: props?.color ?? "var(--primaryText)"}}>{text || "Here’s some helpful information."}</p>
      </div>
   );
}

export function SecondaryAlert({ text, props }) {
   const style = {
      backgroundColor: props?.backgroundColor ?? "#6c757d22",
      color: props?.color ?? "#6c757d",
      border: props?.border ?? "1px solid #6c757d",
      borderRadius: props?.borderRadius ?? "8px",
      padding: props?.padding ?? "12px 16px",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "fit-content",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      ...props
   };

   return (
      <div className={styles.alert} style={style}>
         <span className={styles.icon}>💭</span>
         <p className={styles.message} style={{color: "var(--primaryText)"}}>{text ?? "This is a secondary alert."}</p>
      </div>
   );
}

export function DarkAlert({ text, props }) {
   const style = {
      backgroundColor: props?.backgroundColor ?? "#222",
      color: props?.color ?? "#f1f1f1",
      border: props?.border ?? "1px solid #444",
      borderRadius: props?.borderRadius ?? "8px",
      padding: props?.padding ?? "12px 16px",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "fit-content",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      ...props
   };

   return (
      <div className={styles.alert} style={style}>
         <span className={styles.icon}>🌙</span>
         <p className={styles.message}>{text ?? "Dark mode alert message."}</p>
      </div>
   );
}

export function GradientAlert({ text, props }) {
   const style = {
      background: props?.backgroundColor ?? "linear-gradient(90deg, #6a5acd, #00bcd4)",
      color: props?.color ?? "white",
      border: props?.border ?? "none",
      borderRadius: props?.borderRadius ?? "10px",
      padding: props?.padding ?? "14px 20px",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "fit-content",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      ...props
   };

   return (
      <div className={styles.alert} style={style}>
         <span className={styles.icon}>🌈</span>
         <p className={styles.message}>{text ?? "Beautiful gradient alert!"}</p>
      </div>
   );
}

export function MinimalAlert({ text, props }) {
   const style = {
      backgroundColor: props?.backgroundColor ?? "transparent",
      color: props?.color ?? "var(--primaryText)",
      border: props?.border ?? "none",
      borderLeft: props?.borderLeft ?? "4px solid #007bff",
      padding: props?.padding ?? "10px 14px",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "fit-content",
      display: "flex",
      alignItems: "center",
      ...props
   };

   return (
      <div className={styles.alert} style={style}>
         <p className={styles.message} style={{color: "var(--primaryText)"}}>{text ?? "Minimal alert message."}</p>
      </div>
   );
}

export function GlassAlert({ text, props }) {
   const style = {
      backgroundColor: props?.backgroundColor ?? "rgba(255, 255, 255, 0.2)",
      color: props?.color ?? "#000",
      border: props?.border ?? "1px solid var(--primaryText)",
      backdropFilter: "blur(8px)",
      borderRadius: props?.borderRadius ?? "12px",
      padding: props?.padding ?? "14px 18px",
      fontSize: props?.fontSize ?? "1rem",
      width: props?.width ?? "fit-content",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      ...props
   };

   return (
      <div className={styles.alert} style={style}>
         <span className={styles.icon}>🧊</span>
         <p className={styles.message} style={{color: "var(--primaryText)"}}>{text ?? "Frosted Glass Alert."}</p>
      </div>
   );
}

