import styles from "./index.module.css"
import { useMediaQuery } from 'react-responsive'
import DrawCanvas from './DrawCanvas';
import Link from 'next/link';


const Post1 = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 700, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 699 });
  return (
    <>
      {isDesktop && <div className={styles.desktop}>
        {/* <div className={styles.flex}> */}
        <DrawCanvas />
        <Link href="/posts/aws-quickstart" className={styles.wrapperDesktop}>

          <span className={styles.titleDesktop}>
            Welcome to FR App
          </span><span className={styles.spanColor}> !!!!!!!!!🚀🎉🎉🎉</span>
          <div className={styles.descDesktop}>
            みなさん、こんにちは！
            サブスクリプションに加入していだたきありがとうございます。
            今回、フルスタックアプリ開発について情報を共有するサイトを開設しました。
            このサイトでは、フルスタックアプリ開発に関する最新情報やノウハウを共有し、情報交換をすることができます。
          </div>
          <div className={styles.postDateDesktop}>2022/01/11</div>
        </Link>
        {/* </div> */}
      </div>}
      {isTablet && <div className={styles.tablet}>
        <DrawCanvas />
        <Link href="/post/1" className={styles.wrapperTablet}>

          <span className={styles.titleTablet}>
            Welcome to FR App !!!!!!!!!
          </span><span className={styles.spanColor}> 🚀🎉🎉🎉</span>
          <div className={styles.descTablet}>
            みなさん、こんにちは！
            サブスクリプションに加入していだたきありがとうございます。
            今回、フルスタックアプリ開発について情報を共有するサイトを開設しました。
            このサイトでは、フルスタックアプリ開発に関する最新情報やノウハウを共有し、情報交換をすることができます。
          </div>
          <div className={styles.postDateTablet}>2022/01/11</div>
        </Link>
      </div>}
      {isMobile && <div className={styles.mobile}>
        <div>
          <DrawCanvas />
          <Link href="/post/1" className={styles.wrapperMobile}>

            <span className={styles.titleMobile}>
              Welcome to FR App
            </span><span className={styles.spanColor}> !!!!!!!!!🚀🎉🎉🎉</span>
            <div className={styles.descMobile}>
              みなさん、こんにちは！
              サブスクリプションに加入していだたきありがとうございます。
              今回、フルスタックアプリ開発について情報を共有するサイトを開設しました。
              このサイトでは、フルスタックアプリ開発に関する最新情報やノウハウを共有し、情報交換をすることができます。
            </div>
            <div className={styles.postDateMobile}>2022/01/11</div>
          </Link>
        </div>
      </div>}
    </>
  )
}

export default Post1