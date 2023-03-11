import styles from "./index.module.css"
import { useMediaQuery } from 'react-responsive'
import DrawCanvas from './DrawCanvas';
import Link from 'next/link';






const Post1 = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 639 });
  return (
    <>
      {isDesktop && <div className={styles.desktop}>

        <DrawCanvas />
        <Link href="/post/1" className={styles.post}>

          <h2 className={styles.title}>
            Welcome to FR App !!!!!!!!!🚀🎉🎉🎉
          </h2>
          <div className={styles.desc}>
            まずは
          </div>
          <div className={styles.postDate}>2022/01/11</div>
        </Link>
      </div>}
      {isTablet && <div className={styles.tablet}>
        <DrawCanvas />
        <Link href="/post/1" className={styles.post}>

          <h2 className={styles.title}>
            Welcome to FR App !!!!!!!!!🚀🎉🎉🎉
          </h2>
          <div className={styles.desc}>
            まずは
          </div>
          <div className={styles.postDate}>2022/01/11</div>
        </Link>
      </div>}
      {isMobile && <div className={styles.mobile}>
        <DrawCanvas />
        <Link href="/post/1" className={styles.post}>

          <h2 className={styles.title}>
            Welcome to FR App !!!!!!!!!🚀🎉🎉🎉
          </h2>
          <div className={styles.desc}>
            まずは
          </div>
          <div className={styles.postDate}>2022/01/11</div>
        </Link>
      </div>}
    </>
  )
}

export default Post1