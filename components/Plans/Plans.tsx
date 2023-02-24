// import { CheckIcon } from '@heroicons/react/outline'
import styles from "./Plans.module.css"
import { Product } from '@stripe/firestore-stripe-payments'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { TbChecks } from 'react-icons/tb'
import useAuth from '../../hooks/useAuth'
import { loadCheckout } from '../../lib/stripe'
import Table from '../Table/Table'
import Loader from '../Loader/Loader'


interface Props {
  products: Product[]
}

function Plans({ products }: Props) {
  const { logout, user } = useAuth()
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2])
  const [isBillingLoading, setBillingLoading] = useState(false)

  console.log(products)

  const subscribeToPlan = () => {
    if (!user) return

    loadCheckout(selectedPlan?.prices[0].id!)
    setBillingLoading(true)
  }

  return (
    <div className={styles.plansWrapper}>
      <header className={styles.header}>
        <div className={styles.margin}>
          <Link href="/">
            <div className={styles.logo}>
              FR
              <span className={styles.logoSpan}>.dev</span>
            </div>

          </Link>
          <p
            className={styles.logoutButton}
            onClick={logout}
          >
            Sign Out
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainMargin}>
          <h1>
            プランを選択してください<span className={styles.span1}>（現在はシングルプランです）</span>
          </h1>
          <ul>
            <li className={styles.list}>
              <TbChecks />
              {/* <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want. */}
              コンテンツの購読が自由にできます。
            </li>
            <li className={styles.list}>
              <TbChecks />
              {/* <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations */}
              あなたへおすすめを紹介します。
            </li>
            <li className={styles.list}>
              <TbChecks />
              {/* <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel */}
              いつでも解約可能です。
            </li>
          </ul>

          <div className="mt-4 flex flex-col space-y-4">
            <div className="flex w-full items-center justify-end self-end md:w-3/5">
              {products.map((product) => (
                <>
                  <div className={styles.productFlex}>
                    <input
                      type="radio"
                      className={styles.radio}
                      key={product.id}
                      onClick={() => setSelectedPlan(product)}
                    />
                    {/* {product.name}s */}

                    <div className={styles.productName}>{product.name}</div>
                  </div>
                </>
              ))}
            </div>
            <hr />
            <Table products={products} selectedPlan={selectedPlan} />

            <button
              disabled={!selectedPlan || isBillingLoading}
              className={selectedPlan ? styles.subscribe : styles.subscribeNone
              }
              onClick={subscribeToPlan}
            >
              {isBillingLoading ? (
                <Loader />
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Plans
