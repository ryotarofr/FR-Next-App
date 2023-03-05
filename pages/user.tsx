import styles from '../styles/User.module.css'
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth'
import { IoIosArrowBack } from 'react-icons/io';

const User = () => {
  const { user, logout, loading } = useAuth()
  const router = useRouter()
  if (loading) return null
  return (<>
    <div className={styles.back} onClick={() => router.back()}><IoIosArrowBack className={styles.backIcon} />back</div>
    <div>username</div>
    <div>photo</div>
  </>)
}

export default User