import { useState } from "react";
import styles from "./sliders.module.css";

export function PrimarySlider({ props, text}) {
   const [value, setValue] = useState(props.defaultValue || 50);

   const handleChange = (e) => {
      setValue(e.target.value);
      if (props.onChange) props.onChange(e);
   };

   const style = {
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
            value={value}
            step={props.step || 1}
            onChange={handleChange}
            style={style}
            className={styles.slider}
         />
         <span className={styles.value}>{value}</span>
      </div>
   );
}

export function SecondarySlider({ props, text }) {
   const [value, setValue] = useState(props.defaultValue || 50);

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text}</label>}
         <input
            type="range"
            min={props.min || 0}
            max={props.max || 100}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`${styles.slider} ${styles.flat}`}
            style={{
               accentColor: props.accentColor || "#28a745",
               width: props.width || "200px",
            }}
         />
         <span className={styles.value}>{value}</span>
      </div>
   );
}

export function GradientSlider({ props, text }) {
   const [value, setValue] = useState(props.defaultValue || 30);

   const gradient = props.gradient || "linear-gradient(90deg, #ff00cc, #3333ff)";

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text}</label>}
         <input
            type="range"
            min={props.min || 0}
            max={props.max || 100}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`${styles.slider} ${styles.gradient}`}
            style={{
               background: gradient,
               width: props.width || "200px",
            }}
         />
         <span className={styles.value}>{value}</span>
      </div>
   );
}

export function NeonSlider({ props, text }) {
   const [value, setValue] = useState(props.defaultValue || 70);

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text}</label>}
         <input
            type="range"
            min={props.min || 0}
            max={props.max || 100}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`${styles.slider} ${styles.neon}`}
            style={{
               accentColor: props.accentColor || "#00ffff",
               width: props.width || "200px",
            }}
         />
         <span className={styles.value}>{value}</span>
      </div>
   );
}

export function GlassSlider({ props, text }) {
   const [value, setValue] = useState(props.defaultValue || 45);

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text}</label>}
         <input
            type="range"
            min={props.min || 0}
            max={props.max || 100}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`${styles.slider} ${styles.glass}`}
            style={{
               accentColor: props.accentColor || "#9b59b6",
               width: props.width || "200px",
            }}
         />
         <span className={styles.value}>{value}</span>
      </div>
   );
}