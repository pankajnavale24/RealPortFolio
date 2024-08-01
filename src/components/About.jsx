import React from "react";

function About() {
  return (
    <section name="About" className="max-w-screen-2xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Me</h1>
        <p className="text-lg text-gray-600">
          Welcome to my portfolio! I'm Pankaj Navale, a passionate MERN Stack
          Developer based in Aurangabad, India. I specialize in creating
          impactful and visually stunning software solutions. Explore my work
          and let's build something amazing together!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-green-600 font-semibold text-2xl mb-4">
            Education & Training
          </h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">B.Tech in Information Technology</h3>
            <p className="text-lg text-gray-700">Government College of Engineering, Aurangabad</p>
            <p className="text-md text-gray-500">(Expected Graduation: June 2025)</p>
          </div>
        </div>

        <div>
          <h2 className="text-green-600 font-semibold text-2xl mb-4">Skills & Expertise</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Frontend</h3>
              <p className="text-gray-700">HTML, CSS, JavaScript, React.js, Tailwind CSS</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Backend</h3>
              <p className="text-gray-700">Node.js, Express.js</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Database</h3>
              <p className="text-gray-700">MongoDB, MySQL</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Tools & Platforms</h3>
              <p className="text-gray-700">Git, GitHub, Docker, Postman</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Other</h3>
              <p className="text-gray-700">Data Structures and Algorithms, RESTful APIs, JWT Authentication</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-green-600 font-semibold text-2xl mb-4">Professional Experience</h2>
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2">Frontend Developer Intern</h3>
          <p className="text-lg text-gray-700">Cerebry</p>
          <p className="text-md text-gray-500">May 2024 - July 2024 (Unpaid)</p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Developed and maintained user interfaces using React.js, ensuring a seamless and responsive user experience.</li>
            <li>Collaborated with the design team to implement visually appealing and user-friendly web pages.</li>
            <li>Optimized application performance by debugging and refining code.</li>
            <li>Assisted in the integration of RESTful APIs to enhance the functionality of the platform.</li>
            <li>Gained valuable experience in a professional setting, working alongside a team of experienced developers.</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-green-600 font-semibold text-2xl mb-4">Achievements & Awards</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Winner of CODEA’THON 2024 at MGM University</li>
          <li>Solved more than 500+ DSA questions on various platforms</li>
          <li>2-star coder on CodeChef (max rating: 1412)</li>
          <li>4-star coder on HackerRank</li>
          <li>Under top 20 on GeeksforGeeks in GECA</li>
          <li>Winner of Bappa Ka Prasad Coding Contest organized by GDSC</li>
        </ul>
      </div>

      <div>
        <h2 className="text-green-600 font-semibold text-2xl mb-4">Mission Statement</h2>
        <p className="text-lg text-gray-700">
          As a dedicated MERN Full Stack Developer and AI engineer, my mission is
          to harness the power of technology to create innovative, impactful, and
          visually stunning software solutions that drive progress and improve
          lives. By leveraging my expertise in the MERN stack and a commitment to
          continuous learning, I aim to solve complex challenges, inspire others
          in the tech community, and contribute to the advancement of technology
          for a better future.
        </p>
      </div>
    </section>
  );
}

export default About;
