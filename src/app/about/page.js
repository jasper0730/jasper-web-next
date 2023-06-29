import { Banner } from "@/components/common/Banner";
import styles from "@/components/common/Banner/Banner.module.sass";

export default function AboutPage(params) {
  return (
    <div>
      <Banner>
        <div className={styles.imgBox}>
          <img src="https://picsum.photos/1920/400?random=17" alt="" />
        </div>
        <div className={styles.infoBox}>
          <h2 className={styles.title}>About</h2>
        </div>
      </Banner>
    </div>
  );
}
