import React, { FunctionComponent } from 'react'
import { Map, Input } from '../../components'
import styles from './InGame.module.scss'
import cssStylez, { camelToKebab } from 'css-stylez'
import { provinces } from '../../utils'

const stylez = cssStylez(styles, camelToKebab)

const InGame: FunctionComponent = (props: object) => {
  return (
    <>
      <Map activeProvinces={['01', '16', '34']} provinces={provinces} />
      <Input />
    </>
  )
}

export default InGame
