import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { getProducts, Product } from '@stripe/firestore-stripe-payments'
import useAuth from '@/hooks/useAuth'
import { RiToggleLine, RiToggleFill } from "react-icons/ri"
import payments from '../lib/stripe'
import useSubscription from '../hooks/useSubscription'
import Plans from '../components/Plans/Plans'

// test import 
import Svg1 from "../public/test.svg"
import Svg2 from "../public/homeback.svg"
import Svg3 from "../public/frdev2.svg"
import Svg4 from "../public/one.svg"
import Svg5 from "../public/message.svg"
import { Button } from '@mui/material';
import Posts from '../components/Post/Posts';



// 

const inter = Inter({ subsets: ['latin'] })

interface Props {
  products: Product[]
}

export default function Home({ products }: Props) {


  const [pageToggle, setPageToggle] = useState<Boolean>(false)
  const toggleBool = () => setPageToggle(!pageToggle)

  const { user, logout, loading } = useAuth()

  const subscription = useSubscription(user)
  if (loading || subscription === null) return null

  if (!subscription) return <Plans products={products} />



  return (
    <>
      <Head>
        <title>FR App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <p
          className={styles.logout}
          onClick={logout}
        >
          SignOut
        </p> */}
        <div className={styles.description}>
          <p>
            <code>
              This directory:&nbsp;
              <code className={styles.code}>pages/index.tsx</code>
              <br />
              Change directory:&nbsp;
              {!pageToggle
                ? <><RiToggleLine onClick={toggleBool} className={styles.toggleIcon} /></>
                : <><RiToggleFill onClick={toggleBool} className={styles.toggleIcon} />
                  <Link href="/account" className={styles.subCode}>pages/account.tsx</Link>
                  <Link href="/404" className={styles.subCode}>pages/user.tsx</Link></>}


            </code>
          </p>
          <div>
            <div className={styles.created}>
              {/* for&nbsp;<span className={styles.fr}>{user?.email}</span> */}
              <Link href='/user' className={styles.userInfo}>for&nbsp;<span className={styles.fr}>{user?.email}</span></Link>
            </div>
            {/* <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a> */}
          </div>
        </div>
        {/* <Svg1 className={styles.svg1} />
        <Svg2 className={styles.svg2} /> */}
        <div className={styles.center}>
          <Posts />



          {/* <Svg3 className={styles.svg3} /> */}
          {/* <Svg5 className={styles.svg5} /> */}

          {/* <Svg4 className={styles.svg4} /> */}
          {/* <Image
            className={styles.logo}
            src="/frdev2.svg"
            alt="Next.js Logo"
            width={200}
            height={46}
            priority
          /> */}
          {/* <div className={styles.thirteen}>
            <Image
              src="/one.svg"
              alt="13"
              width={60}
              height={41}
              priority
            />
          </div> */}
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Movie <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Text <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Roadmap <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Update information <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
        <Svg1 className={styles.svg1} />
        <Svg2 className={styles.svg2} />
      </main>
    </>
  )
}



export const getServerSideProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((error) => console.log(error.message))

  return {
    props: {
      products,
    },
  }
}
