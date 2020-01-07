import React, { FunctionComponent } from 'react'
import cssStylez, { camelToKebab } from 'css-stylez'
import styles from './Header.module.scss'
import classNames from 'classnames'

const stylez = cssStylez(styles, camelToKebab)

const header = 'sehirbulmaca'

const splitted = title => {
  const sp = title.split('')
  return sp.map(lt => <span>{lt}</span>)
}

const Header: FunctionComponent = () => {
  return <h1 className={classNames(stylez.heading)}>{splitted(header)}</h1>
}

export default Header
