import Marquee from "react-fast-marquee";
import styles from "./MarqueeMobile.module.css";

function MarqueeMobile() {
    return (
        <Marquee >
            <div className={styles.container}>
                <span className={styles.text}>nomore</span>
                <span className={styles.text}>n</span>
                <span className={styles.text}>m</span>
                <span className={styles.text}>re</span>
                <span className={styles.text}>nm</span>
            </div>
        </Marquee>
    );
}

export default MarqueeMobile;