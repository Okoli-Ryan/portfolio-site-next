/* eslint-disable react/no-unescaped-entities */
import { useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Boy from "../public/images/boy.png";
import { delayVariant } from "../variants";

export default function Home() {
  const about = useRef(0);

  const cont = useRef(0);

  useEffect(() => {
    cont.current.scrollIntoView();
  }, []);

  const gotoAbout = () => {
    about.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="cont"
        ref={cont}
        style={{ height: "4rem", backgroundColor: "#f5f7fa" }}></div>
      <motion.div
        initial="initial"
        animate="enter"
        style={{ position: "relative" }}
        exit="exit"
        variants={delayVariant}
        transition="transition">
        <div className="hero-image">
          <div className="hero-container">
            <h1>Okoli Ugochukwu</h1>
            <h3>Web Developer || Mobile Developer</h3>
          </div>
          <button className="see-more" onClick={gotoAbout}>
            See more
          </button>
        </div>
        <div className="wave-container">
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto">
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(79, 153, 178,0.7)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(79, 153, 178,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(79, 153, 178,0.3)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="7"
                fill="rgba(79, 153, 178, 0.2)"
              />
            </g>
          </svg>
        </div>
      </motion.div>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={delayVariant}
        ref={about}>
        <div className="about-container">
          <div className="about-left">
            <div className="avatar-img">
              <Image
                priority
                className="avatar"
                layout="responsive"
                src={Boy}
                alt="Avatar image"
              />
            </div>
          </div>
          <div className="about-right">
            Hi!👋🏽 <br />
            <br />
            My name is Okoli Ugochukwu, and I'm a Front End Engineer based in
            Nigeria.
            <br />
            <br /> I see myself as a passionate developer who loves coding and
            bringing design imaginations to life. I focus more on building
            products using JavaScript, specifically ReactJs and React-Native.
            <br />
            <br /> During my free time, I love watching Basketball 🏀 and
            watching movies 🎬.
            <br />
            <br /> Feel free to see some of my work at the{" "}
            <Link href="/projects">
              <a>Projects Page</a>
            </Link>
            {", "} contact me{" "}
            <Link href="/contact">
              <a>here</a>
            </Link>{" "}
            or check out{" "}
            <a
              download="Okoli Ugochukwu Resume.pdf"
              href="https://github.com/Okoli-Ryan/My-Resume-/blob/master/Ugo's%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer">
              my Resume
            </a>
          </div>
        </div>

        <div className="work-container">
          <h1>Experience</h1>
          <ul>
            <li className="work-item">
              <h2>
                Lead Software Engineer at <span>Peddle.ng</span>
              </h2>
              <h5>Novemer 2021 - Now</h5>
              <p>
                I lead a team of developers to the production of an ecommerce
                platform for a startup, and make decisions for the facilitation
                of company growth. I also work with a team of UI/UX developers
                to convert wireframes into accurate HTML and CSS code, and
                further translating this code to ReactJS (JSX) syntax.
              </p>
            </li>
            <li className="work-item">
              <h2>
                Software Engineering Intern at <span>Eazox</span>
              </h2>
              <h5>June 2020 - May 2021</h5>
              <p>
                I served as an intern where I participated in the development of
                the company app using React-Native. I was also in charge of
                organizing the backend of the system with Firebase and I
                organized and constructed the navigation structure of the app
                with the React-Navigation module. During this timeline, I was
                subjected to code reviews by the senior developer.
              </p>
            </li>
          </ul>
          <h1>Education</h1>
          <ul>
            <li className="work-item">
              <h2>
                Computer Engineering Student at{" "}
                <span>Obafemi Awolowo University, Ile-Ife</span>
              </h2>
              <h5>August 2016 - November 2021</h5>
              <p>
                I completed and acquired my Bsc. in Computer Engineering at the
                university. I was also enrolled in courses such as:
                <ul>
                  <li>Data Structures and Algorithms</li>
                  <li>Computer Architecture</li>
                  <li>Object-Oriented Programming</li>
                </ul>
              </p>
            </li>
          </ul>
        </div>
      </motion.div>
      <style jsx>{`
        .waves {
          width: 100%;
          height: 40vh;
          margin-bottom: -7px; /*Fix for safari gap*/
          min-height: 100px;
          max-height: 220px;
        }

        .wave-container {
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 100%;
        }

        .parallax > use {
          animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5)
            infinite;
        }
        .parallax > use:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 7s;
        }
        .parallax > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
        }
        .parallax > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 13s;
        }
        .parallax > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 20s;
        }
        @keyframes move-forever {
          0% {
            transform: translate3d(-90px, 0, 0);
          }
          100% {
            transform: translate3d(85px, 0, 0);
          }
        }

        .hero-image {
          width: 100%;
          min-height: 34rem;
          height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: #f5f7fa;
          background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
        }

        // .hero-image::before {
        //   content: "";
        //   top: 0;
        //   left: 0;
        //   right: 0;
        //   bottom: 0;
        //   opacity: 0.4;
        //   position: absolute;
        //   background: url("../images/background\ 2.jpg") no-repeat;
        //   background-size: cover;
        // }

        .hero-container * {
          text-align: center;
          position: relative;
          top: -3rem;
          height: max-content;
        }

        .hero-container h1 {
          font-size: 10vw;
          /* font-family: 'Montserrat', sans-serif; */
          font-family: "league Spartan", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
            "Helvetica Neue", sans-serif;
          font-weight: bolder;
          /* text-shadow: .5px .5px 4px #30353E; */
          color: #2c313a;
          margin-bottom: 0;
        }

        .hero-container h3 {
          font-size: 6vw;
          font-family: "Sarala", sans-serif;
          color: #2c313a;
          /* text-shadow: .5px .5px 4px black; */
          margin-top: -5px;
        }

        .see-more {
          margin-top: 10%;
          color: white;
          padding: 1rem 1.3rem;
          border-radius: 0.5rem;
          font-size: 1.2rem;
          font-family: "Sarala", sans-serif;
          background-color: #4f99b2;
          z-index: 2;
        }

        .about-container {
          display: flex;
          flex-direction: row-reverse;
          width: 100%;
          padding: 3rem 10% 1rem 10%;
        }

        .about-left {
          display: flex;
          width: 4ovw;
          justify-content: space-around;
        }

        .avatar-img {
          width: 40vw;
          height: 40vw;
          max-width: 15rem;
          max-height: 15rem;
          border-radius: 50%;
          margin-bottom: 1rem;
        }

        .avatar-img > span {
          object-fit: cover;
        }

        .about-container > div {
          // width: 50%;
          padding: 1rem;
        }

        .about-right span {
          color: #4f99b2;
        }

        .about-right {
          text-align: left;
          width: auto;
          line-height: 160%;
          font-size: 1.1rem;
          padding: 0;
        }

        .about-right a {
          color: #4f99b2;
          text-decoration: none;
          border-bottom: 2px solid #4f99b2;
        }

        .work-container {
          padding: 0 10% 1rem 10%;
        }

        .work-container h2,
        .work-container h5,
        .work-container h1,
        .work-container p {
          text-align: left;
        }

        .work-container h2 {
          color: #262626;
          font-size: 24px;
          margin-bottom: 0;
        }

        .work-container h1 {
          font-size: 32px;
        }

        .work-container span {
          color: #4f99b2;
        }

        .work-container h5 {
          font-size: 18px;
          color: #405b73;
          font-weight: 400;
          color: #4f99b2;
          margin-top: 0;
          margin-bottom: 1rem;
        }

        .work-container p {
          margin-top: 0;
          font-size: 16px;
          color: #262626;
        }

        @media only screen and (min-width: 425px) {
          .hero-container h1 {
            font-size: 3rem;
          }
          .hero-container h3 {
            font-size: 1.4rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          .wave-container {
            bottom: -0.5rem;
          }
        }

        @media only screen and (min-width: 920px) {
          .hero-image::before {
            background-position-y: 85%;
          }
        }

        @media only screen and (max-width: 425px) {
          .about-container,
          .work-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
        @media only screen and (max-width: 800px) {
          .about-container {
            flex-direction: column-reverse;
          }

          .about-container > div {
            width: 100%;
          }

          .about-left {
            width: 100%;
          }

          .about-right {
            width: 100%;
            padding: 0;
          }
        }
      `}</style>
    </>
  );
}
