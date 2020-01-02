import React, { FunctionComponent } from 'react'
import { Map, Input } from '../../components'
import styles from './InGame.module.scss'
import cssStylez, { camelToKebab } from 'css-stylez'

const stylez = cssStylez(styles, camelToKebab)

const InGame: FunctionComponent = (props: object) => {
  return (
    <>
      <Map />
      <Input />
    </>
  )
}

export default InGame
