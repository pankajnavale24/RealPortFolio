import React from "react";
import socialMedia from "../../public/social-media.png";
import ecommerce from "../../public/ecommerce.png";
import taskManager from "../../public/task-manager.png";
import blogPlatform from "../../public/blog-platform.png";
import chatApp from "../../public/chat-app.png";
import jobBoard from "../../public/job-board.png";
import fitnessTracker from "../../public/fitness-tracker.png";
import learningPlatform from "../../public/learning-platform.png";
import recipeApp from "../../public/recipe-app.png";
import eventManagement from "../../public/event-management.png";

const projectItems = [
  {
    id: 1,
    image: socialMedia,
    title: "Word to PDF Convertor",
    description: "Build a platform for seamless conversion of Word documents to PDFs with easy upload, single-click conversion, and quick download capabilities.",
    features: ["Cloud Storage Integration", "Real-time notifications", "Media uploads", "Batch Conversion", "Cloud Storage Integration"],
    sourceCode: "https://github.com/pankajnavale24/WordToPdfApp",
    liveDemo: "https://word-to-pdf-app-frontend.vercel.app/"
  },
  {
    id: 2,
    image: taskManager,
    title: "Task Management System",
    description: "Develop a tool for managing tasks and projects, including creating tasks, setting deadlines, and tracking progress.",
    features: ["Task creation", "Deadlines", "Progress tracking", "User authentication", "Task categorization"],
    sourceCode: "https://github.com/yourusername/task-manager",
    liveDemo: "https://yourliveurl.com/task-manager"
  },
  {
    id: 3,
    image: chatApp,
    title: "Real-Time Chat Application",
    description: "Create a chat application that allows users to send and receive messages in real-time.",
    features: ["User authentication", "Real-time messaging", "Chat rooms", "Private messages", "Notifications"],
    sourceCode: "https://github.com/yourusername/chat-app",
    liveDemo: "https://yourliveurl.com/chat-app"
  },
  
];

function Projects() {
  return (
    <section name="Project" className="max-w-screen-2xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Projects</h1>
        <p className="text-lg text-gray-600">Here are some of the projects I've worked on:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectItems.map(({ id, image, title, description, features, sourceCode, liveDemo }) => (
          <div
            key={id}
            className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 p-4 md:p-6"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="pt-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
              <p className="text-gray-600 mb-4">{description}</p>
              <ul className="list-disc pl-5 mb-4">
                {features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
              <div className="flex justify-between">
                <a
                  href={sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Source Code
                </a>
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
