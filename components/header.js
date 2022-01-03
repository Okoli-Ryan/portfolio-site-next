import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import hamburger from "../public/images/menu.svg";
import { AnimatePresence, motion } from "framer-motion";
import { delayVariant, spinVariant } from "../variants";
import Cancel from "../public/images/cancel.svg";

export default function Header() {
  // const history = useHistory();
  // const location = useLocation();
  const router = useRouter();
  const [display, setDisplay] = useState(false);

  const homePage = () => {
    setDisplay(false);
    router.push("/");
  };

  const servicesPage = () => {
    setDisplay(false);
    router.push("/services");
  };

  const projectsPage = () => {
    setDisplay(false);
    router.push("/projects");
  };

  const contactPage = () => {
    setDisplay(false);
    router.push("/contact");
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <div className="logocover cursor" onClick={homePage}>
            OU
          </div>
        </div>
        <div className="menu">
          <div className="ham-container">
            <Image
              src={hamburger}
              priority={true}
              layout="fixed"
              width={35}
              height={35}
              alt="sidebar menu"
              onClick={() => setDisplay(true)}
              className="cursor ham"
            />
          </div>
          {/* <button
            style={{
              color: router.href === "projects" ? "#4f99b2" : null,
            }}
            className="menu-item-desktop"
            onClick={projectsPage}
            // onClick={projectsPage}
          >
            Projects
          </button> */}
          <Link href="/projects">
            <a
              className="menu-item-desktop"
              style={{
                color: router.href === "projects" ? "#4f99b2" : "#000",
              }}>
              Projects
            </a>
          </Link>
          <Link href="/services">
            <a
              className="menu-item-desktop"
              style={{
                color: router.href === "services" ? "#4f99b2" : "#000",
              }}>
              Services
            </a>
          </Link>
          <Link href="/contact">
            <a
              className="menu-item-desktop"
              style={{
                color: router.href === "contact" ? "#4f99b2" : "#000",
              }}>
              Contact
            </a>
          </Link>
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        {display && (
          <>
            <motion.div
              variants={delayVariant}
              style={{ height: "100vh", zIndex: 1002, position: "fixed" }}
              initial="initial"
              exit="initial"
              animate="enter"
              transition="transition">
              <div className="menubar-container">
                <div className="cancel" onClick={() => setDisplay(false)}>
                  <motion.div
                    animate="rotate"
                    exit="out"
                    variants={spinVariant}>
                    <Image
                      className="cursor"
                      width={28}
                      height={28}
                      priority
                      src={Cancel}
                      alt="cancel button"
                    />
                  </motion.div>
                </div>
                <div className="menu-item cursor" onClick={homePage}>
                  Home
                </div>
                <div className="menu-item cursor" onClick={servicesPage}>
                  Services
                </div>
                <div className="menu-item cursor" onClick={projectsPage}>
                  Projects
                </div>
                <div className="menu-item cursor" onClick={contactPage}>
                  Contact
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>
        {`
          .header {
            background-color: #f5f7fa;
            justify-content: space-between;
            /* margin */
            /* background: #ebeadf52; */
            height: 4rem;
            width: 100%;
            z-index: 2;
            display: flex;
            position: fixed;
            top: -0rem;
            z-index: 1000;
            padding: 0 1rem;
          }

          .logo {
            width: 50%;
            height: 100%;
            font-size: 1.4rem;
            color: black;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            font-weight: 700;
            display: flex;
            align-items: center;
          }

          .logocover {
            background-color: #4f99b2;
            border-radius: 50%;
            padding: 0.5rem;
            font-size: 1.2rem;
            color: white;
            cursor: pointer;
            /* box-shadow: 0px 0px 5px 2px #102350; */
          }

          .menu {
            width: 50%;
            height: 100%;
            display: flex;
            margin-left: 0;
            padding-right: 1rem;
            justify-content: flex-end;
            align-items: center;
            /* padding: 0 2rem; */
          }

          .ham-container {
            display: none;
          }

          .menubar-container {
            position: fixed;
            z-index: 1002;
            width: 100vw;
            /* left: 100vw; */
            height: 100vh;
            background-color: #4f99b2;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem 0;
          }

          .menu-item {
            width: 80%;
            text-align: center;
            padding: 0.5rem;
            font-size: 2rem;
            color: white;
            border: 1px solid white;
            border-radius: 0.8rem;
            margin-bottom: 1rem;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            transition: background-color 0.3s ease-in-out;
          }

          .menu-item:hover {
            background-color: rgb(155, 155, 155);
          }

          .contact-container {
            position: absolute;
            bottom: 1.5rem;
            display: flex;
            height: 1.5rem;
            width: 100%;
            justify-content: space-around;
          }

          .contact-option {
            height: 2rem;
            width: 2rem;
            position: relative;
          }

          .contact-option img {
            width: 100%;
            height: 100%;
          }

          .cancel {
            height: 1.8rem;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            position: absolute;
            top: 1.5rem;
            right: 2rem;
          }

          .menu-header {
            position: absolute;
            top: 1.5rem;
            display: flex;
            height: 1.5rem;
            width: 100%;
            justify-content: space-evenly;
          }

          .menu-item-desktop {
            margin-right: 1rem;
            padding: 0.7rem 2rem;
            transition: all 0.3s ease-in-out;
            text-decoration: none;
            font-size: 1rem;
            font-family: "Sarala", sans-serif;
            /* font-weight: 500; */
          }

          .menu-item-desktop:hover {
            background-color: #4f99b2;
            color: white !important;
          }

          .menu-item-desktop:last-of-type(las) {
            margin-right: 1rem;
          }

          .whatsapp-no {
            position: absolute;
            left: -1rem;
            top: -2.2rem;
            /* width: 3rem; */
            border: none;
            width: max-content;
            color: white;
            padding: 0.3rem;
            background-color: rgb(92, 92, 92);
          }

          @media only screen and (max-width: 750px) {
            .ham-container {
              display: block;
            }

            .menu-item-desktop {
              display: none;
            }
          }

          @media only screen and (max-height: 400px) {
            .menu-item {
              font-size: 1.2rem;
              padding: 0.2rem;
              top: 1rem;
              position: relative;
            }

            .cancel {
              right: 0;
              padding-right: 1rem;
            }
          }
        `}
      </style>
    </>
  );
}
