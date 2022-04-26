import style from '/styles/componentStyle/contact.module.scss'
import Image from 'next/image'
// import { useRef, useState } from 'react'
import Fade from 'react-reveal/Fade'

// import emailjs from 'emailjs-com'
// import { useSelector } from 'react-redux'

export default function Contact () {
  // const theamState = useSelector(state => state)
  // const formRef = useRef()
  // const [done, setDone] = useState()

  // const handelSubmit = e => {
  //   e.preventDefault()
  //   emailjs
  //     .sendForm(
  //       'service_34ehnfo',
  //       'template_l30h67z',
  //       formRef.current,
  //       'user_XkHowpzeoMvwEDtlXZ6D8'
  //     )
  //     .then(
  //       result => {
  //         console.log(result.text)
  //         setDone(true)
  //       },
  //       error => {
  //         console.log(error.text)
  //       }
  //     )
  // }

  return (
    <div
      className={style.contact}
      // style={{
      //   background: theamState.value && '#222',
      //   color: theamState.value && 'white'
      // }}
    >
      <div className={style.contactBg}></div>
      <div className='container'>
        <div className='row'>
          <div className={`col - lg - 6 ${style.contactLeft}`}>
            <Fade left>
              <h1 className={style.contactTitle}>Let's discuss your project</h1>
              <div className='c-info'>
                <div className={style.contactInfoItem}>
                  <Image
                    src='/assets/contactImg/phone.png'
                    alt='phoneIcon'
                    width='30px'
                    height='30px'
                    className={style.contactIcon}
                  />
                  +20 101 604 629 8
                </div>
                <div className={style.contactInfoItem}>
                  <Image
                    className={style.contactIcon}
                    src='/assets/contactImg/email.png'
                    width='30px'
                    height='30px'
                    alt='emailIcon'
                  />
                  <a href='mailto:omarwork010@gmail.com'>
                    omarwork010@gmail.com
                  </a>
                </div>
                <div className={style.contactInfoItem}>
                  <Image
                    className={style.contactIcon}
                    src='/assets/contactImg/address.png'
                    width='30px'
                    height='30px'
                    alt='addressIcon'
                  />
                  Alexandria - El Mandara
                </div>
              </div>
            </Fade>
          </div>
          <div className={`col - lg - 6 ${style.contactRight}`}>
            <Fade right>
              <p className='c-desc'>
                <b>What’s your story?</b> Get in touch. Always available for
                freelancing if the right project comes along. me.
              </p>
              <form>
                <input
                  // style={{ backgroundColor: theamState.value && '#333' }}
                  type='text'
                  placeholder='Name'
                  name='user_name'
                />
                <input
                  // style={{ backgroundColor: theamState.value && '#333' }}
                  type='text'
                  placeholder='Subject'
                  name='user_subject'
                />
                <input
                  // style={{ backgroundColor: theamState.value && '#333' }}
                  type='text'
                  placeholder='Email'
                  name='user_email'
                />
                <textarea
                  // style={{ backgroundColor: theamState.value && '#333' }}
                  rows='5'
                  placeholder='Message'
                  name='message'
                />
                <button>Submit</button>
                {/* {done && 'Thanks Alot ...'} */}
              </form>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}
