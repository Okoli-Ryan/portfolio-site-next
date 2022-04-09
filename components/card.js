import React, { useState, useRef } from "react";
import Image from "next/image";

export default function Card({
  title,
  body,
  gitLink,
  siteLink,
  tools,
  description,
  disabled,
  setData,
}) {
  const [display, setDisplay] = useState(false);
  const options = useRef(0);

  const goToCode = () => {
    window.open(gitLink, "_blank");
  };

  const goToSite = () => {
    window.open(siteLink, "_blank");
  };

  return (
    <>
      <div
        className="card cursor"
        onClick={() => {
          if (!disabled)
            setData({
              display: true,
              data: {
                title,
                tools,
                description,
                body,
                gitLink,
                siteLink,
              },
            });
        }}>
        <div className="card-body">
          <div className="body-img">
            <Image
              width="10vw"
              height="8vw"
              className="avatar"
              layout="responsive"
              src={body}
              alt="project icon"
            />
          </div>
        </div>
        <div className="card-title">{title}</div>
        {!disabled && (
          <div
            className="card-options-container"
            style={{ display: display ? "flex" : "none" }}
            ref={options}>
            <div
              className={`card-options ${!gitLink && "card-options__disabled"}`}
              onClick={goToCode}>
              View Code
            </div>
            <div className="card-options" onClick={goToSite}>
              Go to Project
            </div>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .card {
            width: 15rem;
            /* width: 100%; */
            height: 15rem;
            display: flex;
            flex-direction: column;
            padding: 1rem;
            box-shadow: -1px 1px 10px 0px #3257ac;
            margin: 1rem 0;
            justify-content: space-between;
            position: relative;
            /* max-width: 25rem; */
          }

          .card:focus {
            outline: none;
          }

          .card:hover {
            background-color: aliceblue;
          }

          .card-title {
            font-size: 1rem;
            font-weight: 600;
            background-color: #4f99b2;
            height: 16%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            padding: 0 1rem;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
          }

          .card-body {
            /* padding: 0 1rem 1rem 1rem; */
            font-size: 1.2rem;
            height: 84%;
            padding: 0.5rem;
            /* background-color: #3257ac; */
          }

          .card-options-container {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }

          .card-options-container::after {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: "";
            opacity: 0.7;
            position: absolute;
            background-color: white;
          }

          .card-options {
            padding: 1rem 2rem;
            width: 80%;
            text-align: center;
            background-color: #4f99b2;
            color: white;
            font-family: "Sarala", sans-serif;
            border-radius: 0.5rem;
            z-index: 2;
          }

          .card-options__disabled {
            opacity: .7
          }

          .card-body .body-img {
            width: 100%;
            height: 100%;
            position: relative;
            /* animation: pulse 1s infinite alternate; */
          }

          .card:hover .body-img {
            animation: pulse 2s infinite forwards;
          }

          @keyframes pulse {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }

          

          

            .card {
              margin-right: 1rem;
            }
          }

          @media only screen and (max-width: 511px) {
            .card {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
}
