import { BrowserRouter } from "react-router-dom"
import { Navbar, Hero, Experience, Works, Contact, About, Skills } from "./components"
import { StarsCanvas } from "./components/canvas"

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Skills />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
