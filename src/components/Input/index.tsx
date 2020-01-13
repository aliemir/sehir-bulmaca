import React, { FunctionComponent, useState, useRef } from 'react'
import styles from './Input.module.scss'
import cssStylez, { camelToKebab } from 'css-stylez'
import classNames from 'classnames'

const stylez = cssStylez(styles, camelToKebab)

type InputProps = {
  onSubmitHandler: Function
  onInputFocus: Function
  inputText: string
  inputActive: boolean
}

const Input: FunctionComponent<InputProps> = ({
  onSubmitHandler,
  onInputFocus,
  inputText,
  inputActive,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<string>('')
  const onChange = e => {
    setValue(e.target.value)
  }
  const onSubmit = e => {
    e.preventDefault()
    onSubmitHandler(value)
    setValue('')
    inputRef.current?.focus()
  }
  return (
    <div className={classNames(stylez.inputContainer)}>
      <form onSubmit={onSubmit}>
        <input
          disabled={inputActive}
          onFocus={_ => onInputFocus()}
          ref={inputRef}
          onChange={onChange}
          value={value}
          type='text'
          placeholder={inputText}
          className={classNames(stylez.textInput)}
        />
      </form>
    </div>
  )
}

export default Input
