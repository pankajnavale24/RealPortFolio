import React from "react";
import pic from "../../public/pic.png";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed"; // Check if this is a named export

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
            <p className="text-sm md:text-md text-justify">
              Hi, I'm Pankaj Navale. Currently pursuing a B.Tech in Information
              Technology at Government College of Engineering, Aurangabad. I'm
              dedicated to mastering the art of full-stack web development with
              a strong foundation in the MERN stack (MongoDB, Express.js,
              React.js, Node.js). I enjoy solving complex problems and turning
              ideas into reality through code. With over 500+ DSA questions
              solved, I'm a 2-star coder on CodeChef and a 4-star coder on
              HackerRank. Beyond coding, I actively participate in hackathons
              and coding contests, always eager to learn and innovate.
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://x.com/Pankaj_Navale24/" target="_blank" rel="noopener noreferrer">
                      <FaTwitter className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/pankajnavale24/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/pankajnavale24/" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/pankaj_navale24/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt="Pankaj Navale"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
