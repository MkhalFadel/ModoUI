import styles from './loaders.module.css';

export function CircleLoader({ props }) {
   
   const styles = {
      borderTop: props.borderTop || `5px solid black`,
      borderRight: props.borderRight ||`5px solid white`,
      borderBottom: props.borderBottom ||`5px solid white`,
      borderLeft: props.borderLeft ||`5px solid white`,
      borderStyle: props.borderStyle ||'solid'
   }
   
   return (
      <div
         className={styles.circleLoader}
         style={styles}
      ></div>
   );
}

export function DualRingLoader({ props }) { 
  
   const styles = {
      borderTop: props.borderTop || `5px solid black`,
      borderRight: props.borderRight ||`5px solid white`,
      borderBottom: props.borderBottom ||`5px solid white`,
      borderLeft: props.borderLeft ||`5px solid white`,
      borderStyle: props.borderStyle ||'solid'
   }

   return (
      <div className={styles.dualRing}>
         <div
            style={styles}
         ></div>
      </div>
);
}

export function DotPulseLoader({ props }) {
   
   const styles = {
      borderTop: props.borderTop || `5px solid black`,
      borderRight: props.borderRight ||`5px solid white`,
      borderBottom: props.borderBottom ||`5px solid white`,
      borderLeft: props.borderLeft ||`5px solid white`,
      borderStyle: props.borderStyle ||'solid'
   }
   
   return (
      <div className={styles.dotPulse}>
         <div style={styles}></div>
         <div style={styles}></div>
         <div style={styles}></div>
      </div>
);
}

export function BarLoader({ props }) {
  
   const styles = {
      borderTop: props.borderTop || `5px solid black`,
      borderRight: props.borderRight ||`5px solid white`,
      borderBottom: props.borderBottom ||`5px solid white`,
      borderLeft: props.borderLeft ||`5px solid white`,
      borderStyle: props.borderStyle ||'solid'
   }
  
   return (
      <div className={styles.barContainer}>
         <div style={styles}></div>
         <div style={styles}></div>
         <div style={styles}></div>
      </div>
   );
}

export function BounceLoader({ props }) {
   
   const styles = {
      borderTop: props.borderTop || `5px solid black`,
      borderRight: props.borderRight ||`5px solid white`,
      borderBottom: props.borderBottom ||`5px solid white`,
      borderLeft: props.borderLeft ||`5px solid white`,
      borderStyle: props.borderStyle ||'solid'
   }
   
   return (
      <div className={styles.bounce}>
         <div style={styles}></div>
         <div style={styles}></div>
         <div style={styles}></div>
         <div style={styles}></div>
      </div>
   );
}
