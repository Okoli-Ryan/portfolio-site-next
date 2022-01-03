import React, { useEffect, useRef } from "react";
import Card from "../components/card";
import JavaScript from "../public/images/javascript-js-vector-logo-E19624B9BC-seeklogo.com/javascript-js-seeklogo.com.svg";
import Sass from "../public/images/sass-vector-logo-547F7B568B-seeklogo.com/sass-seeklogo.com.svg";
import CSS from "../public/images/css-3-vector-logo-5D54392B1A-seeklogo.com/css-3-seeklogo.com.svg";
import Bootstrap from "../public/images/bootstrap-vector-logo-29EB3BE67A-seeklogo.com/bootstrap-seeklogo.com.svg";
import MaterialUI from "../public/images/material-ui-vector-logo-F3917B6B98-seeklogo.com/material-ui-seeklogo.com.svg";
import Firebase from "../public/images/firebase-vector-logo-025F043574-seeklogo.com/firebase-seeklogo.com.svg";
import ReactLogo from "../public/images/react-vector-logo-C1B79914E9-seeklogo.com/react-seeklogo.com.svg";
import ReduxLogo from "../public/images/redux-vector-logo-677C048347-seeklogo.com/redux-seeklogo.com.svg";
import Git from "../public/images/git-vector-logo-B46831874B-seeklogo.com/git-seeklogo.com.svg";
import PWALogo from "../public/images/pwa-logo.svg";
import Express from "../public/images/express-js-vector-logo-ED2F5D002E-seeklogo.com/express-js-seeklogo.com.svg";
import Node from "../public/images/nodejs-icon.svg";
import MySQL from "../public/images/mysql-vector-logo-D3FE29DD9A-seeklogo.com/mysql-seeklogo.com.svg";
import Mongo from "../public/images/mongodb-vector-logo-F07B351EDB-seeklogo.com/mongodb-seeklogo.com.svg";
import Next from "../public/images/next-js-vector-logo-A7AE4339B6-seeklogo.com/next-js-seeklogo.com.svg";
import TypeScript from "../public/images/typescript-vector-logo-E8A6AEA178-seeklogo.com/typescript-seeklogo.com.svg";
import { delayVariant } from "../variants";
import { motion } from "framer-motion";

export default function Services() {
  const cont = useRef(0);

  useEffect(() => {
    cont.current.scrollIntoView();
  }, []);

  return (
    <motion.div
      variants={delayVariant}
      exit="exit"
      initial="initial"
      animate="enter"
      transition="transition">
      <div>
        <div className="cont" ref={cont} style={{ height: "4.5rem" }}></div>
        <div className="services-container">
          <div className="topic">Mobile Development</div>
          <div className="card-container">
            <Card title="React-Native" body={ReactLogo} disabled={true} />
          </div>

          <div className="topic">Web Development</div>
          <div className="card-container">
            <Card title="Bootstrap" body={Bootstrap} disabled={true} />
            <Card title="CSS 3" body={CSS} disabled={true} />
            <Card title="Firebase" body={Firebase} disabled={true} />
            <Card title="JavaScript" body={JavaScript} disabled={true} />
            <Card title="Material UI" body={MaterialUI} disabled={true} />
            <Card title="PWAs" body={PWALogo} disabled={true} />
            <Card title="ReactJs" body={ReactLogo} disabled={true} />
            <Card title="NextJs" body={Next} disabled={true} />
            <Card title="Sass" body={Sass} disabled={true} />
            <Card title="TypeScript" body={TypeScript} disabled={true} />
          </div>
          <div className="topic">Backend Development</div>
          <div className="card-container">
            <Card title="NodeJs" body={Node} disabled={true} />
            <Card title="Express" body={Express} disabled={true} />
            <Card title="MongoDb" body={Mongo} disabled={true} />
            <Card title="MySQL" body={MySQL} disabled={true} />
          </div>
          <div className="topic">State Management</div>
          <div className="card-container">
            <Card title="Redux" body={ReduxLogo} disabled={true} />
          </div>
          <div className="topic">Version Control</div>
          <div className="card-container">
            <Card title="Git" body={Git} disabled={true} />
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
  );
}
