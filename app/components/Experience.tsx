'use client'

import { Building2, MapPin, Calendar } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Goldman Sachs',
      role: 'Software Engineer',
      duration: 'July 2024 – Present',
      location: 'NYC',
      description: 'Full-stack engineer building global fund management platform; automated workflows for 700+ users.',
      current: true,
      logo: 'https://logo.clearbit.com/goldmansachs.com'
    },
    {
      company: 'Northrop Grumman',
      role: 'Software Engineer Intern',
      duration: 'June – Aug 2023',
      location: 'San Diego',
      description: 'Developed financial analysis and automation tools to optimize data workflows.',
      current: false,
      logo: 'https://logo.clearbit.com/northropgrumman.com'
    },
    {
      company: 'NASA JPL',
      role: 'Software Engineer Intern',
      duration: 'July – Dec 2022',
      location: 'Pasadena',
      description: 'Redesigned international GNSS web map with interactive 3D visualization.',
      current: false,
      logo: 'https://logo.clearbit.com/jpl.nasa.gov'
    },
    {
      company: 'Cubic Transportation Systems',
      role: 'Systems Test Engineer Intern',
      duration: 'June – Sept 2021',
      location: 'San Diego',
      description: 'Tested and validated contactless card payment system for Boston transit.',
      current: false,
      logo: 'https://logo.clearbit.com/cubic.com'
    }
  ]

  return (
    <section id="experience" className="py-12 px-6 lg:px-12 bg-buttercream-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-mauve-800 dark:text-white mb-2 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-lg text-mauve-600 dark:text-gray-300">
            Building impactful solutions across finance, aerospace, and transportation
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-mauve-200 dark:bg-mauve-800 hidden lg:block"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start lg:items-center">
                {/* Timeline dot */}
                <div className="absolute left-4 w-3 h-3 bg-mauve-500 rounded-full border-2 border-buttercream-50 dark:border-gray-800 z-10 hidden lg:block"></div>
                
                <div className="ml-0 lg:ml-12 flex-1">
                  <div className="bg-buttercream-50 dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 lg:p-5">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <div className="flex items-center mb-1 lg:mb-0">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-8 h-8 mr-3 rounded-sm object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'block';
                          }}
                        />
                        <Building2 className="w-4 h-4 text-mauve-500 mr-2 hidden" />
                        <h3 className="text-lg font-semibold text-mauve-800 dark:text-white">
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span className="ml-2 px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center mb-0.5 sm:mb-0 sm:mr-3">
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-base font-medium text-mauve-600 dark:text-mauve-400 mb-2">
                      {exp.role}
                    </h4>
                    
                    <p className="text-sm text-mauve-600 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
