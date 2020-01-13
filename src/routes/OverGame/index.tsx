import React, { FunctionComponent } from 'react'
import styles from './OverGame.module.scss'
import cssStylez, { camelToKebab } from 'css-stylez'
import { RemainingList } from '../../components'

const stylez = cssStylez(styles, camelToKebab)

type Province = import('../../utils/data').Province

type InGameProps = {
  remainingProvinces: Array<Province>
  totalCount: number
  onShareClick: Function
}

const OverGame: FunctionComponent<InGameProps> = ({
  remainingProvinces,
  totalCount,
  onShareClick,
}) => {
  return (
    <div className={stylez.overGame}>
      {remainingProvinces.length !== 0 ? (
        <RemainingList
          remainingProvinces={remainingProvinces.map(el => el.displayName)}
        />
      ) : (
        <div className={stylez.congrats}>Tebrikler!</div>
      )}
      <button
        className={stylez.shareButton}
        type='button'
        onClick={_ => onShareClick()}
      >
        Arkadaşlarınla Paylaş
      </button>
    </div>
  )
}

export default OverGame
