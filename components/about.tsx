import { useState } from "react";
import styles from './about.module.css';

const About = (props: any) => {
    const [counter, setCounter] = useState(0);
    return (
      <>
        <p>Hello, {props.name || 'Unknown'}</p>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)} className={styles.counterButton}>Increment counter</button>
      </>
    )
}

export default About;
