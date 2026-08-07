import { useState } from 'react';
import { Loader } from '@/components/ui/Loader';
import { CursorGlow } from '@/components/ui/CursorGlow';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';
import { NotFound } from '@/pages/NotFound';

function App() {
  const [loading, setLoading] = useState(true);
  const isKnownRoute = window.location.pathname === '/' || window.location.pathname === '/index.html';

  if (!isKnownRoute) {
    return <NotFound />;
  }

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <div className="relative bg-bg" style={{ overflowX: 'clip' }}>
        <CursorGlow />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
