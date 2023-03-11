import styles from '@/styles/404.module.css'
import { useRouter } from 'next/router'
import { IoIosArrowBack } from 'react-icons/io';

export default function FourNotFourPage() {
  const router = useRouter()
  return (
    <div className={styles.wrapper}>
      <div className={styles.back} onClick={() => router.back()}><IoIosArrowBack className={styles.backIcon} />back</div>
      <div className={styles.heading}>
        <div className={styles.flex}>
          <h1 className={styles.h1}>404 Error Page</h1>
          <div className={styles.div1}>come soon...</div>
          <h3 className={styles.h3}>もうしばらくお待ちください🐳</h3>
        </div>
      </div>
    </div>
  )
}