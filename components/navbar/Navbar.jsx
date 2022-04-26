import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import Menue from './menue/Menue'
// import { useSelector } from 'react-redux'
import style from '/styles/componentStyle/navbar.module.scss'

export default function Navbar () {
  // const theamState = useSelector(state => state)
  const [openMenue, setOpenMenue] = useState(false)
  const handeleMenue = () => {
    setOpenMenue(!openMenue)
  }
  return (
    <div
      className={style.navbar}
      // style={{
      //   background: theamState.value && '#333',
      //   color: theamState.value && '#fff'
      // }}
    >
      <div className={style.navbarCon}>
        <div className={style.left}>
          <Link href='/'>
            <a className={style.logo}>Omar Ahmed..</a>
          </Link>
          <div className={style.navbarContact}>
            <i className='far fa-envelope-open'></i>
            <a href='mailto:omarwork010@gmail.com'>omarwork010@gmail.com</a>
          </div>
          <div className={style.navbarContact}>
            <i className='fas fa-phone'></i>
            <span>01006129547</span>
          </div>
        </div>
        <div className={style.right} onClick={() => handeleMenue()}>
          <span
            className={`${style.one} ${openMenue && style.oneActive}`}
            // style={{ background: theamState.value && '#fff' }}
          ></span>
          <span
            className={`${style.two} ${openMenue && style.twoActive}`}

            // style={{ background: theamState.value && '#fff' }}
          ></span>
          <span
            className={`${style.three} ${openMenue && style.threeActive}`}

            // style={{ background: theamState.value && '#fff' }}
          ></span>
        </div>
        <Menue openMenue={openMenue} handeleMenue={handeleMenue} />
      </div>
    </div>
  )
}
