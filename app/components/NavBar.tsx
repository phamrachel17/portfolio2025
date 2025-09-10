'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X, Home, Briefcase, FolderOpen, Heart } from 'lucide-react'

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('landing')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { id: 'landing', label: 'Landing Page', icon: Home },
    { id: 'experience', label: 'Professional Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'hobbies', label: 'Hobbies', icon: Heart },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-buttercream-100/90 dark:bg-gray-800/80 backdrop-blur-md rounded-l-2xl shadow-lg border border-mauve-200 dark:border-gray-700 p-3">
          <div className="flex flex-col space-y-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-mauve-100 dark:bg-gray-700 hover:bg-mauve-200 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-mauve-600" />
              )}
            </button>

            {/* Navigation Items */}
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative p-3 rounded-full transition-all duration-200 group ${
                    activeSection === item.id
                      ? 'bg-mauve-500 text-white shadow-md'
                      : 'text-mauve-600 dark:text-gray-300 hover:bg-mauve-100 dark:hover:bg-gray-700'
                  }`}
                  title={item.label}
                >
                  <IconComponent className="w-5 h-5" />
                  {/* Tooltip */}
                  <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {item.label}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <div className="bg-buttercream-100/90 dark:bg-gray-800/90 backdrop-blur-md border-b border-mauve-200 dark:border-gray-700">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-lg font-semibold text-mauve-800 dark:text-white">
              Rachel Pham
            </h1>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-mauve-100 dark:bg-gray-700 hover:bg-mauve-200 dark:hover:bg-gray-600 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {mounted && theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-mauve-600" />
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full bg-mauve-100 dark:bg-gray-700 hover:bg-mauve-200 dark:hover:bg-gray-600 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-mauve-600 dark:text-gray-300" />
                ) : (
                  <Menu className="w-5 h-5 text-mauve-600 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="border-t border-mauve-200 dark:border-gray-700 bg-buttercream-50 dark:bg-gray-800">
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        activeSection === item.id
                          ? 'bg-mauve-500 text-white'
                          : 'text-mauve-600 dark:text-gray-300 hover:bg-mauve-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 mr-3" />
                      {item.label}
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default NavBar
