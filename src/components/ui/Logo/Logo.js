import Link from "next/link";

import styles from "./Logo.module.sass";

export default function Logo() {
  return (
    <Link href="/" className={styles.logoWrap}>
      <div>
        <p>JASPER</p>
      </div>
    </Link>
  );
}
