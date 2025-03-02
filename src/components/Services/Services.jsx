"use client";

import { useState } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';
import { IoRocketSharp } from 'react-icons/io5';
import Title from '../Title/Title'; 
import styles from './Services.module.css'; 
import { useLang } from '../../hooks/useLang';

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { lang, translation } = useLang()

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={styles['services']} id="services">
      <div className="container">
        <Title section="titleServices" />

        <div className={styles['services__box']}>
          {/* UI Design */}
          <div className={styles['services__item']}>
            <div className={styles['services__item-title']}>
              <FaLaptopCode className={styles['services__icon']} size={30} />
              <h3 className={styles['services__heading']}>{translation[lang].services.item_1.servicesHeading}</h3>
            </div>
            <p
              className={`${styles['services__description']} ${
                expandedIndex === 0 ? styles['expanded'] : ''
              }`}
            >
              {expandedIndex === 0
                ?  `${translation[lang].services.item_1.servicesDescriptionHidden}`
                : `${translation[lang].services.item_1.servicesDescription}` }
            </p>
            <button
              className={styles['services__btn-more']}
              onClick={() => toggleDescription(0)}
            >
              {expandedIndex === 0 ? `${translation[lang].services.showLess}` : `${translation[lang].services.learnMore}`}
            </button>
          </div>

          {/* UX Research */}
          <div className={styles['services__item']}>
            <div className={styles['services__item-title']}>
              <MdSearch className={styles['services__icon']} size={30} />
              <h3 className={styles['services__heading']}>{translation[lang].services.item_2.servicesHeading}</h3>
            </div>
            <p
              className={`${styles['services__description']} ${
                expandedIndex === 1 ? styles['expanded'] : ''
              }`}
            >
              {expandedIndex === 1
                ? `${translation[lang].services.item_2.servicesDescriptionHidden}`
                : `${translation[lang].services.item_2.servicesDescription}` }
            </p>
            <button
              className={styles['services__btn-more']}
              onClick={() => toggleDescription(1)}
            >
             {expandedIndex === 1 ? `${translation[lang].services.showLess}` : `${translation[lang].services.learnMore}`}
            </button>
          </div>

          {/* Prototyping */}
          <div className={styles['services__item']}>
            <div className={styles['services__item-title']}>
              <IoRocketSharp className={styles['services__icon']} size={30} />
              <h3 className={styles['services__heading']}>{translation[lang].services.item_3.servicesHeading}</h3>
            </div>
            <p
              className={`${styles['services__description']} ${
                expandedIndex === 2 ? styles['expanded'] : ''
              }`}
            >
              {expandedIndex === 2
                ? `${translation[lang].services.item_3.servicesDescriptionHidden}`
                : `${translation[lang].services.item_3.servicesDescription}` }
            </p>
            <button
              className={styles['services__btn-more']}
              onClick={() => toggleDescription(2)}
            >
              {expandedIndex === 2 ? `${translation[lang].services.showLess}` : `${translation[lang].services.learnMore}`}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
