import Link from "next/link";
import styles from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from  "@mui/icons-material/ShoppingCartOutlined";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
          <img src="/aa.png" alt="" />
          </Link>
        </div>

        <ul>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="https://ru.xhadult3.com">Men</Link>
          </li>
          <li>
            <Link href="/women">Women</Link>
          </li>
          <li>
            <Link href="/">Combos</Link>
          </li>
          <li>
            <Link href="/">Joggers</Link>
          </li>
        </ul>

        <div className={styles.search}>
          <SearchIcon className={styles.icon} />
          <input type="text" placeholder="Search" />
        </div>

        <div className={styles.icons}>
          <div>
            <FavoriteBorderIcon className={styles.icon} />
          </div>
          <div>
            <PersonOutlineIcon className={styles.icon} />
          </div>
          <div>
            <Link href="/taza">
              <ShoppingCartOutlinedIcon className={styles.icon} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
