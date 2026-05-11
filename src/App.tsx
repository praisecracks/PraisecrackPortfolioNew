/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Experience/Hero';
import About from './components/Experience/About';
import Experience from './components/Experience/Experience';
import Stack from './components/Experience/Stack';
import Projects from './components/Experience/Projects';
import Testimonials from './components/Experience/Testimonials';
import Contact from './components/Experience/Contact';
import Navigation from './components/Experience/Navigation';
import FloatingWhatsApp from './components/Experience/FloatingWhatsApp';
import SmoothScroll from './components/Experience/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen selection:bg-brand-orange selection:text-white bg-zinc-950 overflow-x-hidden">
        {/* Global Background Systems */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="ambient-bg" />
          
          {/* Subtle Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.02] contrast-150 brightness-150 pointer-events-none" 
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
          </div>
        </div>

        <Navigation />
        <FloatingWhatsApp />

        <main className="relative z-10">
          <Hero />
          <div id="about">
            <About />
          </div>
          <Experience />
          <div id="stack">
            <Stack />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="testimonials">
            <Testimonials />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </main>
      </div>
    </SmoothScroll>
  );
}

export default App;
