import styles from './Banner.module.sass';

import { BannerSwiper } from '@/components/landing/Banner';

export default function Banner() {
    return (
      <div className={styles.banner}>
        <div className={styles.container}>
          <BannerSwiper />
        </div>
      </div>
    )
}