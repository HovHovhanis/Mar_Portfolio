"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Banner.module.css';

import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import { useLang } from '@/src/hooks/useLang';


const Banner = () => {
     const { lang, translation } = useLang()

  return (
    <section className={styles['banner']}>
        <div className="container">
            <div className={styles['banner__box']}>
                <div className={styles['banner__info']}>
                    <h1 className={styles['banner__info--title']}> {translation[lang].banner.bannerTitle} <span> {translation[lang].banner.bannerTtitleSpan} </span> </h1>
                    <p className={styles['banner__info--animation--text']}> {translation[lang].banner.bannerAnimationText} <span> </span> </p>
                    <p className={styles['banner__info--desck']}>
                    {translation[lang].banner.bannerDesc}
                    </p>
                    <ul className={styles['banner__soc-list']}>
                        <li className={styles['banner__soc-item']}>
                            <Link target='_blank' href={'https://web.telegram.org/k/'} className={styles['banner__soc-link']}><FaTelegramPlane size={25} /></Link>
                        </li>
                        <li className={styles['banner__soc-item']}>
                            <Link href={'https://web.whatsapp.com/'} className={styles['banner__soc-link']}><FaWhatsapp size={25} /> </Link>
                        </li>
                        <li className={styles['banner__soc-item']}>
                            <Link target='_blank' href={'https://www.facebook.com/share/15nvYeLAwZ/?mibextid=qi2Omg'} className={styles['banner__soc-link']}><FaFacebookF size={25} /></Link>
                        </li>
                    </ul>
                </div>
                <picture className={styles['banner__images']}>
                    <Image src={'/img/banner-img.png'} alt='my__photo' width={350} height={350} />
                </picture>
            </div>
        </div>
    </section>
  )
}

export default Banner

