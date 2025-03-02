"use client"
import React from 'react'
import styles from './Title.module.css'
import { useLang } from '@/src/hooks/useLang'
const Title = ({ section }) => {
    const { lang, translation } = useLang()
    const currentTranslation = translation[lang] || translation['EN'];  
    const titleText = currentTranslation?.sectionTitle?.[section] || 'About';
    
  return (
    <div className={styles['titleBox']}>
        <h2 className={styles['titleBox__title']}>{titleText}</h2>
        <hr className={styles['titleBox__line']}/>
    </div>
  )
}

export default Title