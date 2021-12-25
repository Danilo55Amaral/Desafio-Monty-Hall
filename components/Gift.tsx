// Componente responsável em formar o presente 

import styles from "../styles/Gift.module.css";

export default function Gift() {
    return (
        <div className={styles.gift}>
            <div className={styles.cover}></div>
            <div className={styles.body}></div>
            <div className={styles.tape1}></div>
            <div className={styles.tape2}></div>
        </div>
    );
}