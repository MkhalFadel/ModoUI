import styles from './loaders.module.css';
import { useEffect } from 'react';

export function CircleLoader({ mainColor, secondaryColor, borderStyle, setType }) {
   setType && setType("loader");
   return (
      <div
         className={styles.circleLoader}
         style={{
         borderTop: `5px solid ${mainColor}`,
         borderRight: `5px solid ${secondaryColor}`,
         borderLeft: `5px solid ${secondaryColor}`,
         borderBottom: `5px solid ${secondaryColor}`,
         borderStyle: borderStyle,
      }}
      ></div>
   );
}

export function DualRingLoader({ mainColor, secondaryColor, borderStyle, setType }) {
   setType && setType("loader"); 
   return (
      <div className={styles.dualRing}>
         <div
            style={{
               borderTopColor: mainColor,
               borderStyle: borderStyle,
               borderColor: secondaryColor,
            }}
         ></div>
      </div>
);
}

export function DotPulseLoader({ mainColor, secondaryColor, borderStyle, setType }) {
   setType && setType("loader");
   return (
      <div className={styles.dotPulse}>
         <div style={{ backgroundColor: mainColor }}></div>
         <div style={{ backgroundColor: secondaryColor }}></div>
         <div style={{ backgroundColor: mainColor }}></div>
      </div>
);
}

export function BarLoader({ mainColor, secondaryColor, borderStyle, setType }) {
   setType && setType("loader");
   return (
      <div className={styles.barContainer}>
         <div style={{ backgroundColor: mainColor, borderStyle }}></div>
         <div style={{ backgroundColor: secondaryColor, borderStyle }}></div>
         <div style={{ backgroundColor: mainColor, borderStyle }}></div>
      </div>
   );
}

export function BounceLoader({ mainColor, secondaryColor, borderStyle, setType }) {
   setType && setType("loader");
   return (
      <div className={styles.bounce}>
         <div style={{ backgroundColor: mainColor }}></div>
         <div style={{ backgroundColor: secondaryColor }}></div>
         <div style={{ backgroundColor: mainColor }}></div>
         <div style={{ backgroundColor: secondaryColor }}></div>
      </div>
   );
}
