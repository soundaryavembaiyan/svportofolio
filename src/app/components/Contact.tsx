import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { FaBehance } from 'react-icons/fa';
import { SiPeerlist } from 'react-icons/si';


export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'soundaryavembaiyan@yahoo.com',
      link: 'mailto:soundaryavembaiyan@yahoo.com',
    },
    //  {
    //   icon: Mail,
    //   label: 'Contact',
    //   value: 'let`s connect!!',
    //   link: 'http://gsheetlog.netlify.app',
    // },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/soundaryavembaiyan',
      link: 'https://linkedin.com/in/soundaryavembaiyan',
    },
    // {
    //   icon: Github,
    //   label: 'GitHub',
    //   value: 'github.com/soundarya',
    //   link: 'https://github.com',
    // },
    // {
    //   icon: 'MapPin',
    //   label: 'Location',
    //   value: 'Available for Remote Work',
    //   link: null,
    // },
    // {
    //   icon: FaBehance,
    //   label: 'Behance',
    //   value: 'behance.net/soundarya',
    //   link: 'https://behance.net',
    // },
    // {
    //   icon: SiPeerlist,
    //   label: 'Peerlist',
    //   value: 'https://peerlist.io/soundarya',
    //   link: 'https://peerlist.io',
    // },
  ];

  const contactInfo2 = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/soundaryavembaiyan',
      link: 'https://github.com/soundaryavembaiyan',
    },
    {
      icon: FaBehance,
      label: 'Behance',
      value: 'behance.net/soundaryavembaiyan',
      link: 'https://behance.net/soundaryavembaiyan',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-50">Get In Touch</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            {/* <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              I'm currently available for freelance work and open to discussing new projects. Feel free to reach out!
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info - 1 */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h3 className="text-2xl text-gray-50 mb-4">Let's Connect</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Whether you have a question, want to discuss a project, or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-emerald-500/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-300">
                      <Icon className="text-emerald-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-200 hover:text-emerald-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-200">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Contact Info - 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
               <div className="mb-8">
                <h3 className="text-2xl text-gray-50 mb-4 opacity-1">Let's Connect</h3>
                <p className="text-gray-400 text-lg leading-relaxed opacity-1">
                  Whether you have a question, want to discuss a project, or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>
              {contactInfo2.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-emerald-500/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-300">
                      <Icon className="text-emerald-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-200 hover:text-emerald-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-200">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>


            {/* Contact Form */}
            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl"></div>
                <form className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-gray-100 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-gray-100 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-gray-100 transition-colors duration-300 resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </motion.div> */}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
