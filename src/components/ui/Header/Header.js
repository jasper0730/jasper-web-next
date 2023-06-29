import { Logo, Navigation } from "@/components/ui";

import styles from "./Header.module.sass";

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Logo />
        <Navigation />
      </div>
    </nav>
  );
}
