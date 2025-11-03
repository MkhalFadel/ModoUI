import styles from "./alerts.module.css";

export function PrimaryAlert({ text, props }) {
   const style = {
      backgroundColor: props.backgroundColor || "#007bff22",
      color: props.color || "#007bff",
      border: props.border || "1px solid #007bff",
      borderRadius: props.borderRadius || "8px",
      padding: props.padding || "12px 16px",
      fontSize: props.fontSize || "1rem",
      width: props.width || "fit-content",
      display: "flex",
      alignItems: "center",
      gap: "10px",
   };

   return (
      <div className={styles.alert} style={style}>
         <span className={styles.icon}>ℹ️</span>
         <p className={styles.message} style={{color: "var(--primaryText)"}}>{text || "This is a primary alert!"}</p>
      </div>
   );
}

export function SuccessAlert({ text, props }) {
   const style = {
      backgroundColor: props.backgroundColor || "#28a74522",
      color: props.color || "#28a745",
      border: props.border || "1px solid #28a745",
      borderRadius: props.borderRadius || "8px",
      padding: props.padding || "12px 16px",
      fontSize: props.fontSize || "1rem",
      width: props.width || "fit-content",
      display: "flex",
      alignItems: "center",
      gap: "10px",
   };

   return (
      <div className={styles.alert} style={style}>
         <span className={styles.icon}>✅</span>
         <p className={styles.message} style={{color: "var(--primaryText)"}}>{text || "Action completed successfully!"}</p>
      </div>
   );
}

// ⚠️ Warning
export function WarningAlert({ text, props }) {
   const style = {
      backgroundColor: props.backgroundColor || "#ffc10722",
      color: props.color || "#856404",
      border: props.border || "1px solid #ffc107",
      borderRadius: props.borderRadius || "8px",
      padding: props.padding || "12px 16px",
      fontSize: props.fontSize || "1rem",
      width: props.width || "fit-content",
      display: "flex",
      alignItems: "center",
      gap: "10px",
   };

   return (
      <div className={styles.alert} style={style}>
         <span className={styles.icon}>⚠️</span>
         <p className={styles.message} style={{color: "var(--primaryText)"}}>{text || "Be careful with this action!"}</p>
      </div>
   );
}

// ❌ Error
export function ErrorAlert({ text, props }) {
   const style = {
      backgroundColor: props.backgroundColor || "#dc354522",
      color: props.color || "#dc3545",
      border: props.border || "1px solid #dc3545",
      borderRadius: props.borderRadius || "8px",
      padding: props.padding || "12px 16px",
      fontSize: props.fontSize || "1rem",
      width: props.width || "fit-content",
      display: "flex",
      alignItems: "center",
      gap: "10px",
   };

   return (
      <div className={styles.alert} style={style}>
         <span className={styles.icon}>❌</span>
         <p className={styles.message} style={{color: "var(--primaryText)"}}>{text || "Something went wrong!"}</p>
      </div>
   );
}

export function InfoAlert({ text, props }) {
   const style = {
      backgroundColor: props.backgroundColor || "#17a2b822",
      color: props.color || "#17a2b8",
      border: props.border || "1px solid #17a2b8",
      borderRadius: props.borderRadius || "8px",
      padding: props.padding || "12px 16px",
      fontSize: props.fontSize || "1rem",
      width: props.width || "fit-content",
      display: "flex",
      alignItems: "center",
      gap: "10px",
   };

   return (
      <div className={styles.alert} style={style}>
         <span className={styles.icon}>💡</span>
         <p className={styles.message} style={{color: "var(--primaryText)"}}>{text || "Here’s some helpful information."}</p>
      </div>
   );
}
