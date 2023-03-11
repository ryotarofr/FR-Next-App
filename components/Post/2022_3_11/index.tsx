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
        <div className={styles.post}>

          <h2 className={styles.title}>
            タイトル
          </h2>
          <div className={styles.desc}>
            文がいくつか集まり、かつ、まとまった内容を表すもの。内容のうえで前の文と密接な関係をもつと考えられる文は、そのまま続いて書き継がれ、前の文と隔たりが意識されたとき、次の文は行を改めて書かれる。
          </div>
        </div>
      </div>}
      {isMobile && <div className={styles.mobile}>
        <DrawCanvas />
        <div className={styles.post}>
          <h2 className={styles.title}>
            タイトル
          </h2>
          <div className={styles.desc}>
            文がいくつか集まり、かつ、まとまった内容を表すもの。内容のうえで前の文と密接な関係をもつと考えられる文は、そのまま続いて書き継がれ、前の文と隔たりが意識されたとき、次の文は行を改めて書かれる。
          </div>
        </div>
      </div>}
    </>
  )
}

export default Post1