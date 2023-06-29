import { Banner } from "@/components/common/Banner";

import styles from "@/styles/app/blog.module.sass";

export default function BlogPage(params) {
  return (
    <div>
      <Banner>
        <div className={styles.imgBox}>
          <img src="https://picsum.photos/1920/400?random=18" alt="" />
        </div>
        <div className={styles.infoBox}>
          <h2 className={styles.title}>Blog</h2>
        </div>
      </Banner>
    </div>
  );
}
