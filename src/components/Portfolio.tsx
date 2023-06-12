import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'House of Horror',
      description: "Users will be able to log into their personal account, create a watchlist, and leave reviews for different films they have watched.",
      image: '../src/assets/images/houseofhorror.PNG',
      technologies: ['MySQL', 'Sequelize', 'Bcrypt', 'Bulma.io', 'Handlebars', 'Compressor', 'Axios', 'Node.js', 'Express.js'],
      demoLink: 'https://dry-refuge-68933.herokuapp.com/',
      githubLink: 'https://github.com/Bentto90/Project-2-Group-4',
    },
    {
      id: 2,
      title: 'Star Wars Cosplay Database',
      description: 'This site gives users a place where they are able to find detailed information about a Star Wars character so that they can make a costume based off of that person and their features.',
      image: '',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://florabernardo62.github.io/starwarsdatabase/',
      githubLink: 'https://github.com/florabernardo62/starwarsdatabase',
    },
    {
      id: 3,
      title: 'Weather Forecast',
      description: "Weather dashboard that uses server-side API's and FETCH requests to obtain weather forecasts from a searched city",
      image: '',
      technologies: ['JavaScript', 'CSS', 'HTML'],
      demoLink: 'https://daniferru.github.io/weather-forecast/',
      githubLink: 'https://github.com/daniferru/weather-forecast',
    },
    {
      id: 4,
      title: 'Express Note Taker',
      description: 'Gives users a place to store notes they need to remember using Express.js',
      image: '',
      technologies: ['JSON', 'Node.js', 'Express.js', 'JavaScript', 'Heroku'],
      demoLink: 'https://vast-cove-74895.herokuapp.com/',
      githubLink: 'https://github.com/daniferru/express-js-note-taker',
    },
    {
      id: 5,
      title: 'Team Profile Generator',
      description: 'A Node.js CLI that takes information about a software engineer team then generates a HTML webpage of their profiles',
      image: '',
      technologies: [ 'Node.js', 'JavaScript', 'OOP'],
      demoLink: 'https://user-images.githubusercontent.com/120329230/237015168-52051f14-5cba-48d3-8a76-217a0d75f27c.mp4',
      githubLink: 'https://github.com/daniferru/team-profile-generator',
    }
  ];

  return (
    <div className="portfolio-container">
      <h2>About Me</h2>
      <p>My name is Daniella and I'm a full stack web developer based in Florida, enjoying the beachside lifestyle. My passion for web development started just one year ago.
        I am deeply fascinated by the ever-evolving world of technology and the endless possibilities it brings. With each project, I strive to create intuitive and engaging web experiences that leave a lasting impact.
        My goal is to combine my technical skills and creative mindset to craft innovative solutions for real-world problems.
        As a full stack web developer, I have experience working with both front-end and back-end technologies. I enjoy the process of turning ideas into reality, starting from conceptualizing the user interface to implementing robust server-side functionality.
        Constantly seeking growth and knowledge, I stay up-to-date with the latest web development trends and techniques. I embrace challenges and am always eager to learn new technologies that can enhance my skills and broaden my horizons.
        I'm excited to embark on new projects, collaborate with talented individuals, and make a positive impact in the digital world.
      </p>
      <h2>My Work</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <p className="technologies">Technologies used: {project.technologies.join(', ')}</p>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                Demo |
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;