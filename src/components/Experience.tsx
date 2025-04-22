import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from './animations/Motion';

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  skills: string[];
};

const Experience = () => {
  const jobs: Job[] = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      duration: 'June 2022 - August 2022',
      description: [
        'Developed responsive user interfaces using React and Tailwind CSS for a SaaS platform used by over 10,000 users.',
        'Collaborated with UX designers to implement UI components according to design specifications.',
        'Optimized web performance by implementing lazy loading and code splitting, improving load times by 40%.',
        'Participated in Agile development processes, including daily stand-ups and sprint planning sessions.'
      ],
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Git', 'Responsive Design', 'Agile']
    },
    {
      id: 2,
      title: 'Full Stack Developer Intern',
      company: 'WebSolutions Co.',
      location: 'Remote',
      duration: 'January 2022 - May 2022',
      description: [
        'Built RESTful APIs using Node.js and Express to support mobile and web applications.',
        'Designed and implemented MongoDB database schemas and performed CRUD operations.',
        'Created a user authentication system using JWT tokens, improving security protocols.',
        'Developed frontend components with React and integrated them with backend services.'
      ],
      skills: ['Node.js', 'Express', 'MongoDB', 'React', 'RESTful APIs', 'JWT Authentication']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">Experience</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-12"></div>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            My professional journey has equipped me with practical experience and valuable insights 
            in software development. Here's where I've worked and what I've accomplished.
          </p>
        </motion>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
          {jobs.map((job, index) => (
            <motion
              key={job.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary-600 dark:bg-primary-500 text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Briefcase size={18} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar size={14} className="text-gray-500 dark:text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{job.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  <span className="text-lg font-medium text-primary-600 dark:text-primary-400">{job.company}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <div className="flex items-center">
                    <MapPin size={14} className="text-gray-500 dark:text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{job.location}</span>
                  </div>
                </div>
                
                <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                  {job.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-6 flex items-center mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400 mr-2"></span>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;