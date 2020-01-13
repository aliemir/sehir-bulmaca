import React, { FunctionComponent } from 'react'
import cssStylez, { camelToKebab } from 'css-stylez'
import styles from './Header.module.scss'
import classNames from 'classnames'

type HeaderProps = {
  current: number
  all: number
  active: boolean
  onYieldClick: Function
}

const stylez = cssStylez(styles, camelToKebab)

const header = 'sehirbulmaca'

const splitted = title => {
  const sp = title.split('')
  return sp.map((lt, i) => <span key={title + i}>{lt}</span>)
}

const Header: FunctionComponent<HeaderProps> = ({
  current,
  all,
  active,
  onYieldClick,
}) => {
  return (
    <header className={classNames(stylez.headerWrapper)}>
      {active && (
        <div className={classNames(stylez.yield)}>
          <button
            className={stylez.yieldButton}
            type='button'
            onClick={_ => onYieldClick()}
          >
            Bitir
          </button>
        </div>
      )}
      <div className={classNames(stylez.logo)}>
        <h1 className={classNames(stylez.heading)}>{splitted('sehir')}</h1>
        <h1 className={classNames(stylez.heading)}>{splitted('bulmaca')}</h1>
      </div>
      {active && (
        <div className={classNames(stylez.progress)}>
          <span className={classNames(stylez.progressCurrent)}>{current}</span>
          <span className={classNames(stylez.progressDivider)}>/</span>
          <span className={classNames(stylez.progressAll)}>{all}</span>
        </div>
      )}
    </header>
  )
}
export default Header
