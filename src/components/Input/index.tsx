import React, { FunctionComponent } from 'react'
import styles from './Input.module.scss'
import cssStylez, { camelToKebab } from 'css-stylez'
import classNames from 'classnames'

const stylez = cssStylez(styles, camelToKebab)

type InputProps = {
  activeElements?: Array<String>
}

const Input: FunctionComponent<InputProps> = ({ activeElements }) => {
  return (
    <div className={classNames(stylez.inputContainer)}>
      <input
        type='text'
        placeholder='Başlamak için tıklayın!'
        className={classNames(stylez.textInput)}
      />
    </div>
  )
}

export default Input
