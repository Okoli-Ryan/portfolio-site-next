import React from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="/">
        <a>Okoli Ugochukwu</a>
      </Link>
      <div className={styles.contact_list}>
        <Link href="https://github.com/Okoli-Ryan">
          <a>Github</a>
        </Link>
        <Link href="https://linkedin.com/in/okoliugo">
          <a>Linkedin</a>
        </Link>
        <Link href="mailto:okoliryan50@gmail.com">
          <a>Email</a>
        </Link>
      </div>
    </div>
  );
}
