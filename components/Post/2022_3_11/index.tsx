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
          </span><span className={styles.spanColor}> !!!!!!!!!๐๐๐๐</span>
          <div className={styles.descDesktop}>
            ใฟใชใใใใใใซใกใฏ๏ผ
            ใตใในใฏใชใใทใงใณใซๅ ๅฅใใฆใใ ใใใใใใจใใใใใพใใ
            ไปๅใใใซในใฟใใฏใขใใช้็บใซใคใใฆๆๅ ฑใๅฑๆใใใตใคใใ้่จญใใพใใใ
            ใใฎใตใคใใงใฏใใใซในใฟใใฏใขใใช้็บใซ้ขใใๆๆฐๆๅ ฑใใใฆใใฆใๅฑๆใใๆๅ ฑไบคๆใใใใใจใใงใใพใใ
          </div>
          <div className={styles.postDateDesktop}>2022/01/11</div>
        </Link>
        {/* </div> */}
      </div>}
      {isTablet && <div className={styles.tablet}>
        <DrawCanvas />
        <Link href="/posts/aws-quickstart" className={styles.wrapperTablet}>

          <span className={styles.titleTablet}>
            Welcome to FR App !!!!!!!!!
          </span><span className={styles.spanColor}> ๐๐๐๐</span>
          <div className={styles.descTablet}>
            ใฟใชใใใใใใซใกใฏ๏ผ
            ใตใในใฏใชใใทใงใณใซๅ ๅฅใใฆใใ ใใใใใใจใใใใใพใใ
            ไปๅใใใซในใฟใใฏใขใใช้็บใซใคใใฆๆๅ ฑใๅฑๆใใใตใคใใ้่จญใใพใใใ
            ใใฎใตใคใใงใฏใใใซในใฟใใฏใขใใช้็บใซ้ขใใๆๆฐๆๅ ฑใใใฆใใฆใๅฑๆใใๆๅ ฑไบคๆใใใใใจใใงใใพใใ
          </div>
          <div className={styles.postDateTablet}>2022/01/11</div>
        </Link>
      </div>}
      {isMobile && <div className={styles.mobile}>
        <div>
          <DrawCanvas />
          <Link href="/posts/aws-quickstart" className={styles.wrapperMobile}>

            <span className={styles.titleMobile}>
              Welcome to FR App
            </span><span className={styles.spanColor}> !!!!!!!!!๐๐๐๐</span>
            <div className={styles.descMobile}>
              ใฟใชใใใใใใซใกใฏ๏ผ
              ใตใในใฏใชใใทใงใณใซๅ ๅฅใใฆใใ ใใใใใใจใใใใใพใใ
              ไปๅใใใซในใฟใใฏใขใใช้็บใซใคใใฆๆๅ ฑใๅฑๆใใใตใคใใ้่จญใใพใใใ
              ใใฎใตใคใใงใฏใใใซในใฟใใฏใขใใช้็บใซ้ขใใๆๆฐๆๅ ฑใใใฆใใฆใๅฑๆใใๆๅ ฑไบคๆใใใใใจใใงใใพใใ
            </div>
            <div className={styles.postDateMobile}>2022/01/11</div>
          </Link>
        </div>
      </div>}
    </>
  )
}

export default Post1