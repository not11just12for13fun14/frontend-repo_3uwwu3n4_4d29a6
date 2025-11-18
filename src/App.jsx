import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Acts from './components/Acts';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar />
      <Hero />
      <Acts />
      <Services />
      <Contact />
      <footer className="py-10 text-center text-slate-400">
        © {new Date().getFullYear()} JRCrestus — Scaffolding Service Providers
      </footer>
    </div>
  )
}

export default App
