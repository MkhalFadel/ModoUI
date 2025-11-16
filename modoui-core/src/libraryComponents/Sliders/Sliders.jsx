import { useState } from "react";
import styles from "./sliders.module.css";

export function PrimarySlider({ props, text, value, onChange }) {
   const [userValue, setUserValue] = useState(value || 50)

   function handleChange(e)
   {
      const newValue = e.target.value;
      setUserValue(newValue);
      onChange(newValue);
   }

   const style = {
      backgroundColor: 'var(--primaryText)',
      accentColor: props.accentColor || "#0d6efd",
      width: props.width || "200px",
      height: props.height || "4px",
   };

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text}</label>}
         <input
            type="range"
            min={props.min || 0}
            max={props.max || 100}
            value={userValue}
            step={props.step || 1}
            onChange={e => handleChange(e)}
            style={style}
            className={styles.slider}
         />
         <span className={styles.value} style={{color: "var(--primaryText)"}}>{userValue}</span>
      </div>
   );
}

export function SecondarySlider({ props, text, value, onChange }) {
   const [userValue, setUserValue] = useState(value || 50)

   function handleChange(e)
   {
      const newValue = e.target.value;
      setUserValue(newValue);
      onChange(newValue);
   }

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text}</label>}
         <input
            type="range"
            min={props.min || 0}
            max={props.max || 100}
            value={userValue}
            onChange={(e) => handleChange(e)}
            className={`${styles.slider} ${styles.flat}`}
            style={{
               accentColor: props.accentColor || "#28a745",
               width: props.width || "200px",
            }}
         />
         <span className={styles.value} style={{color: "var(--primaryText)"}}>{userValue}</span>
      </div>
   );
}

export function GradientSlider({ props, text, value, onChange }) {
   const [userValue, setUserValue] = useState(value || 50)

   function handleChange(e)
   {
      const newValue = e.target.value;
      setUserValue(newValue);
      onChange(newValue);
   }

   const gradient = props.gradient || "linear-gradient(90deg, #ff00cc, #3333ff)";

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text}</label>}
         <input
            type="range"
            min={props.min || 0}
            max={props.max || 100}
            value={userValue}
            onChange={(e) => handleChange(e)}
            className={`${styles.slider} ${styles.gradient}`}
            style={{
               background: gradient,
               width: props.width || "200px",
            }}
         />
         <span className={styles.value} style={{color: "var(--primaryText)"}}>{userValue}</span>
      </div>
   );
}

export function NeonSlider({ props, text, value, onChange }) {
   const [userValue, setUserValue] = useState(value || 50)

   function handleChange(e)
   {
      const newValue = e.target.value;
      setUserValue(newValue);
      onChange(newValue);
   }

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text}</label>}
         <input
            type="range"
            min={props.min || 0}
            max={props.max || 100}
            value={userValue}
            onChange={(e) => handleChange(e)}
            className={`${styles.slider} ${styles.neon}`}
            style={{
               backgroundColor: 'var(--primaryText)',
               accentColor: props.accentColor || "#00ffff",
               width: props.width || "200px",
            }}
         />
         <span className={styles.value} style={{color: "var(--primaryText)"}}>{userValue}</span>
      </div>
   );
}

export function GlassSlider({ props, text, value, onChange }) {
   const [userValue, setUserValue] = useState(value|| 50);

   function handleChange(e)
   {
      const newValue = e.target.value;
      setUserValue(newValue);
      onChange(newValue);
   }

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text}</label>}
         <input
            type="range"
            min={props.min || 0}
            max={props.max || 100}
            value={userValue}
            onChange={(e) => handleChange(e)}
            className={`${styles.slider} ${styles.glass}`}
            style={{
               backgroundColor: 'var(--primaryText)',
               accentColor: props.accentColor || "#9b59b6",
               width: props.width || "200px",
            }}
         />
         <span className={styles.value} style={{color: "var(--primaryText)"}}>{userValue}</span>
      </div>
   );
}