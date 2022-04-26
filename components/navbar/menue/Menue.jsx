import React from 'react'
// import { useSelechrefr } from 'react-redux'
import Link from 'next/link'
// import Toggle from '../toggle/Toggle'

import style from '/styles/componentStyle/menue.module.scss'

export default function Menue ({ openMenue, handeleMenue }) {
  // const theamState = useSelector(state => state)
  return (
    <div
      className={`${style.menue} ${openMenue && style.active}`}
      // style={{ background: theamState.value && '#333' }}
    >
      <ul className={style.list}>
        <li onClick={() => handeleMenue(!openMenue)}>
          <Link href='/'>Home</Link>
        </li>
        <li onClick={() => handeleMenue(false)}>
          <Link href='/projects'>Works</Link>
        </li>
        <li onClick={() => handeleMenue(false)}>
          <Link href='/contact'>Contact</Link>
        </li>
        <li onClick={() => handeleMenue(false)}>{/* <Toggle /> */}</li>
      </ul>
    </div>
  )
}
