import React, { FunctionComponent } from 'react'
import styles from './Map.module.scss'
import cssStylez, { camelToKebab } from 'css-stylez'

type Province = import('../../utils/data').Province

const stylez = cssStylez(styles, camelToKebab)

type MapProps = {
  activeProvinces?: Array<String>
  provinces: Array<Province>
}

const Map: FunctionComponent<MapProps> = ({ activeProvinces, provinces }) => {
  return (
    <div className={stylez.map}>
      <svg
        version='1.1'
        id='svg-turkiye-haritasi'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 1007.478 527.323'
        width='1007.478'
        height='527.323'
        xmlSpace='preserve'
      >
        <g id='turkiye'>
          {provinces.map((p, index) => {
            return (
              <g
                key={index}
                id={p.name}
                data-plakakodu={p.plaka}
                data-known={
                  activeProvinces?.find(el => el === p.plaka) ? true : false
                }
                data-iladi={p.displayName}
              >
                {p.path.map((px, pathIndex) => (
                  <path d={px} key={'path' + pathIndex} />
                ))}
              </g>
            )
          })}
        </g>
      </svg>
    </div>
  )
}

export default Map
