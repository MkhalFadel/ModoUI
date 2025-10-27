import React, { useState } from "react";
import styles from "./toggles.module.css";

export function PrimaryToggle({ props, label = "Dark mode" }) {
   const [isOn, setIsOn] = useState(false);

   const handleToggle = () => setIsOn(!isOn);

   const style = {
      backgroundColor: isOn
         ? props.activeColor || "#007bff"
         : props.inactiveColor || "#555",
      width: props.width || "50px",
      height: props.height || "26px",
      borderRadius: props.borderRadius || "20px",
   };

   return (
      <label className={styles.toggleContainer}>
         <div className={styles.toggleTrack} style={style} onClick={handleToggle}>
            <div
               className={`${styles.toggleThumb} ${isOn ? styles.active : ""}`}
               style={{
                  backgroundColor: props.thumbColor || "white",
                  width: props.thumbSize || "20px",
                  height: props.thumbSize || "20px",
               }}
            />
         </div>
         {label && <span className={styles.label}>{label}</span>}
      </label>
   );
}

export function PrimaryCheckbox({ props, label = "Cehckbox" }) {
   const [checked, setChecked] = useState(false);

   const handleCheck = () => setChecked(!checked);

   const style = {
      width: props.size || "20px",
      height: props.size || "20px",
      border: props.border || "2px solid #ccc",
      backgroundColor: checked
         ? props.activeColor || "#007bff"
         : props.inactiveColor || "transparent",
      borderRadius: props.borderRadius || "4px",
   };

   return (
      <label className={styles.checkboxContainer}>
         <div
            className={`${styles.checkboxBox} ${checked ? styles.checked : ""}`}
            onClick={handleCheck}
            style={style}
         >
            {checked && <span className={styles.checkmark}>✓</span>}
         </div>
         {label && <span className={styles.label}>{label}</span>}
      </label>
   );
}

export function PrimaryRadio({ props, label = "Accept" }) {
   const [selected, setSelected] = useState(false);

   const handleSelect = () => setSelected(true);

   const style = {
      width: props.size || "20px",
      height: props.size || "20px",
      border: props.border || "2px solid #ccc",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: selected
         ? props.activeColor || "#007bff"
         : props.inactiveColor || "transparent",
   };

   return (
      <label className={styles.radioContainer}>
         <div className={styles.radioOuter} onClick={handleSelect} style={style}>
            {selected && (
               <div
                  className={styles.radioInner}
                  style={{
                     width: props.innerSize || "10px",
                     height: props.innerSize || "10px",
                     backgroundColor: props.innerColor || "#fff",
                  }}
               />
            )}
         </div>
         {label && <span className={styles.label}>{label}</span>}
      </label>
   );
}
