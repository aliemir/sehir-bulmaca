import React, { FunctionComponent, Ref } from 'react'
import { Map, Input } from '../../components'
import styles from './InGame.module.scss'
import cssStylez, { camelToKebab } from 'css-stylez'

const stylez = cssStylez(styles, camelToKebab)

type Province = import('../../utils/data').Province

type InGameProps = {
  provinces: Array<Province>
  activeProvinces: Array<string>
  onSubmitHandler: Function
  onInputFocus: Function
  inputText: string
  inputActive: boolean
}

const InGame: FunctionComponent<InGameProps> = ({
  provinces,
  activeProvinces,
  onSubmitHandler,
  onInputFocus,
  inputText,
  inputActive,
}) => {
  return (
    <>
      <Map activeProvinces={activeProvinces} provinces={provinces} />
      <Input
        onSubmitHandler={onSubmitHandler}
        onInputFocus={onInputFocus}
        inputText={inputText}
        inputActive={inputActive}
      />
    </>
  )
}

export default InGame
