import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Palette, Zap, GitBranch } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
    },
    {
      icon: Palette,
      title: 'UI/UX Focus',
      description: 'Creating beautiful user experiences',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency',
    },
    {
      icon: GitBranch,
      title: 'Collaboration',
      description: 'Working seamlessly with teams',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-900/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-50">About Me</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Versatile Front-End Developer with extensive years of experience in building dynamic and visually appealing web applications.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Strong expertise in <span className="text-emerald-400">Angular, TypeScript, HTML, and CSS</span>, with a keen focus on clean UI design and performance-driven interfaces.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Experienced in API integration and API testing using Swagger and Postman, along with version control using GitHub and CI/CD pipelines using Jenkins. Passionate about delivering high-quality software with hands-on experience in manual testing, debugging, and improving overall application reliability.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <Icon className="text-emerald-400 mb-3" size={32} />
                    <h3 className="text-gray-50 mb-2">{highlight.title}</h3>
                    <p className="text-gray-400 text-sm">{highlight.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Years Experience', value: '4+' },
              { label: 'Projects Completed', value: '20+' },
              { label: 'Technologies', value: '10+' },
              { label: 'UI Components Built', value: '50+' }
              // { label: 'Happy Clients', value: '15+' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/30"
              >
                <div className="text-3xl md:text-4xl text-emerald-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
