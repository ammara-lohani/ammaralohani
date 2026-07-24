import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6">
        <Hero />
        <Experience />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
