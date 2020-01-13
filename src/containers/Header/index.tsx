import React, { FunctionComponent } from 'react'
import cssStylez, { camelToKebab } from 'css-stylez'
import styles from './Header.module.scss'
import classNames from 'classnames'

type HeaderProps = {
  current: number
  all: number
  min: number
  sec: number
  active: boolean
}

const stylez = cssStylez(styles, camelToKebab)

const header = 'sehirbulmaca'

const splitted = title => {
  const sp = title.split('')
  return sp.map(lt => <span>{lt}</span>)
}

const Header: FunctionComponent<HeaderProps> = ({
  current,
  all,
  min,
  sec,
  active,
}) => {
  return (
    <header className={classNames(stylez.headerWrapper)}>
      {/* <div className={classNames(stylez.timer)}>
        <span className={classNames(stylez.timerMinutes)}>{`${
          min < 10 ? '0' : ''
        }${min}`}</span>
        <span
          className={classNames(stylez.timerDots, {
            [stylez.timerAnimation]: active
          })}
        >
          :
        </span>
        <span className={classNames(stylez.timerSeconds)}>{sec}</span>
      </div> */}
      <div className={classNames(stylez.logo)}>
        <h1 className={classNames(stylez.heading)}>{splitted('sehir')}</h1>
        <h1 className={classNames(stylez.heading)}>{splitted('bulmaca')}</h1>
      </div>
      <div className={classNames(stylez.progress)}>
        <span className={classNames(stylez.progressCurrent)}>{current}</span>
        <span className={classNames(stylez.progressDivider)}>/</span>
        <span className={classNames(stylez.progressAll)}>{all}</span>
      </div>
    </header>
  )
}
export default Header
