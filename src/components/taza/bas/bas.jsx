import styles from "./bas.module.css"
export default function Bas() {
    return (
        <div className={styles.a}>
            <div className={styles.b}>
                <div className={styles.a1}>
                    <p>Home</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="12" viewBox="0 0 5 12" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.157568 10.9358C-0.0436482 10.7467 -0.0534543 10.4302 0.135666 10.229L3.92592 6.19633C4.02469 6.09124 4.02469 5.90878 3.92592 5.8037L0.135667 1.77102C-0.0534536 1.5698 -0.0436474 1.25337 0.157569 1.06425C0.358786 0.875128 0.675216 0.884934 0.864336 1.08615L4.65459 5.11883C5.11514 5.60883 5.11514 6.39119 4.65459 6.88119L0.864336 10.9139C0.675215 11.1151 0.358785 11.1249 0.157568 10.9358Z" fill="#807D7E" />
                    </svg>
                    <h4>Add To Cart</h4>
                </div>
                <div className={styles.a2}>
                    <p>Please fill in the fields below and click place order to complete your purchase!</p>
                    <span>Already registered? <span className={styles.cc}>Please login here</span></span>
                </div>
            </div>
            <div className={styles.a3}>
                    <div className={styles.tex}>
                        <h3>Product Details</h3>
                    </div>
                    <div className={styles.ull}>
                        <ul>
                            <li>PRISE</li>
                            <li>QUANTITY</li>
                            <li>SHIPPING</li>
                            <li>SUBTOTAL</li>
                            <li>ACTION</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}