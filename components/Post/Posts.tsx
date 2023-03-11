import styles from "./Posts.module.css"
import { useMediaQuery } from 'react-responsive'
import Post1 from "./2022_3_11"
import { Post2 } from "./2022_03_12"

const Posts = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 700, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 699 });
  return (
    <>
      {isDesktop &&
        <div className={styles.posts}>
          <h1 className={styles.title}>New Post</h1>
          <div className={styles.postList}>
            {/* <Post2 /> */}
            {/* <div className={styles.border2} /> */}
            <div className={styles.cardDesktop} >
              <Post1 />

            </div>
            <div className={styles.borderDesktop} />
          </div>
        </div>
      }

      {isTablet &&
        <div className={styles.posts}>
          <h1 className={styles.title}>New Post</h1>
          <div className={styles.postList}>
            {/* <Post2 /> */}
            <div className={styles.cardTablet} >
              <Post1 />

            </div>
            <div className={styles.borderTablet} />
          </div>
        </div>
      }

      {isMobile &&
        <div className={styles.posts}>
          <h1 className={styles.title}>New Post</h1>
          <div className={styles.postList}>
            {/* <Post2 /> */}
            <div className={styles.cardMobile} >
              <Post1 />
            </div>
            <div className={styles.borderMobile} />
          </div>
        </div>
      }

    </>
  )
}

export default Posts