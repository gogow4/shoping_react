import { DriveFileMove } from "@mui/icons-material"
import styles from "./axr.module.css"
export default function Axr() {
    return(
        <div className={styles.a}>
            <div className={styles.b}>
                <div className={styles.a1}>
                    <h2>Discount  Codes</h2>
                    <p>Enter your coupon code if you have one</p>
                    <div className={styles.in}>
                        <input type="text" />
                        <button>Apply Coupon</button>
                    </div>
                    <button className={styles.bt}>Continue Shopping</button>
                </div>
                <div className={styles.a2}>
                    <div className={styles.tx}>
                        <div className={styles.x1}>
                            <p>Sub Total </p>
                            <p>Shipping</p>
                        </div>
                        <div className={styles.x1}>
                            <p>$513.00</p>
                            <p>$5.00</p>
                        </div>
                    </div>
                    <div className={styles.z}>
                        <h3>Grand Total</h3>
                        <h3>$518.00</h3>
                    </div>
                    <div className={styles.x}>
                        <button>Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}