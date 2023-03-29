import React from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <Link href="/" className={styles.navLink}>
        Home
      </Link>
      <Link href="/about" className={styles.navLink}>
        About
      </Link>
      <Link href="/contact" className={styles.navLink}>
        Contact
      </Link>
    </nav>
  );
};

export default Navigation;
