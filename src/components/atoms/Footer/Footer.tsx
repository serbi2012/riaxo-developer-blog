import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Developer Blog. All rights reserved.
    </footer>
  );
};

export default Footer;
