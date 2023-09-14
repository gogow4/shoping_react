import styles from "./grey.module.css"

export default function Grey () {
    return(
        <div className={styles.a}>
            <div className={styles.b}>
                <div className={styles.a1}>
                    <h1>Top Brands Deal</h1>
                    <span>Up To <span className={styles.cc}>60%</span>   off on brands</span>
                </div>
                <div className={styles.a2}>
                    <div className={styles.b1}>
                        <img src="./gray/a7.png" alt="" />
                    </div>
                    <div className={styles.b1}>
                        <img src="./gray/a8.png" alt="" />
                    </div>
                    <div className={styles.b1}>
                        <img src="./gray/a9.png" alt="" />
                    </div>
                    <div className={styles.b1}>
                        <img src="./gray/a10.png" alt="" />
                    </div>
                    <div className={styles.b1}>
                        <img src="./gray/a11.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}