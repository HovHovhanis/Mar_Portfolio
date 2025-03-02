"use client";
import React from 'react'
import styles from './Skilss.module.css';
import Title from '../Title/Title';

import { FaCheck } from "react-icons/fa";
import { useLang } from '@/src/hooks/useLang';

const Skills = () => {
    const { lang, translation } = useLang()

  return (
    <section className={styles['skills']} id='skills'>
        <div className="container">
            <Title section={'titleSkills'} />

            <div className={styles['skills__box']}>
                <ul className={styles['skills__list']}>
                    <h3 className={styles['skills__item-title']}>Figma</h3>
                    <li className={styles['skills__item']}>
                        <FaCheck  size={20} />
                        <p className={styles['skills__item-deck']}>{translation[lang].skills.list_1.listSkills_1}</p>
                    </li>
                    <li className={styles['skills__item']}>
                        <FaCheck  size={20} />
                        <p className={styles['skills__item-deck']}>{translation[lang].skills.list_1.listSkills_2}</p>
                    </li>
                    <li className={styles['skills__item']}>
                        <FaCheck  size={20} />
                        <p className={styles['skills__item-deck']}>{translation[lang].skills.list_1.listSkills_3}</p>
                    </li>
                    <li className={styles['skills__item']}>
                        <FaCheck  size={20} />
                        <p className={styles['skills__item-deck']}>{translation[lang].skills.list_1.listSkills_4}</p>
                    </li>
                    <li className={styles['skills__item']}>
                        <FaCheck  size={20} />
                        <p className={styles['skills__item-deck']}>{translation[lang].skills.list_1.listSkills_5}</p>
                    </li>
                    <li className={styles['skills__item']}>
                        <FaCheck  size={20} />
                        <p className={styles['skills__item-deck']}>{translation[lang].skills.list_1.listSkills_6}</p>
                    </li>
                    <li className={styles['skills__item']}>
                        <FaCheck  size={20} />
                        <p className={styles['skills__item-deck']}>{translation[lang].skills.list_1.listSkills_7}</p>
                    </li>
                </ul>

                <ul className={styles['skills__list']}>
                    <h3 className={styles['skills__item-title']}>Adobe Photoshop</h3>
                    <li className={styles['skills__item']}>
                        <FaCheck  size={20} />
                        <p className={styles['skills__item-deck']}>{translation[lang].skills.list_2.listSkills_1}</p>
                    </li>
                    <li className={styles['skills__item']}>
                        <FaCheck  size={20} />
                        <p className={styles['skills__item-deck']}>{translation[lang].skills.list_2.listSkills_2}</p>
                    </li>
                    <li className={styles['skills__item']}>
                        <FaCheck  size={20} />
                        <p className={styles['skills__item-deck']}>{translation[lang].skills.list_2.listSkills_3}</p>
                    </li>
                    <li className={styles['skills__item']}>
                        <FaCheck  size={20} />
                        <p className={styles['skills__item-deck']}>{translation[lang].skills.list_2.listSkills_4}</p>
                    </li>
                    <li className={styles['skills__item']}>
                        <FaCheck  size={20} />
                        <p className={styles['skills__item-deck']}>{translation[lang].skills.list_2.listSkills_5}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}


export default Skills