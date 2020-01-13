import React, { FunctionComponent } from 'react'
import styles from './RemainingList.module.scss'
import cssStylez, { camelToKebab } from 'css-stylez'

type Province = import('../../utils/data').Province

const stylez = cssStylez(styles, camelToKebab)

type RemainingListProps = {
  remainingProvinces: Array<string>
}

const RemainingList: FunctionComponent<RemainingListProps> = ({
  remainingProvinces,
}) => {
  return (
    <div className={stylez.remainingList}>
      <h6>Unuttuklarınız</h6>
      <div className={styles.list}>
        {remainingProvinces.map((el, i) => (
          <span key={i}>{el},</span>
        ))}
      </div>
    </div>
  )
}

export default RemainingList
