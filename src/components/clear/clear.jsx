import styles from "./clear.module.css"

export default function Clear () {
    return(
        <div className={styles.a}>
            <div className={styles.b}>
                <div className={styles.a1}>
                    <div className={styles.text}></div>
                    <h1>New Arrival</h1>
                </div>
                <div className={styles.a2}>
                    <div className={styles.img}>
                        <div className={styles.b1}>
                        <img src="./q1.png" alt="" />
                        <h3>Knitted Joggers</h3>
                        </div>
                        <div className={styles.b1}>
                        <img src="./q2.png" alt="" />
                        <h3>Full Sleeve</h3>
                        </div>
                        <div className={styles.b1}>
                        <img src="./q3.png" alt="" />
                        <h3>Active T-Shirts</h3>
                        </div>
                        <div className={styles.b1}>
                        <img src="./q4.png" alt="" />
                        <h3>Urban Shirts</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}