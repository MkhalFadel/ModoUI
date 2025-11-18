import styles from "./sliders.module.css";

export function PrimarySlider({ props, text, value, onChange }) {

   const style = {
      backgroundColor: 'var(--primaryText)',
      accentColor: props?.accentColor ?? "#0d6efd",
      width: props?.width ?? "200px",
      height: props?.height ?? "4px",
   };

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text ?? ""}</label>}
         <input
            type="range"
            min={props?.min ?? 0}
            max={props?.max ?? 100}
            value={value}
            step={props?.step ?? 1}
            onChange={e => onChange(e)}
            style={style}
            className={styles.slider}
         />
         <span className={styles.value} style={{color: "var(--primaryText)"}}>{value}</span>
      </div>
   );
}

export function SecondarySlider({ props, text, value, onChange }) {

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text ?? ""}</label>}
         <input
            type="range"
            min={props?.min ?? 0}
            max={props?.max ?? 100}
            value={value}
            onChange={(e) => onChange(e)}
            className={`${styles.slider} ${styles.flat}`}
            style={{
               accentColor: props?.accentColor ?? "#28a745",
               width: props?.width ?? "200px",
            }}
         />
         <span className={styles.value} style={{color: "var(--primaryText)"}}>{value}</span>
      </div>
   );
}

export function GradientSlider({ props, text, value, onChange }) {
   const gradient = props?.gradient ?? "linear-gradient(90deg, #ff00cc, #3333ff)";

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text ?? ""}</label>}
         <input
            type="range"
            min={props?.min ?? 0}
            max={props?.max ?? 100}
            value={value}
            onChange={(e) => onChange(e)}
            className={`${styles.slider} ${styles.gradient}`}
            style={{
               background: gradient,
               width: props?.width ?? "200px",
            }}
         />
         <span className={styles.value} style={{color: "var(--primaryText)"}}>{value}</span>
      </div>
   );
}

export function NeonSlider({ props, text, value, onChange }) {

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text ?? ""}</label>}
         <input
            type="range"
            min={props?.min ?? 0}
            max={props?.max ?? 100}
            value={value}
            onChange={(e) => onChange(e)}
            className={`${styles.slider} ${styles.neon}`}
            style={{
               backgroundColor: 'var(--primaryText)',
               accentColor: props?.accentColor ?? "#00ffff",
               width: props?.width ?? "200px",
            }}
         />
         <span className={styles.value} style={{color: "var(--primaryText)"}}>{value}</span>
      </div>
   );
}

export function GlassSlider({ props, text, value, onChange }) {

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text ?? ""}</label>}
         <input
            type="range"
            min={props?.min ?? 0}
            max={props?.max ?? 100}
            value={value}
            onChange={(e) => onChange(e)}
            className={`${styles.slider} ${styles.glass}`}
            style={{
               backgroundColor: 'var(--primaryText)',
               accentColor: props?.accentColor ?? "#9b59b6",
               width: props?.width ?? "200px",
            }}
         />
         <span className={styles.value} style={{color: "var(--primaryText)"}}>{value}</span>
      </div>
   );
}

export function ShinySlider({ props, text, value, onChange }) {

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text}</label>}

         <input
            type="range"
            min={props?.min ?? 0}
            max={props?.max ?? 100}
            step={props?.step ?? 1}
            value={value}
            onChange={(e) => onChange(e)}
            className={`${styles.slider} ${styles.shiny}`}
            style={{
               accentColor: props?.accentColor ?? "#ff0099",
               width: props?.width ?? "220px",
            }}
         />

         <span className={styles.value}>{value}</span>
      </div>
   );
}

export function MetalSlider({ props, text, value, onChange }) {

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text}</label>}

         <input
            type="range"
            min={props?.min ?? 0}
            max={props?.max ?? 100}
            step={props?.step ?? 1}
            value={value}
            onChange={(e) => onChange(e)}
            className={`${styles.slider} ${styles.metal}`}
            style={{
               accentColor: props?.accentColor ?? "#c0c0c0",
               width: props?.width ?? "220px",
            }}
         />

         <span className={styles.value}>{value}</span>
      </div>
   );
}

export function RainbowSlider({ props, text, value, onChange }) {

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text}</label>}

         <input
            type="range"
            min={props?.min ?? 0}
            max={props?.max ?? 100}
            step={props?.step ?? 1}
            value={value}
            onChange={(e) => onChange(e)}
            className={`${styles.slider} ${styles.rainbow}`}
            style={{
               width: props?.width ?? "220px",
            }}
         />

         <span className={styles.value}>{value}</span>
      </div>
   );
}

export function ChunkySlider({ props, text, value, onChange }) {

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text}</label>}

         <input
            type="range"
            min={props?.min ?? 0}
            max={props?.max ?? 100}
            step={props?.step ?? 1}
            value={value}
            onChange={(e) => onChange(e)}
            className={`${styles.slider} ${styles.chunky}`}
            style={{
               accentColor: props?.accentColor ?? "#ff6600",
               width: props?.width ?? "220px",
            }}
         />

         <span className={styles.value}>{value}</span>
      </div>
   );
}

export function GlowNeonSlider({ props, text, value, onChange }) {

   return (
      <div className={styles.sliderContainer}>
         {text && <label className={styles.label}>{text}</label>}

         <input
            type="range"
            min={props?.min ?? 0}
            max={props?.max ?? 100}
            step={props?.step ?? 1}
            value={value}
            onChange={(e) => onChange(e)}
            className={`${styles.slider} ${styles.glowNeon}`}
            style={{
               accentColor: props?.accentColor ?? "#00ff88",
               width: props?.width ?? "220px",
            }}
         />

         <span className={styles.value}>{value}</span>
      </div>
   );
}
