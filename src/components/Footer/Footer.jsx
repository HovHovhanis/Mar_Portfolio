"use client";
import { useLang } from '@/src/hooks/useLang';
import styles from './Footer.module.css';
import { FaArrowUp } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
    const { lang, translation } = useLang();

    const scrollTop = () => {
        window.scrollTo ({
            top: 0,
            behavior: "smooth"
        });
    }
  return (
    <footer className={styles['footer']}>
        <hr className={styles['footer__line']} />
        <div className="container">
            <div className={styles['footer__box']}>
                <div className={styles['footer__left']}>
                   
                    <p className={styles['my-name']}> <FaCopyright size={20} /> {translation[lang].footer.name}</p> 
                    <span>||</span> 
                    <p className={styles['footer__copy']}>{translation[lang].footer.copy}</p>
                </div>
                <div className={styles['footer__right']}>
                    <button className={styles['footer__btn-top']} onClick={scrollTop} >
                        <FaArrowUp size={25} />
                    </button>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer