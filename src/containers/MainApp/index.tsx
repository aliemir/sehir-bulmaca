import React, { FunctionComponent } from 'react'
import styles from './MainApp.module.scss'
import cssStylez, { camelToKebab } from 'css-stylez'
import classNames from 'classnames'
import { InGame } from '../../routes'
import { Header } from '../'

const stylez = cssStylez(styles, camelToKebab)

const MainApp: FunctionComponent = ({}) => {
  return (
    <div className={classNames(stylez.appContainer)}>
      <Header current={54} all={81} active={true} min={9} sec={25} />
      <InGame />
    </div>
  )
}

export default MainApp
