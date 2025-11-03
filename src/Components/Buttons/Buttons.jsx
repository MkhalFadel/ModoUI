import { useEffect } from "react";
import styles from "./buttons.module.css";

export function PrimaryButton({ props, text }) {

   const style = {
      color: props.color || "white",
      backgroundColor: props.Background || "black",
      border: "none",
   };

   return <button style={style} className={styles.primary}>{text}</button>;
}

export function OutlineButton({ props, text }) {

   const style = {
      color: 'var(--primaryText)',
      backgroundColor: props.backgroundColor || "transparent",
      border: `2px solid ${props.backgroundColor}`,
   };

   return <button style={style} className={styles.outline}>{text}</button>;
}

export function GradientButton({ props, text }) {

   const style = {
      color: props.color || "white",
      backgroundImage: `linear-gradient(45deg, ${props.backgroundColor || "black"}, #4b0082)`,
      border: "none",
   };

   return <button style={style} className={styles.gradient}>{text}</button>;
}

export function GlassButton({ props, text }) {

   const style = {
      color: props.color || "white",
      backgroundColor: props.backgroundColor || + "33", // transparent tint
      border: "1px solid rgba(255, 255, 255, 0.3)",
      backdropFilter: "blur(8px)",
   };

   return <button style={style} className={styles.glass}>{text}</button>;
}
