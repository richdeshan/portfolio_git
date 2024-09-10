// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return( 
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rich</h1>
        <p className={styles.description}>I'm a fresh graduate with a passion for front-end web development. With a strong foundation in HTML, CSS, JavaScript, and frameworks like Bootstrap and React, I am excited to build engaging, responsive, and user-friendly websites. I am always eager to learn new technologies and continuously improve my skills. Let's collaborate to create amazing digital experiences!</p>
        <a href="mailto:richdeshan@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
   <img src={getImageUrl('hero/Foto.png')} alt="hero" className={styles.heroImg}/>
  <div className={styles.topBlur}/>
  <div className={styles.bottomBlur}></div>
  </section>
)
}
