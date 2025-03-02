"use client"
import React from 'react'
import styles from './About.module.css'
import Title from '../Title/Title'
import Image from 'next/image'
import { useLang } from '@/src/hooks/useLang'
const About = () => {

     const { lang, translation } = useLang()

  return (
    <section className={styles['about']} id='about'>
        <div className="container">
            <Title section="titleAbout" />

            <div className={styles['about__box']}>
                <div className={styles['about__box-info']}>
                    <h2 className={styles['about__box-info--title']}>{translation[lang].about.aboutContetnTitle}</h2>
                    <p className={styles['about__box-info--deck']}>{translation[lang].about.aboutContetnDesk}</p>
                </div>
                <picture className={styles['about__box-images']}>
                    <Image src={'/img/about.png'} alt='about' width={300} height={300} />
                </picture>
            </div>

        </div>
    </section>
  )
}

export default About