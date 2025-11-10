import styles from './loaders.module.css';

export function CircleLoader({ props }) {
   
   const defaults = {
      borderTop: props.borderTop || '5px solid blue',
      borderRight: props.borderRight ||'5px solid #14191fff',
      borderBottom: props.borderBottom ||'5px solid #14191fff',
      borderLeft: props.borderLeft ||'5px solid #14191fff',
      borderStyle: props.borderStyle ||'solid'
   }
   
   return (
      <div
         className={styles.circleLoader}
         style={defaults}
      ></div>
   );
}

export function DottedLoader({ props }) {
   
   const defaults = {
      borderTop: props.borderTop || '5px solid blue',
      borderRight: props.borderRight ||'5px solid red',
      borderBottom: props.borderBottom ||'5px solid red',
      borderLeft: props.borderLeft ||'5px solid red',
      borderStyle: props.borderStyle ||'dotted',
   }
   
   return (
      <div
         className={styles.dottedLoader}
         style={defaults}
      ></div>
   );
}

export function DualRingLoader({ props }) { 
   const outerStyle = {
      borderTop: props.borderTop || "5px solid black",
      borderRight: "5px solid transparent",
      borderBottom: props.borderBottom || "5px solid black",
      borderLeft: "5px solid transparent",
      borderStyle: props.borderStyle || "solid"
   };

   const innerStyle = {
      borderTop: "5px solid transparent",
      borderRight: props.borderRight || "5px solid blue",
      borderBottom: "5px solid transparent",
      borderLeft: props.borderLeft || "5px solid blue",
      borderStyle: props.borderStyle || "solid"
   };

   return (
      <div className={styles.dualRingWrapper}>
         <div className={styles.outerRing} style={outerStyle}></div>
         <div className={styles.innerRing} style={innerStyle}></div>
      </div>
   );
}


export function DotPulseLoader({ props }) {
   
   const defaults = {
      border: props.border || `5px solid blue`,
      backgroundColor: props.backgroundColor || 'blue',
      borderStyle: props.borderStyle ||'solid'
   }
   
   return (
      <div className={styles.dotPulse}>
         <div style={defaults}></div>
         <div style={defaults}></div>
         <div style={defaults}></div>
      </div>
);
}

export function BarLoader({ props }) {
   const defaults = {
      border: props.border || `5px solid red`,
      backgroundColor: props.backgroundColor || 'red',
      borderStyle: props.borderStyle ||'solid'
   }

   return (
      <div className={styles.barContainer}>
         <div style={defaults}></div>
         <div style={defaults}></div>
         <div style={defaults}></div>
      </div>
   );
}

export function BounceLoader({ props }) {
   
   const defaults = {
      border: props.border || `5px solid yellow`,
      backgroundColor: props.backgroundColor || 'yellow',
      borderStyle: props.borderStyle ||'solid'
   }
   
   return (
      <div className={styles.bounce}>
         <div style={defaults}></div>
         <div style={defaults}></div>
         <div style={defaults}></div>
         <div style={defaults}></div>
      </div>
   );
}
