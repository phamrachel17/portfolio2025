'use client'

import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <NavBar />
      <div className="flex">
        <div className="flex-1">
          <Landing />
          <Experience />
          <Projects />
          <Hobbies />
        </div>
      </div>
    </main>
  )
}
