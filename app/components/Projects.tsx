'use client'

import { ExternalLink, Github, Calendar } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
        title: 'Nouvelle',
        duration: '2025',
        description: 'An iOS movie ranking app letting users review films, see friend activity, and generate automatic ranked lists.',
        technologies: ['SwiftUI', 'Firebase', 'TMDB API'],
        github: 'https://github.com/divygobi/nouvelle',
        // demo: '#',
        image: '/api/placeholder/400/250'
    },
    {
      title: 'Plan Pal',
      duration: '2025',
      description: 'AI-powered scheduling app with Gemini LLM and Google Calendar integration.',
      technologies: ['Next.js', 'Gemini AI', 'Google Calendar API', 'TypeScript'],
      github: 'https://github.com/phamrachel17/plan-pal',
      demo: 'https://snobbish-polecat.clueso.site/share/220f0fb3-5a82-44e1-833a-403a3c72de93',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Ziwei Chart Calculator',
      duration: '2024',
      description: 'Astrology chart web app with Flask, Firebase, and real-time data sync.',
      technologies: ['Flask', 'Firebase', 'Python', 'JavaScript'],
      github: 'https://github.com/phamrachel17/ziwei-chart',
      demo: 'https://ziweichart.web.app/ziwei-chart',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Neural Networks Food Classification',
      duration: '2023',
      description: 'Built CNN models to classify food images with high accuracy.',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Computer Vision'],
      github: 'https://github.com/phamrachel17/Food-Image-Classification',
      demo: 'https://www.kaggle.com/code/rachelpham02/pstat-131-final-project',
      image: '/api/placeholder/400/250'
    },
    {
        title: 'Dough Tracker',
        duration: '2023',
        description: 'A money tracking web app created with React, MongoDB, and Node.js.',
        technologies: ['React', 'MongoDB', 'Node.js'],
        github: 'https://github.com/phamrachel17/track-my-money',
        // demo: '#',
        image: '/api/placeholder/400/250'
      }
  ]

  return (
    <section id="projects" className="py-12 px-6 lg:px-12 bg-buttercream-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-mauve-800 dark:text-white mb-2 tracking-tight">
            Projects
          </h2>
          <p className="text-lg text-mauve-600 dark:text-gray-300">
            my personal & passion projects!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="h-44 bg-gradient-to-br from-mauve-400 to-mauve-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold mb-2">{project.title.charAt(0)}</div>
                  <div className="text-sm opacity-80">Project Preview</div>
                </div>
              </div>

              <div className="p-4">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-mauve-800 dark:text-white group-hover:text-mauve-600 dark:group-hover:text-mauve-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.duration}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-mauve-600 dark:text-gray-300 mb-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 bg-mauve-100 dark:bg-mauve-900 text-mauve-800 dark:text-mauve-200 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-2">
                  <a
                    href={project.github}
                    className="flex items-center px-3 py-1.5 bg-mauve-100 dark:bg-gray-700 text-mauve-700 dark:text-gray-300 hover:bg-mauve-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 text-xs font-medium"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center px-3 py-1.5 bg-mauve-500 hover:bg-mauve-600 text-white rounded-lg transition-colors duration-200 text-xs font-medium"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
