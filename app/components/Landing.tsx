'use client'
import { ArrowDown, MapPin, GraduationCap, Utensils, Heart, Coffee, Music, Github, Mail, Linkedin } from 'lucide-react'
import { WindSong } from "next/font/google";

const windSong = WindSong({
    subsets: ["latin"],
    weight: ["400"], // it comes in 2 weights
  });

const Landing = () => {
  const scrollToExperience = () => {
    const element = document.getElementById('experience')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="landing" className="min-h-screen flex items-center justify-center px-6 lg:px-12 bg-buttercream-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto w-full">
        <div className="animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Profile & Actions */}
            <div className="space-y-8 flex flex-col items-center">
              {/* Greeting */}
              <div className="self-start -mt-17">
              <h1 className={`${windSong.className} -mt-16 text-4xl lg:text-7xl font-normal text-mauve-800 dark:text-white`}>
              Rachel Pham
              </h1>
              </div>

              {/* Profile Image */}
              <div className="flex justify-center">
                <img
                  src="/profile-photo.jpg"
                  alt="Rachel Pham"
                  className="w-56 h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-lg border-4 border-mauve-200 dark:border-mauve-600"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-mauve-400 to-mauve-600 flex items-center justify-center shadow-lg hidden">
                  <div className="text-white text-center">
                    <div className="text-5xl lg:text-6xl font-bold mb-1">RP</div>
                    <div className="text-sm lg:text-base opacity-80">Profile Photo</div>
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <div className="text-center">
                <p className="text-lg lg:text-xl text-mauve-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Software Engineer and Creative
                </p>
                
                {/* Social Media Icons */}
                <div className="flex justify-center gap-4 mb-6">
                  <a
                    href="https://github.com/phamrachel17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-mauve-100 dark:bg-gray-700 text-mauve-700 dark:text-gray-300 hover:bg-mauve-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:rkpham27@gmail.com"
                    className="p-2 bg-mauve-100 dark:bg-gray-700 text-mauve-700 dark:text-gray-300 hover:bg-mauve-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rachelphamm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-mauve-100 dark:bg-gray-700 text-mauve-700 dark:text-gray-300 hover:bg-mauve-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                
                {/* Action Button */}
                <div className="flex justify-center">
                  <button
                    onClick={scrollToExperience}
                    className="inline-flex items-center px-6 py-3 bg-mauve-500 hover:bg-mauve-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    View My Experience
                    <ArrowDown className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - About Me & Fun Facts */}
            <div className="space-y-8">
              {/* About Me */}
              <div className="rounded-xl p-6">
                <h2 className="text-2xl font-bold text-mauve-800 dark:text-white mb-4">about me</h2>
                <p className="text-mauve-600 dark:text-gray-300 leading-relaxed">
                  I am currently a software engineer at Goldman Sachs located in NYC and have worked in various fields such as finance, aerospace, and transportation. 
                  Outside of work, you can find me coding side projects, ranking food on Beli, running around the city, or thrifting.
                </p>
              </div>

              {/* Fun Facts & Milestones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Location */}
                <div className="rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 text-mauve-500 mr-2" />
                    <h3 className="font-semibold text-mauve-800 dark:text-white">where i am now</h3>
                  </div>
                  <p className="text-sm text-mauve-600 dark:text-gray-300">New York, NY</p>
                </div>

                {/* Education */}
                <div className="rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="w-5 h-5 text-mauve-500 mr-2" />
                    <h3 className="font-semibold text-mauve-800 dark:text-white">education</h3>
                  </div>
                  <p className="text-sm text-mauve-600 dark:text-gray-300">
                    University of California, Santa Barbara    2024
                  </p>
                </div>

                {/* Favorite Food */}
                <div className="rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Utensils className="w-5 h-5 text-mauve-500 mr-2" />
                    <h3 className="font-semibold text-mauve-800 dark:text-white">current food obsession</h3>
                  </div>
                  <p className="text-sm text-mauve-600 dark:text-gray-300">Tenderloin Katsu at konban NYC</p>
                </div>

                {/* Coffee */}
                <div className="rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Coffee className="w-5 h-5 text-mauve-500 mr-2" />
                    <h3 className="font-semibold text-mauve-800 dark:text-white">drink of choice</h3>
                  </div>
                  <p className="text-sm text-mauve-600 dark:text-gray-300">Kombucha</p>
                </div>

                {/* Hobby */}
                <div className="rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Music className="w-5 h-5 text-mauve-500 mr-2" />
                    <h3 className="font-semibold text-mauve-800 dark:text-white">music artists i like</h3>
                  </div>
                  <p className="text-sm text-mauve-600 dark:text-gray-300">The Marias, Clairo, Michael Jackson, Laufey, Fleetwood Mac, Bee Gees, Mac Miller</p>
                </div>

                {/* Fun Fact */}
                <div className="rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Heart className="w-5 h-5 text-mauve-500 mr-2" />
                    <h3 className="font-semibold text-mauve-800 dark:text-white">learning how to</h3>
                  </div>
                  <p className="text-sm text-mauve-600 dark:text-gray-300">Play jazz, design jewelry, and how to make the best chia pudding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-mauve-400" />
        </div>
      </div>
    </section>
  )
}

export default Landing