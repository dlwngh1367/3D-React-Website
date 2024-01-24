import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
      <section className='max-container'>
        <h1 className='head-text'>
          My{" "}
          <span className='blue-gradient_text drop-shadow font-semibold'>
            Projects
          </span>
        </h1>
  
        <p className='text-slate-500 mt-2 leading-relaxed'>
        I have a keen interest in various fields, including iOS development, Java programming, web development, and database systems. Consequently, I've been actively engaged in numerous personal projects. These include the development of various iOS applications utilizing APIs, 3rd party libraries, and real-time location data. Additionally, I've created web programs and websites using HTML, CSS, JavaScript, PHP, and various database systems.

While working on Java projects, I ensured a strong grasp of object-oriented programming principles. Moreover, I delved into Python to master data manipulation techniques. One of my notable projects involved developing a 3D stereoscopic webpage using React and Three.js. I also have developed video streaming servers such as Netflix using React, Mongo DB, and TypeScript. All users can sign up for membership, and OAuth has been used to enable logging in to Google, Github accounts.

Feel free to explore the variety of personal projects I've undertaken. Your curiosity and feedback are always appreciated.
        </p>
  
        <div className='flex flex-wrap my-20 gap-16'>
          {projects.map((project) => (
            <div className='lg:w-[400px] w-full' key={project.name}>
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={project.iconUrl}
                    alt='threads'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
  
              <div className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'>
                  {project.name}
                </h4>
                <p className='mt-2 text-slate-500'>{project.description}</p>
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                    to={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-blue-600'
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-4 h-4 object-contain'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <hr className='border-slate-200' />
  
        <CTA />
      </section>
    );
  };
  

export default Projects