import { Code, Database, Palette, DivideIcon as Codes, Gauge, Users, Brain } from 'lucide-react';

type Skill = {
  name: string;
  level: number;
  category: string;
};

type SkillCategory = {
  name: string;
  icon: typeof Codes;
  skills: Skill[];
};

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React', level: 90, category: 'Frontend' },
        { name: 'TypeScript', level: 85, category: 'Frontend' },
        { name: 'JavaScript', level: 95, category: 'Frontend' },
        { name: 'HTML/CSS', level: 90, category: 'Frontend' },
        { name: 'Tailwind CSS', level: 85, category: 'Frontend' },
      ],
    },
    {
      name: 'Backend',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 85, category: 'Backend' },
        { name: 'Express', level: 80, category: 'Backend' },
        { name: 'MongoDB', level: 75, category: 'Backend' },
        { name: 'SQL', level: 70, category: 'Backend' },
        { name: 'Python', level: 80, category: 'Backend' },
      ],
    },
    {
      name: 'Design',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 75, category: 'Design' },
        { name: 'UI/UX', level: 80, category: 'Design' },
        { name: 'Photoshop', level: 65, category: 'Design' },
        { name: 'Responsive Design', level: 90, category: 'Design' },
      ],
    },
    {
      name: 'Soft Skills',
      icon: Users,
      skills: [
        { name: 'Communication', level: 95, category: 'Soft Skills' },
        { name: 'Teamwork', level: 90, category: 'Soft Skills' },
        { name: 'Problem Solving', level: 85, category: 'Soft Skills' },
        { name: 'Time Management', level: 80, category: 'Soft Skills' },
      ],
    },
    {
      name: 'Tools',
      icon: Gauge,
      skills: [
        { name: 'Git/GitHub', level: 90, category: 'Tools' },
        { name: 'Docker', level: 75, category: 'Tools' },
        { name: 'CI/CD', level: 70, category: 'Tools' },
        { name: 'VS Code', level: 95, category: 'Tools' },
      ],
    },
    {
      name: 'Other',
      icon: Brain,
      skills: [
        { name: 'Testing', level: 75, category: 'Other' },
        { name: 'SEO', level: 65, category: 'Other' },
        { name: 'Agile', level: 80, category: 'Other' },
        { name: 'AWS', level: 70, category: 'Other' },
      ],
    },
  ];

  const SkillBar = ({ skill }: { skill: Skill }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="font-medium">{skill.name}</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className="h-2.5 rounded-full bg-primary-600 dark:bg-primary-500"
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div

        >
          <h2 className="text-3xl font-bold text-center mb-2">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-12"></div>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            I have experience with a variety of technologies and constantly strive to expand my knowledge. 
            Here are some of the key skills I&#39;ve developed throughout my journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-6">
                <span className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
                  <category.icon size={24} />
                </span>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              <div>
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;