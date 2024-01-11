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
        I am interested in various fields such as IOS development, Java program, web development, database system, and so on.,
        so I have been working on various personal projects. Various IOS applications have been developed using API, 
        3rd party libraries, real-time location data, etc., and web programs and websites have been developed using
         HTML, CSS, JavaScript, PHP, and database systems, etc. Also, while developing various projects using Java, 
         I made sure that the basics of concept of object-oriented programming were clear. Not only this, 
         but I also learned how to control data freely using Python. I will attach my personal projects and portfolio below with explanation.
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