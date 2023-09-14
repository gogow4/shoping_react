import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.a}>
      <div className={styles.left}>
        <span>T-shirt / Tops</span>
        <h1>Summer Value Pack</h1>
        <p>cool / colorful / comfy</p>
        <button>Shop Now</button>
      </div>
      </div>
    </div>
  );
}
