import React, { useRef, useEffect, useState } from "react";
import Card from "../components/card";
import Message from "../public/images/message.svg";
import Todo from "../public/images/todoList.svg";
import Music from "../public/images/music.svg";
import Coin from "../public/images/coin.svg";
import Airplane from "../public/images/airplane.svg";
import Result from "../public/images/result.svg";
import Chart from "../public/images/chart-svgrepo-com.svg";
import Cake from "../public/images/cake-svgrepo-com.svg";
import Details from "../components/detailsModal";
import Niger from "../public/images/nigeria-svgrepo-com.svg";
import Database from "../public/images/database-svgrepo-com.svg";
import Rocket from "../public/images/rocket.svg";
import { motion } from "framer-motion";
import { delayVariant } from "../variants";

export default function Projects() {
  const [detailsState, setDetailsState] = useState({
    display: false,
    data: null,
  });

  const closeModal = () => {
    setDetailsState((prev) => {
      return { ...prev, display: false };
    });
  };
  const goToGithub = () => {
    window.open("https://github.com/Okoli-Ryan?tab=repositories", "_blank");
  };

  const cont = useRef(0);

  useEffect(() => {
    cont.current.scrollIntoView();
  }, []);

  return (
    <>
      {detailsState.display && (
        <Details closeModal={closeModal} data={detailsState.data} />
      )}
      <motion.div
        variants={delayVariant}
        exit="exit"
        initial="initial"
        animate="enter"
        transition="transition">
        <div className="scroll">
          <div className="cont" ref={cont} style={{ height: "4.5rem" }}></div>
          <div className="services-container">
            <div className="topic">Fullstack Projects</div>
            <div className="card-container">
              <Card
                title="Billsclan.Shop"
                body={Coin}
                gitLink={null}
                siteLink="https://billsclan.shop/figocard"
                disabled={false}
                description="Storefront where users can buy goods and services online"
                tools={[
                  "html",
                  "css",
                  "ReactJs",
                  "Bootstrap 5",
                  ".NET 6",
                  "Postgres SQL",
                  "PayStack",
                  "Flutterwave",
                ]}
                setData={setDetailsState}
              />
            </div>
            <div className="topic">React Projects</div>
            <div className="card-container">
              <Card
                title="Cake Ferries"
                body={Cake}
                gitLink="https://github.com/Okoli-Ryan/cakeFerries"
                siteLink="https://cakeferries.herokuapp.com/"
                disabled={false}
                description="A landing page + authentication page for a cake delivery company"
                tools={["react", "css"]}
                setData={setDetailsState}
              />
              <Card
                title="Mailman"
                body={Message}
                gitLink="https://github.com/Okoli-Ryan/Mailman"
                siteLink="https://mailman.herokuapp.com"
                disabled={false}
                tools={["redux", "reactJs", "react-hooks", "firebase"]}
                description="A real-time chatting application built using ReactJS, Redux for state management and firebase firestore"
                setData={setDetailsState}
              />
              <Card
                title="Raadio"
                body={Music}
                gitLink="https://github.com/Okoli-Ryan/Music-Player"
                siteLink="https://music-player-concept.herokuapp.com"
                disabled={false}
                description="An offline music player loaded with 2 songs"
                tools={["react", "react-hooks", "css"]}
                setData={setDetailsState}
              />
              <Card
                title="Space Tourism"
                body={Rocket}
                gitLink="https://github.com/Okoli-Ryan/space-tourism"
                siteLink="https://space-tourism0.herokuapp.com/"
                disabled={false}
                description="A four page website about space"
                tools={[
                  "react",
                  "react-hooks",
                  "framer-motion",
                  "react-router-dom",
                ]}
                setData={setDetailsState}
              />
              <Card
                title="Todo app + firebase"
                body={Todo}
                gitLink="https://github.com/Okoli-Ryan/TodoApp"
                siteLink="https://todo-app-firebase0.herokuapp.com/"
                disabled={false}
                description="A simple online todo app with authentication and data storage with firebase"
                tools={["react", "react-hooks", "firebase"]}
                setData={setDetailsState}
              />
            </div>
            <div className="topic">Web Designs</div>
            <div className="card-container">
              <Card
                title="Click-up Challenge"
                body={Chart}
                gitLink="https://github.com/Okoli-Ryan/Clickup-Challenge"
                siteLink="https://clickup-challenge.netlify.app/"
                disabled={false}
                description="A landing page challenge from Clickup"
                tools={["html", "scss", "webpack", "vanilla javascript"]}
                setData={setDetailsState}
              />

              <Card
                title="Waec Result Checker"
                body={Result}
                gitLink="https://github.com/Okoli-Ryan/Waec-Demo"
                siteLink="https://waec-result-checker.netlify.app"
                disabled={false}
                description="Remake of the waec result checker website: https://www.waecdirect.org"
                tools={["html", "css", "jquery", "bootstrap"]}
                setData={setDetailsState}
              />
            </div>
            <div className="topic">React Native Projects</div>
            <div className="card-container">
              <Card
                title="Wazobia app"
                body={Niger}
                gitLink="https://github.com/Okoli-Ryan/9japedia"
                siteLink="https://exp.host/@okoliryan50/Naijapedia/index.exp?sdkVersion=42.0.0"
                disabled={false}
                setData={setDetailsState}
                description="An Android multimedia encyclopaedia for Nigeria in its 3 main languages: Hausa, Igbo and Yoruba. *Accessible from Expo app*"
                tools={[
                  "react-native",
                  "expo",
                  "redux",
                  "react-hooks",
                  "firebase",
                  "react-navigation",
                ]}
              />
              <Card
                title="Inputpedia app"
                body={Database}
                gitLink="https://github.com/Okoli-Ryan/Inputpedia"
                siteLink="https://exp.host/@okoliryan50/InputPedia/index.exp?sdkVersion=42.0.0"
                disabled={false}
                setData={setDetailsState}
                description="Android Application to update and fill the database for the Wazobia app by collecting textual and audio data. *Accessible from Expo app*"
                tools={[
                  "react-native",
                  "redux",
                  "react-hooks",
                  "firebase",
                  "react-navigation",
                ]}
              />
            </div>
            <div className="topic">
              Check out more on my{" "}
              <span onClick={goToGithub}>github page!</span>
            </div>
          </div>
        </div>
        <style jsx>
          {`
        .card-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 0 0 1rem 0;
          }

          .topic span {
            color: #4f99b2;
            cursor: pointer;
          }

          .topic {
            font-size: 2.5rem;
            text-align: center;
            color: #2c313a;
            font-family: "league Spartan", -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
              "Helvetica Neue", sans-serif;
            font-weight: 800;
          }

          @media only screen and (min-width: 576px) {
            .topic {
              font-size: 2.5rem;
              /* text-align: left; */
            }
            /* 
	.card-container{
		justify-content: flex-start;
	} */`}
        </style>
      </motion.div>
    </>
  );
}
