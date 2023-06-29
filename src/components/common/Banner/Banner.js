import styles from "./Banner.module.sass";

export default function Banner({ children, classname }) {
  return (
    <div className={`${styles.banner} ${classname}`}>
      <div className={styles.imgBox}>{children}</div>
      <div className={styles.infoBox}>{children}</div>
    </div>
  );
}
