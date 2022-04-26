// import './intro.scss'
import style from '/styles/componentStyle/intro.module.scss'
// import Me from '../../img/me.png'
import Fade from 'react-reveal/Fade'
// import { useSelector } from 'react-redux'

function Intro () {
  // const theamState = useSelector(state => state)

  return (
    <div className={style.intro}>
      <div className={style.containerFluid}>
        <div className={`row ${style.row}`}>
          <div className={style.introLeft}>
            <Fade top>
              <div className={style.introLeftContainer}>
                <span className={style.introHeading}>Hello, My name is</span>
                <h1>Omar Ahmed</h1>
                <div className={style.introTitle}>
                  <div className={style.introTitleWrapper}>
                    <div className={style.introTitleItem}>
                      Front End Developer
                    </div>
                  </div>
                </div>
                <p
                  className={style.introDesc}
                  // style={{ color: theamState.value && '#fff' }}
                >
                  Being able to build the designs I produce means I can bring
                  your idea to life and make it usable in future.
                </p>
              </div>
            </Fade>
          </div>
          <div className={style.introRight}>
            <div className={style.introBg}></div>
            {/* <img src={Me} alt='' className='introImg' /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
