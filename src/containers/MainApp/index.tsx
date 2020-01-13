import React, { FunctionComponent, useState } from 'react'
import styles from './MainApp.module.scss'
import cssStylez, { camelToKebab } from 'css-stylez'
import classNames from 'classnames'
import { InGame } from '../../routes'
import { Header } from '../'
import { provinces, replaceSpecials } from '../../utils'

const stylez = cssStylez(styles, camelToKebab)

enum GameStatus {
  idle = 0,
  playing,
  win,
  over,
}

const MainApp: FunctionComponent = (/*{}*/) => {
  const onSubmitHandler = input => {
    const formatted = replaceSpecials(input)
    const item = provinces.find(p => p.equals(formatted), undefined)
    if (item) {
      if (!activeProvinces.includes(item.plaka)) {
        console.log('success')
        const newProvincesList = [...activeProvinces, item.plaka]
        setActiveProvinces(newProvincesList)
        if (newProvincesList.length === provinces.length) {
          setGameStatus(GameStatus.win)
        }
      } else {
        console.log('already in array')
      }
    } else {
      console.log('hatali girdi bole bi sehir yok')
    }
  }
  const onInputFocus = () => {
    if (gameStatus === GameStatus.idle) setGameStatus(GameStatus.playing)
  }
  const [gameStatus, setGameStatus] = useState(GameStatus.idle)
  const [activeProvinces, setActiveProvinces] = useState([] as Array<string>)

  return (
    <div className={classNames(stylez.appContainer)}>
      <Header
        current={activeProvinces.length}
        all={81}
        active={false}
        min={9}
        sec={25}
      />
      <InGame
        inputActive={!true}
        onInputFocus={onInputFocus}
        inputText={
          gameStatus === GameStatus.idle
            ? 'Başlamak için tıklayın!'
            : gameStatus === GameStatus.playing
            ? 'Devam Etmek için tıklayın!'
            : 'Paylaşmak için tıklayın!'
        }
        provinces={provinces}
        activeProvinces={activeProvinces}
        onSubmitHandler={onSubmitHandler}
      />
    </div>
  )
}

export default MainApp
