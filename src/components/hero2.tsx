import { GraduationCap, Award, BookOpen } from 'lucide-react';
import Chalu from "@/assets/chalu.jpg"
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-12"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div
            className="md:w-1/3"
          >
            <Image src={Chalu} alt="Chalu" className="w-full h-auto rounded-lg shadow-lg" />

          </div>

          <div
            className="md:w-2/3"
          >
            <p className="text-lg mb-6 leading-relaxed">
              I am a passionate and detail-oriented software developer with a strong foundation in computer science
              and a love for creating intuitive, user-friendly applications. My journey in tech began
              during my undergraduate studies, where I discovered my passion for solving complex problems through code.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              With expertise in both front-end and back-end development, I enjoy building complete
              solutions that not only function flawlessly but also provide exceptional user experiences.
              I am constantly learning new technologies and methodologies to stay at the forefront of
              the rapidly evolving tech industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow">
                <GraduationCap className="text-primary-600 dark:text-primary-400 mb-3" size={28} />
                <h3 className="font-bold text-lg mb-2">Education</h3>
                <p>B.Tech. in Computer Science, Lovely Professional University, 2022-2026</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow">
                <Award className="text-primary-600 dark:text-primary-400 mb-3" size={28} />
                <h3 className="font-bold text-lg mb-2">Awards</h3>
                <p>Deans List Scholar, </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow">
                <BookOpen className="text-primary-600 dark:text-primary-400 mb-3" size={28} />
                <h3 className="font-bold text-lg mb-2">Interests</h3>
                <p>AI, Web3, Open Source, Machine Learning, Mobile Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;