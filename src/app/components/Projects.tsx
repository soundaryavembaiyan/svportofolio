import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'AI / Machine Learning',
      description: 'Developed machine learning models using Python in Jupyter Notebook, including data preprocessing, feature engineering, and predictive analysis to derive meaningful insights from datasets.',
      tags: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Jupyter Notebook'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
    },
    {
      title: 'Tracking Web Application',
      description: 'A comprehensive digital life management platform that helps users organize their daily tasks, health records, and personal documents in one secure place. Built with Angular and TypeScript, featuring real-time data synchronization and intuitive UI.',
      tags: ['Angular', 'TypeScript', 'REST API', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    },
    {
      title: 'Travel Booking Website',
      description: 'Full-featured travel booking platform with integrated car booking system, interactive map tracking, and location exploration. Includes real-time availability checking, booking management, and seamless payment integration.',
      tags: ['Angular', 'HTML5', 'API Integration', 'Maps API'],
      image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=80',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-50">Featured Projects</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">
              Here are some of my recent works
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>
                  </div>

                  {/* Project Info */}
                  <div className={`space-y-4 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <div>
                      <h3 className="text-3xl text-gray-50 mb-3">{project.title}</h3>
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl blur-xl"></div>
                        <p className="relative text-gray-300 text-lg leading-relaxed bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm border border-emerald-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-2">
                      <a
                        href="https://github.com/soundaryavembaiyan" target="_blank"
                        className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                      >
                        <Github size={20} />
                        <span>Code</span>
                      </a>
                      {/* <a
                        href="https://s2tcars.netlify.app" target="_blank"
                        className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
