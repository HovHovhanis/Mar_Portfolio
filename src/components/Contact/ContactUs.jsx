"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Title from "../Title/Title";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";

import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useLang } from "@/src/hooks/useLang";

const USER_ID = process.env.NEXT_PUBLIC_USER_ID;
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const { lang, translation } = useLang()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(
        (result) => {
          console.log("Message sent: ", result.text);
          setNotificationMessage(`${translation[lang].contact.massageOk}`);
          setShowNotification(true);

          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });

          // Скрыть уведомление через 3 секунды
          setTimeout(() => {
            setShowNotification(false);
          }, 3000);
        },
        (error) => {
          console.error("Error sending message: ", error.text);
          setNotificationMessage(`${translation[lang].contact.massageError}`);
          setShowNotification(true);

          // Скрыть уведомление через 3 секунды
          setTimeout(() => {
            setShowNotification(false);
          }, 3000);
        }
      );
  };

  return (
    <section className={styles["contact"]} id="contact">
      <div className="container">
        <Title section={"titleContact"} />

        <div className={styles["contact__box"]}>
          <div className={styles["contact__left"]}>
            <picture className={styles["contact__left-images"]}>
              <Image
                src={"/img/contact-img.jpeg"}
                alt="contact-img"
                width={300}
                height={350}
              />
            </picture>
            <ul className={styles["contact__soc-list"]}>
              <li className={styles["contact__soc-item"]}>
                <Link target="_blank" href={"https://web.whatsapp.com/"}>
                  <FaWhatsapp size={30} />
                </Link>
              </li>
              <li className={styles["contact__soc-item"]}>
                <Link target="_blank" href={"https://web.telegram.org/k/"}>
                  <FaTelegramPlane  size={30} />
                </Link>
              </li>
              <li className={styles["contact__soc-item"]}>
                <Link target="_blank" href={"https://www.facebook.com/share/16adpD4GzU/"}>
                  <FaFacebookF size={30} />
                </Link>
              </li>
            </ul>
            <div className={styles['contact__soc--box']}>
              <div className={styles['contact__soc--email']}>
                  <IoMail size={22} />
                  <p>marineadileyan03@gmail.com</p>
              </div>
              <div className={styles['contact__soc--tel']}>
                  <FaPhoneAlt size={22} />
                  <p>+374 98 55-47-57</p>
              </div>
            </div>
          </div>

          <div className={styles["contact__right"]}>
            <form
              onSubmit={handleSubmit}  // Используем onSubmit на форме
              className={styles["contact__form"]}
            >
              <div className={styles["contact__form-box"]}>
                <label
                  className={styles["contact__from-input--box"]}
                  htmlFor="firstName"
                >
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={translation[lang].contact.formName}
                    className={styles["contact__from-input"]}
                    required
                  />
                </label>
                <label
                  className={styles["contact__from-input--box"]}
                  htmlFor="lastName"
                >
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder={translation[lang].contact.formLastName}
                    className={styles["contact__from-input"]}
                    required
                  />
                </label>
              </div>
              <div className={styles["contact__form-box"]}>
                <label
                  className={styles["contact__from-input--box"]}
                  htmlFor="email"
                >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={translation[lang].contact.formEmail}
                    className={styles["contact__from-input"]}
                    required
                  />
                </label>
                <label
                  className={styles["contact__from-input--box"]}
                  htmlFor="phone"
                >
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={translation[lang].contact.formPhone}
                    className={styles["contact__from-input"]}
                  />
                </label>
              </div>
              <label
                className={styles["contact__form-textarea--box"]}
                htmlFor="message"
              >
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={translation[lang].contact.formMassage}
                  className={styles["contact__from-textarea"]}
                  required
                ></textarea>
              </label>
              <button type="submit" className={styles["contact__form-submit"]}>
                {translation[lang].contact.formButton}
              </button>
            </form>
          </div>
        </div>

        {/* Уведомление, которое появляется после отправки формы */}
        {showNotification && (
          <div className={styles["notification"]}>
            <p>{notificationMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
