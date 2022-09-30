import Image from "next/image";
import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <div className="mr-32 ">
          <Image src="/images/logo.png" width="36" height="36" />
          <p className="font-extrabold ml-2">modal.cards</p>
        </div>
        <nav>
          <ul>
            <li>Solutions</li>
            <li>Product Tour</li>
            <li>Showcase</li>
            <li>Pricing</li>
          </ul>
        </nav>
      </div>
      <div>
        <button>Sign in</button>
        <button className={styles.btn__primary}>Try for free</button>
      </div>
    </div>
  );
}

export default Navbar;
