import { Award, Calendar, ExternalLink } from 'lucide-react';

type Certification = {
  id: number;
  title: string;
  organization: string;
  date: string;
  skills: string;
  logo: string;
  url?: string;
};

const Certifications = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: 'Meta Front-End Developer',
      organization: 'Meta',
      date: 'January 2024',
      skills: 'React, JavaScript, Responsive Design, Testing',
      logo: 'https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png',
      url: 'https://www.coursera.org/account/accomplishments/professional-cert/W8R3NZT3F396',
    },
    {
      id: 2,
      title: 'Generative AI Specialization',
      organization: 'DeepLearning.AI',
      date: 'January 2024',
      skills: 'Gen AI, Neural Networks, Natural Language Processing',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/2048px-Coursera-Logo_600x600.svg.png',
      url: 'https://www.coursera.org/account/accomplishments/verify/6TJDFSMZ4CP8',
    },
    {
      id: 3,
      title: 'Google Product manager Professional Certificate',
      organization: 'Google',
      date: 'April 2024',
      skills: 'Product Production, Team management, Resource gathering, Design Systems, User Research',
      logo: 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png',
      url: 'https://www.coursera.org/account/accomplishments/professional-cert/5SHG6BDEVJSL',
    },
    {
      id: 4,
      title: 'Algorithms',
      organization: 'Stanford Online',
      date: 'April 2024',
      skills: 'Graph Search, Shortest Paths, and Data Structures',
      logo: 'https://play-lh.googleusercontent.com/zvxb6-R-WBKhlfm0dbQZDUssZ9HnSjrQaUI_zgPOM9mkcAHwYOQjD42Dx7bD_BOvoQ',
      url: 'https://www.coursera.org/account/accomplishments/specialization/X8B86FUBQSBD',
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div
        
        >
          <h2 className="text-3xl font-bold text-center mb-2">Certifications & Courses</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-12"></div>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            I am committed to continuous learning and professional development. 
            Here are some certifications I have earned that have enhanced my skills and knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 bg-gray-100 dark:bg-gray-700 p-4 flex items-center justify-center">
                <img 
                  src={cert.logo} 
                  alt={cert.organization} 
                  className="h-16 object-contain"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                  <Award size={16} className="mr-2" />
                  <span>{cert.organization}</span>
                </div>
                <div className="flex items-center mb-4 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span>{cert.date}</span>
                </div>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  <strong>Skills gained:</strong> {cert.skills}
                </p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline font-medium"
                  >
                    View Certificate <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;