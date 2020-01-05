import React, { FunctionComponent } from 'react'
import cssStylez, { camelToKebab } from 'css-stylez'
import styles from './Header.module.scss'
import classNames from 'classnames'

const stylez = cssStylez(styles, camelToKebab)

const Header: FunctionComponent = () => {
  return <h1 className={classNames(stylez.heading)}>Sehir Bulmaca</h1>
}

export default Header
