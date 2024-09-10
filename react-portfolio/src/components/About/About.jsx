// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img 
          className={styles.aboutImage} src={getImageUrl("about/fotoAbout.jpg")} alt='me sitting with a laptop'>
        </img>
      
    <ul className={styles.aboutItems}>
      <li className={styles.aboutItem}>
        <img src={getImageUrl("about/cursorIcon.png")} alt='cursor icon'></img>
        <div className={styles.aboutItemText}>
          <h3>Front End Developer</h3>
          <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img className={styles.machineLearning} src={getImageUrl("about/ML.png")} alt='cursor icon'></img>
        <div className={styles.aboutItemText}>
          <h3>Data Science and Machine Learning/Deep Learning</h3>
          <p>I have experience in Data Science and Machine Learning, working with tools like Python, Pandas, NumPy, TensorFlow, and scikit-learn. I’ve built predictive models for real-world applications, focusing on data-driven solutions to improve decision-making and optimize performance.</p>
        </div>
      </li>
    </ul>
    </div>
    </section>
  )
}
