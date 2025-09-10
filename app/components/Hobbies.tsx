'use client'

import { Code, Database, Globe, Music, Activity, Camera, Shirt, Sparkles } from 'lucide-react'

const Hobbies = () => {
  const skills = {
    languages: ['Python', 'C++', 'Java', 'HTML/CSS', 'JavaScript', 'R', 'SQL'],
    frameworks: ['React', 'Next.js', 'Vue', 'Django', 'Spring Boot', 'Firebase', 'Angular', 'Node.js']
  }

  const hobbyCategories = [
    {
      title: 'Languages & Tools',
      icon: Code,
      items: skills.languages,
      color: 'from-mauve-500 to-mauve-600'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Globe,
      items: skills.frameworks,
      color: 'from-mauve-500 to-mauve-600'
    }
  ]

  const personalInterests = [
    {
      title: 'Piano',
      description: 'classical, jazz, and contemporary pieces',
      icon: Music,
      color: 'bg-gradient-to-r from-mauve-400 to-mauve-500'
    },
    {
      title: 'Running',
      description: 'currently training for a marathon',
      icon: Activity,
      color: 'bg-gradient-to-r from-mauve-400 to-mauve-500'
    },
    {
      title: 'Photography',
      description: 'street, nature, food, and portrait photography',
      icon: Camera,
      color: 'bg-gradient-to-r from-mauve-400 to-mauve-500'
    },
    {
      title: 'Fashion',
      description: 'thrifting is a weekend must do activity',
      icon: Shirt,
      color: 'bg-gradient-to-r from-mauve-400 to-mauve-500'
    },
    {
      title: 'Designing Jewelry',
      description: 'Creating unique pieces and artistic accessories',
      icon: Sparkles,
      color: 'bg-gradient-to-r from-mauve-400 to-mauve-500'
    }
  ]

  return (
    <section id="hobbies" className="py-12 px-6 lg:px-12 bg-buttercream-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-mauve-800 dark:text-white mb-2 tracking-tight">
            Skills & Interests
          </h2>
          <p className="text-lg text-mauve-600 dark:text-gray-300">
            my joys in life
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-mauve-800 dark:text-white mb-5 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {hobbyCategories.map((category, index) => (
              <div
                key={index}
                className="bg-buttercream-50 dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
              >
                <div className="flex items-center mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} mr-3`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-mauve-800 dark:text-white">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-2 py-0.5 bg-mauve-100 dark:bg-gray-700 text-mauve-700 dark:text-gray-300 text-xs font-medium rounded-full hover:bg-mauve-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Interests */}
        <div>
          <h3 className="text-lg font-semibold text-mauve-800 dark:text-white mb-3 text-center">
            Personal Passions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {personalInterests.map((interest, index) => (
              <div
                key={index}
                className="bg-buttercream-50 dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-2 text-center group"
              >
                <div className={`w-8 h-8 ${interest.color} rounded-full flex items-center justify-center mx-auto mb-1 group-hover:scale-110 transition-transform duration-200`}>
                  <interest.icon className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-xs font-semibold text-mauve-800 dark:text-white mb-0.5">
                  {interest.title}
                </h4>
                <p className="text-mauve-600 dark:text-gray-300 text-xs leading-tight">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <div className="bg-buttercream-50 dark:bg-gray-900 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-mauve-800 dark:text-white mb-3">
              Let's Connect
            </h3>
            <p className="text-mauve-600 dark:text-gray-300 mb-4 text-sm">
              Always excited to discuss new opportunities and innovative projects
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="rkpham27@gmail.com"
                className="inline-flex items-center px-5 py-2 bg-mauve-500 hover:bg-mauve-600 text-white font-medium rounded-lg transition-colors duration-200 text-sm"
              >
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/rachelphamm/"
                className="inline-flex items-center px-5 py-2 border-2 border-mauve-300 dark:border-gray-600 text-mauve-700 dark:text-gray-300 hover:border-mauve-500 hover:text-mauve-500 font-medium rounded-lg transition-colors duration-200 text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hobbies
