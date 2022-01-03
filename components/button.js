import React from "react";

export default function Button({ text, style }) {
  return (
    <div className="button" style={style}>
      <p>{text}</p>
      <style jsx>
        {`
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
    </div>
  );
}
