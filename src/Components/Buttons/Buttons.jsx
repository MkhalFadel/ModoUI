import { useEffect } from "react";
import styles from "./buttons.module.css";

export function PrimaryButton({ fontColor, fontSize, backgroundColor, text, setType }) {
   useEffect(() => setType("button"), [setType]);

   const style = {
      color: fontColor,
      fontSize,
      backgroundColor,
      border: "none",
   };

   return <button style={style} className={styles.primary}>{text}</button>;
}

export function OutlineButton({ fontColor, fontSize, backgroundColor, text, setType }) {
   useEffect(() => setType("button"), [setType]);

   const style = {
      color: fontColor,
      fontSize,
      backgroundColor: "transparent",
      border: `2px solid ${backgroundColor}`,
   };

   return <button style={style} className={styles.outline}>{text}</button>;
}

export function GradientButton({ fontColor, fontSize, backgroundColor, text, setType }) {
   useEffect(() => setType("button"), [setType]);

   const style = {
      color: fontColor,
      fontSize,
      backgroundImage: `linear-gradient(45deg, ${backgroundColor}, #4b0082)`,
      border: "none",
   };

   return <button style={style} className={styles.gradient}>{text}</button>;
}

export function GlassButton({ fontColor, fontSize, backgroundColor, text, setType }) {
   useEffect(() => setType("button"), [setType]);

   const style = {
      color: fontColor,
      fontSize,
      backgroundColor: backgroundColor + "33", // transparent tint
      border: "1px solid rgba(255, 255, 255, 0.3)",
      backdropFilter: "blur(8px)",
   };

   return <button style={style} className={styles.glass}>{text}</button>;
}
