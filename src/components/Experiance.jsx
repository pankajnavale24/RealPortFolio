import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import mongodb from "../../public/mongodb.jpg";
import Express from "../../public/express.png";
import react from "../../public/reactjs.png";
import node from "../../public/node.png";
import javascript from "../../public/javascript.png";

function Experiance() {
  const cardItem = [
    { id: 1, logo: mongodb, name: "MongoDB" },
    { id: 2, logo: Express, name: "Express" },
    { id: 3, logo: react, name: "React Js" },
    { id: 4, logo: node, name: "Node Js" },
    { id: 5, logo: javascript, name: "JavaScript" },
    { id: 6, logo: html, name: "HTML 5" },
    { id: 7, logo: css, name: "CSS 3" },
  ];

  return (
    <section name="Experiance" className="max-w-screen-2xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Experience</h1>
        <p className="text-lg text-gray-600">
          I have over 2 years of experience with the following technologies:
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
          >
            <img
              src={logo}
              alt={name}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiance;
