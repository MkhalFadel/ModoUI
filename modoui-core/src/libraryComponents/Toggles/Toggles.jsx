import { useState } from "react";
import styles from "./toggles.module.css";

export function PrimaryToggle({ props = {}, label = "Dark mode", checked, onChange }) {
   const isControlled = checked !== undefined;
   const [internal, setInternal] = useState(false);
   const isOn = isControlled ? checked : internal;

   const handleToggle = () => {
      const newValue = !isOn;
      if (!isControlled) setInternal(newValue);
      if (onChange) onChange(newValue);
   };

   const style = {
      backgroundColor: isOn
         ? props.activeColor || "#007bff"
         : props.inactiveColor || "#555",
      width: props.width || "50px",
      height: props.height || "26px",
      borderRadius: props.borderRadius || "20px",
      cursor: "pointer",
   };

   return (
      <label className={styles.toggleContainer}>
         <div className={styles.toggleTrack} style={style} onClick={handleToggle}>
         <  div
               className={`${styles.toggleThumb} ${isOn ? styles.active : ""}`}
               style={{
                  backgroundColor: props.thumbColor || "white",
                  width: props.thumbSize || "20px",
                  height: props.thumbSize || "20px",
               }}
            />
         </div>
         {label && <span className={styles.label} style={{color: "var(--primaryText)"}}>{label}</span>}
         </label>
      );
}

export function PrimaryCheckbox({ props = {}, label = "Checkbox", checked, onChange }) {
   const isControlled = checked !== undefined;
   const [internal, setInternal] = useState(false);
   const isChecked = isControlled ? checked : internal;

   const handleCheck = () => {
      const newValue = !isChecked;
      if (!isControlled) setInternal(newValue);
      if (onChange) onChange(newValue);
   };

   const style = {
      width: props.size || "20px",
      height: props.size || "20px",
      border: props.border || "2px solid #ccc",
      backgroundColor: isChecked
      ? props.activeColor || "#007bff"
      : props.inactiveColor || "transparent",
      borderRadius: props.borderRadius || "4px",
      cursor: "pointer",
   };

   return (
      <label className={styles.checkboxContainer}>
         <div
         className={`${styles.checkboxBox} ${isChecked ? styles.checked : ""}`}
         style={style}
         onClick={handleCheck}
         >
         {isChecked && <span className={styles.checkmark}>✓</span>}
         </div>
         {label && <span className={styles.label} style={{color: "var(--primaryText)"}}>{label}</span>}
      </label>
   );
}

export function PrimaryRadio({ props = {}, label = "Option", checked, onChange, name }) {
   const isControlled = checked !== undefined;
   const [internal, setInternal] = useState(false);
   const isSelected = isControlled ? checked : internal;

   const handleSelect = () => {
   const newValue = true;
      if (!isControlled) setInternal(newValue);
      if (onChange) onChange(newValue);
   };

   const outerStyle = {
      width: props.size || "20px",
      height: props.size || "20px",
      borderRadius: "50%",
      border: props.border || "2px solid #ccc",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: isSelected
      ? props.activeColor || "#007bff"
      : props.inactiveColor || "transparent",
      cursor: "pointer",
   };

   const innerStyle = {
      width: props.innerSize || "10px",
      height: props.innerSize || "10px",
      borderRadius: "50%",
      backgroundColor: props.innerColor || "#fff",
   };

   return (
      <label className={styles.radioContainer}>
      <div 
         name={name}
         className={styles.radioOuter} 
         onClick={handleSelect} 
         style={outerStyle}
      >
      {isSelected && <div className={styles.radioInner} style={innerStyle} />}
      </div>

      {label && <span className={styles.label} style={{color: "var(--primaryText)"}}>{label}</span>}
      </label>
   );
}
