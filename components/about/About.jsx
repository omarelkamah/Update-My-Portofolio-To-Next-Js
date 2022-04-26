import style from '/styles/componentStyle/about.module.scss'
import Image from 'next/image'

import Fade from 'react-reveal/Fade'
// import { useSelector } from 'react-redux'

export default function About () {
  // const theamState = useSelector(state => state)
  return (
    <div
      className={style.about}
      // style={{ background: theamState.value && '#333' }}
      id='about'
    >
      <div className='container'>
        <div className='row'>
          <div className={`col-lg-6 ${style.aboutLeft}`}>
            <Fade left>
              <div className={(style.aboutCard, style.bg)}></div>
              <div className={style.aboutCard}>
                <Image
                  src='/assets/profileImg/me.jpg'
                  width='960px'
                  height='1280px'
                  alt='myImg'
                  className={style.aboutImg}
                />
              </div>
            </Fade>
          </div>
          <div className={`col-lg-6 ${style.aboutRight}`}>
            <Fade right>
              <h1 className={style.aboutTitle}>About Me</h1>
              <p className='a-sub'>
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <p className={style.aboutDesc}>
                Hi, I'am Omar Ahmed From Alexandrian I make my components usable
                to use it in many diffrent places with diffrent data that i
                receive from api
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}
