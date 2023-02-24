import styles from "./Menbership.module.css"
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import useSubscription from '../../hooks/useSubscription'
import { goToBillingPortal } from '../../lib/stripe'
import Loader from '../Loader/Loader'


function Membership() {
  const { user } = useAuth()
  const subscription = useSubscription(user)
  const [isBillingLoading, setBillingLoading] = useState(false)

  const manageSubscription = () => {
    if (subscription) {
      setBillingLoading(true)
      goToBillingPortal()
    }
  }

  console.log(subscription)

  return (
    <div className={styles.membershipWrapper}>
      <div className={styles.flexWrapper}>
        <h4 className={styles.h4}>メンバーシップ && サブスクリプション登録</h4>
        <button
          disabled={isBillingLoading || !subscription}
          className={styles.cancelButton}
          onClick={manageSubscription}
        >
          {isBillingLoading ? (
            <Loader />
          ) : (
            'Cancel Membership'
          )}
        </button>
      </div>

      <div className={styles.detailItems}>
        <div className={styles.flexItems}>
          <div>
            <p className={styles.email}>Email：{user?.email}</p>
            <p className={styles.password}>Password： ********</p>
          </div>
          <div className="md:text-right">
          </div>
        </div>

        <div>
          <div>
            <p>
              {subscription?.cancel_at_period_end
                ? 'Your membership will end on '
                : 'サブスクリプションの更新日： '}
              {subscription?.current_period_end}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Membership
