"use client";

import React from 'react'
import styles from './Projects.module.css'
import Title from '../Title/Title'
import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/src/hooks/useLang';

const Projects = () => {
   const { lang, translation } = useLang()

  return (
    <section className={styles['projects']} id='projects'>
        <div className="container">
            <Title section={'titleProjects'} />

            <div className={styles['projects__box']}>
              <div  className={styles['projects__card']}>
                  <picture className={styles['projects__card-content--images']}>
                    <Image src={'/img/web1.png'} width={400} height={400}   alt='proejcts-1' />
                  </picture>
                  <div className={styles['projects__card-content--info']}>
                    <p>{translation[lang].projects.projectText_1}</p>
                    <Link target='_blank' href={'https://www.figma.com/design/nl0BMXJHGiAaZPRxjfA8XK/Untitled?node-id=0-1&p=f&t=OxbDD1fyGoIe3dji-0'}><span>{translation[lang].projects.btnGotoProjects}</span></Link>
                  </div>
              </div>
              <div  className={styles['projects__card']}>
                  <picture className={styles['projects__card-content--images']}>
                    <Image src={'/img/web2.png'} width={400} height={400}    alt='proejcts-1' />
                  </picture>
                  <div className={styles['projects__card-content--info']}>
                    <p>{translation[lang].projects.projectText_2}</p>
                    <Link target='_blank' href={'https://www.figma.com/design/sBqFsSvRPSQ6Vm0F0bdZny/Untitled?node-id=0-1&p=f&t=fb42LXPrNyjY2R5T-0'}><span>{translation[lang].projects.btnGotoProjects}</span></Link>
                  </div>
              </div>
              <div  className={styles['projects__card']}>
                  <picture className={styles['projects__card-content--images']}>
                    <Image src={'/img/web3.png'} width={400} height={400}   alt='proejcts-1' />
                  </picture>
                  <div className={styles['projects__card-content--info']}>
                    <p>{translation[lang].projects.projectText_1}</p>
                    <Link target='_blank' href={'https://www.figma.com/design/nl0BMXJHGiAaZPRxjfA8XK/Untitled?node-id=0-1&p=f&t=OxbDD1fyGoIe3dji-0'}><span>{translation[lang].projects.btnGotoProjects}</span></Link>
                  </div>
              </div>
              <div  className={styles['projects__card']}>
                  <picture className={styles['projects__card-content--images']}>
                    <Image src={'/img/web4.png'} width={400} height={400}    alt='proejcts-1' />
                  </picture>
                  <div className={styles['projects__card-content--info']}>
                    <p>{translation[lang].projects.projectText_3}</p>
                    <Link href={'https://www.figma.com/design/EUcQ7MGTXzseGRqutDy9Yr/Untitled?node-id=0-1&t=htqNgbtzerdKd39D-1'}><span>{translation[lang].projects.btnGotoProjects}</span></Link>
                  </div>
              </div>
              <div  className={styles['projects__card']}>
                  <picture className={styles['projects__card-content--images']}>
                    <Image src={'/img/web6.png'} width={400} height={400}    alt='proejcts-1' />
                  </picture>
                  <div className={styles['projects__card-content--info']}>
                    <p>{translation[lang].projects.projectText_2}</p>
                    <Link target='_blank' href={'https://www.figma.com/design/sBqFsSvRPSQ6Vm0F0bdZny/Untitled?node-id=0-1&p=f&t=fb42LXPrNyjY2R5T-0'}><span>{translation[lang].projects.btnGotoProjects}</span></Link>
                  </div>
              </div>
              <div  className={styles['projects__card']}>
                  <picture className={styles['projects__card-content--images']}>
                    <Image src={'/img/web5.png'} width={400} height={400}   alt='proejcts-1' />
                  </picture>
                  <div className={styles['projects__card-content--info']}>
                    <p>{translation[lang].projects.projectText_3}</p>
                    <Link href={'https://www.figma.com/design/EUcQ7MGTXzseGRqutDy9Yr/Untitled?node-id=0-1&t=htqNgbtzerdKd39D-1'}><span>{translation[lang].projects.btnGotoProjects}</span></Link>
                  </div>
              </div>
             
            </div>
        </div>
    </section>
  )
}

export default Projects