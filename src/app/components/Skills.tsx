import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Layout, Database, GitBranch, TestTube, Layers } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 92 },
      ],
    },
    {
      category: 'UI/UX Design',
      icon: Layout,
      skills: [
        { name: 'Responsive Design', level: 90 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Figma', level: 80 },
      ],
    },
    {
      category: 'API & Integration',
      icon: Database,
      skills: [
        { name: 'REST API Integration', level: 88 },
        { name: 'Postman', level: 85 },
        { name: 'Swagger', level: 82 },
      ],
    },
    {
      category: 'Version Control & CI/CD',
      icon: GitBranch,
      skills: [
        { name: 'GitHub', level: 90 },
        { name: 'Jenkins', level: 80 },
        { name: 'Git', level: 88 },
      ],
    },
  ];

  const tools = [
    'Angular',
    'React',
    'TypeScript',
    'HTML5',
    'CSS',
    'SCSS'
    'REST API',
    'GitHub',
    'Postman',
    'Swagger',
    'Jenkins',
    'UI/UX',
    'Angular Material',
    'PHP',
    'XAMPP',
    'Python',
    'Jupyter Notebook'
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-50">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-emerald-500/10 rounded-lg">
                      <Icon className="text-emerald-400" size={24} />
                    </div>
                    <h3 className="text-xl text-gray-50">{category.category}</h3>
                  </div>

                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-emerald-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tools & Technologies Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-2xl text-gray-50 mb-8">Technologies I Use</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 rounded-full text-gray-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 cursor-default"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
