"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import { useLang } from '@/src/hooks/useLang';
import { FiMenu, FiX } from "react-icons/fi"; // FiX is for the close icon

const Header = () => {
  const { lang, translation, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for the mobile menu

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLang(selectedLanguage); 
    localStorage.setItem('lang', selectedLanguage); 
  };

  const handleMenuToggle = () => {
    setMenuOpen(prevState => !prevState); // Toggle mobile menu
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); 
      } else {
        setScrolled(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <nav className={styles.nav}>
          <button className={styles['open-mobile-menu']} onClick={handleMenuToggle}>
            {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
          <Link className={styles['nav__logo']} href="/">
            <Image src={'img/logo.svg'} alt='logo' width={100} height={60}/>
            <p className={styles['nav__logo-text']}>Portfolio</p>
          </Link>
          <ul className={`${styles['nav__list']} ${menuOpen ? styles['open'] : ''}`}>
            <li className={styles['nav__item']}>
              <Link href="#about" className={styles['nav__link']}>
                {translation[lang].header.about}
              </Link>
            </li>
            <li className={styles['nav__item']}>
              <Link href="#services" className={styles['nav__link']}>
                {translation[lang].header.services}
              </Link>
            </li>
            <li className={styles['nav__item']}>
              <Link href="#skills" className={styles['nav__link']}>
                {translation[lang].header.skills}
              </Link>
            </li>
            <li className={styles['nav__item']}>
              <Link href="#projects" className={styles['nav__link']}>
                {translation[lang].header.projects}
              </Link>
            </li>
            <li className={styles['nav__item']}>
              <Link href="#contact" className={styles['nav__link']}>
                {translation[lang].header.contact}
              </Link>
            </li>
          </ul>
          <select
            value={lang}
            onChange={handleLanguageChange}
            className={styles['nav__laung-select']}
          >
            <option value="eng">ENG</option>
            <option value="rus">RUS</option>
            <option value="arm">ARM</option>
          </select>
        </nav>
      </div>
    </header>
  );
}

export default Header;
