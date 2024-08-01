import React from "react";
import Slider from "react-slick";
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
    title: "Social Media Platform",
    description: "Build a platform where users can create profiles, post updates, like and comment on posts, and follow other users.",
    features: ["User authentication", "Real-time notifications", "Media uploads", "User profiles", "News feed"],
  },
  {
    id: 2,
    image: ecommerce,
    title: "E-Commerce Website",
    description: "Create an online store where users can browse products, add items to a cart, and make purchases.",
    features: ["Product catalog", "Shopping cart", "User authentication", "Payment integration", "Order management"],
  },
  {
    id: 3,
    image: taskManager,
    title: "Task Management System",
    description: "Develop a tool for managing tasks and projects, including creating tasks, setting deadlines, and tracking progress.",
    features: ["Task creation", "Deadlines", "Progress tracking", "User authentication", "Task categorization"],
  },
  {
    id: 4,
    image: blogPlatform,
    title: "Blog Platform",
    description: "Build a platform for users to write and publish blogs, comment on posts, and follow other authors.",
    features: ["Blog creation", "User authentication", "Comment system", "Categories", "Author profiles"],
  },
  {
    id: 5,
    image: chatApp,
    title: "Real-Time Chat Application",
    description: "Create a chat application that allows users to send and receive messages in real-time.",
    features: ["User authentication", "Real-time messaging", "Chat rooms", "Private messages", "Notifications"],
  },
  {
    id: 6,
    image: jobBoard,
    title: "Job Board",
    description: "Develop a platform where employers can post job listings, and job seekers can apply and search for jobs.",
    features: ["Job listings", "Application management", "User authentication", "Resume uploads", "Search filters"],
  },
  {
    id: 7,
    image: fitnessTracker,
    title: "Fitness Tracker",
    description: "Build an application for tracking workouts, goals, and progress over time.",
    features: ["Workout logging", "Progress tracking", "Goal setting", "User authentication", "Data visualization"],
  },
  {
    id: 8,
    image: learningPlatform,
    title: "Online Learning Platform",
    description: "Create a platform for online courses where users can enroll, complete courses, and track their progress.",
    features: ["Course catalog", "Video tutorials", "Quizzes", "User authentication", "Progress tracking"],
  },
  {
    id: 9,
    image: recipeApp,
    title: "Recipe Sharing App",
    description: "Develop an app where users can share and discover recipes, create shopping lists, and rate recipes.",
    features: ["Recipe creation", "Search and filtering", "User authentication", "Ratings", "Shopping lists"],
  },
  {
    id: 10,
    image: eventManagement,
    title: "Event Management System",
    description: "Build a system for organizing and managing events, including event creation, registration, and notifications.",
    features: ["Event creation", "User registration", "Ticketing", "Reminders", "Event categorization"],
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Projects() {
  return (
    <section name="Project" className="max-w-screen-2xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Projects</h1>
        <p className="text-lg text-gray-600">Here are some of the projects I've worked on:</p>
      </div>
      <Slider {...sliderSettings} className="relative">
        {projectItems.map(({ id, image, title, description, features }) => (
          <div
            key={id}
            className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 p-4 md:p-6 mx-2 md:mx-4"
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
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Projects;
