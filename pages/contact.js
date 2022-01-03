/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { delayVariant } from "../variants";
import emailJs from "emailjs-com";
import Github from "../public/images/github-blue.svg";
import Whatsapp from "../public/images/whatsapp-blue.svg";
import LinkedIn from "../public/images/linkedin-blue.svg";
import Email from "../public/images/email-blue.svg";

export default function Contact() {
  const [sending, setSending] = useState("init");

  const cont = useRef(0);

  useEffect(() => {
    cont.current.scrollIntoView();
  }, []);

  const sendButton = (
    <button
      type="submit"
      className="send-button"
      style={{ backgroundColor: "#4f99b2" }}>
      Send Email
    </button>
  );

  const sendingButton = (
    <button
      type="submit"
      className="send-button"
      style={{ backgroundColor: "orange" }}>
      ...Sending
    </button>
  );

  const failedButton = (
    <button
      type="submit"
      className="send-button"
      style={{ backgroundColor: "red" }}>
      Sending failed
    </button>
  );

  const sentButton = (
    <button
      type="submit"
      className="send-button"
      style={{ backgroundColor: "yellowgreen" }}>
      Email Sent!
    </button>
  );

  const goToGithub = () => {
    window.open("https://github.com/Okoli-Ryan", "_blank");
  };

  const goToLinkedin = () => {
    window.open("https://linkedin.com/in/okoliugo", "_blank");
  };

  const goToMail = () => {
    window.open("mailto:okoliryan50@gmail.com", "_blank");
  };

  function sendEmail(e) {
    e.preventDefault();
    const send = e.target;
    setSending("sending");
    emailJs
      .sendForm(
        process.env.service_id,
        process.env.template_id,
        e.target,
        process.env.user_id
      )
      .then(
        (result) => {
          setSending("sent");
          send.reset();
          console.log(result);
          setTimeout(() => {
            setSending("init");
          }, 4000);
        },
        (error) => {
          console.log(error);
          setSending("failed");
          setTimeout(() => {
            setSending("init");
          }, 4000);
        }
      );
  }

  let Button = sendButton;
  if (sending === "sending") Button = sendingButton;
  else if (sending === "sent") Button = sentButton;
  else if (sending === "failed") Button = failedButton;
  else if (sending === "init") Button = sendButton;

  return (
    <motion.div
      className="contactpage"
      variants={delayVariant}
      exit="exit"
      initial="initial"
      animate="enter"
      transition="transition">
      <div className="contactpage">
        <div className="cont" ref={cont} style={{ height: "4.5rem" }}></div>
        <div className="contactpage-container">
          <div className="contactpage-left">
            <h1>Let's Talk!</h1>
            <h2>I'd love to know what you have to say</h2>
            <div className="other-contacts">
              <button className="tab cursor" onClick={goToGithub}>
                <Image src={Github} width={16} height={16} alt="Github link" />
                <span>github.com/Okoli-Ryan</span>
              </button>
              <button className="tab cursor" onClick={goToLinkedin}>
                <Image
                  src={LinkedIn}
                  width={16}
                  height={16}
                  alt="Linkedin link"
                />
                <span>linkedin.com/in/okoliugo</span>
              </button>
              <button className="tab cursor" onClick={goToMail}>
                <Image src={Email} width={16} height={16} alt="email link" />
                <span>okoliryan50@gmail.com</span>
              </button>
            </div>
          </div>
          <div className="contactpage-right">
            <form onSubmit={sendEmail}>
              <h2>Contact Me</h2>
              <div className="form-container">
                <section>
                  <label htmlFor="name">What can I call you?</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    name="name"
                    required
                  />
                </section>
                <section>
                  <label htmlFor="email">What Email do I reply to?</label>
                  <input
                    type="text"
                    id="email"
                    placeholder="JohnDoe@email.com"
                    name="email"
                    required
                  />
                </section>
                <section>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="5"
                    placeholder="I like your website :)"
                    required></textarea>
                </section>
                <section>{Button}</section>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contactpage-container * {
            font-family: "Justice-Spartan", -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
              "Helvetica Neue", sans-serif;
          }

          .contactpage-container {
            padding: 1rem;
            padding-bottom: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            height: calc(90%-2rem);
          }

          .contactpage-left {
            width: 50%;
            height: 100%;
            padding: 1rem;
            position: relative;
            /* top: -4rem; */
          }

          .contactpage-left > h2 {
            text-align: left;
            color: #2b2b2b;
            margin: 0;
          }

          .contactpage-left > h1 {
            color: #4f99b2;
            text-align: left;
            margin: 0;
          }

          .contactpage-right {
            width: 50%;
            display: flex;
            justify-content: center;
          }

          .contactpage-container section {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
          }

          .contactpage-container section:last-of-type {
            margin-top: 0;
          }

          .contactpage-right form {
            width: 90%;
          }

          form h2 {
            background-color: #4f99b2;
            color: white;
            text-align: center;
            border-radius: 10px;
            padding: 0.5rem;
            margin-bottom: 0.4rem;
          }

          form input,
          form textarea,
          form label {
            padding: 0.6rem;
            font-size: 1rem;
            outline: none;
          }

          form input,
          form textarea {
            border: 1px solid #afafaf;
            resize: none;
          }

          form input:focus,
          form textarea:focus {
            border: 1px solid #30c2f3;
          }

          form label {
            padding-bottom: 0.3rem;
            text-align: left;
          }

          .other-contacts {
            display: flex;
            flex-direction: column;
            width: max-content;
            margin-left: 0;
          }

          .tab {
            padding: 0.4rem 0.6rem;
            display: flex;
            align-items: center;
            border: 1px solid #4f99b2;
            margin: 0.5rem 0;
          }

          .tab img {
            height: 2rem;
            width: 2rem;
          }

          .tab span {
            font-size: 1rem;
            font-weight: 600;
            padding-left: 1rem;
          }

          .tab:focus {
            background-color: rgb(61, 61, 61);
          }

          @media only screen and (max-width: 768px) {
            .contactpage-left {
              /* display: none; */
              width: 100%;
              top: 0;
              text-align: center;
              padding: 0;
            }

            .contactpage-left h1,
            .contactpage-left h2 {
              text-align: center;
            }

            .contactpage-right {
              width: 100%;
              max-width: 30rem;
            }

            .contactpage-container {
              flex-direction: column;
            }

            .other-contacts {
              margin: 0 auto;
            }
          }

          .button {
            /* padding: 0 1.4rem; */
            border-radius: 0.5rem;
            background-color: #ec6b53;
            z-index: 2;
            position: absolute;
            bottom: 8%;
            padding: 0;
          }

          .button p {
            font-family: "Salara", sans-serif;
            font-size: 1.3rem;
            color: white;
            padding: 0 1rem;
            margin: 1.2rem 0;
          }
        `}
      </style>
    </motion.div>
  );
}
