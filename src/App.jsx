import React, { useEffect } from 'react';
import { useRoute } from './router';
import useReveal from './utils/useReveal';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Technology from './pages/Technology';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const routes = {
  '/': Home,
  '/about': About,
  '/services': Services,
  '/solutions': Solutions,
  '/industries': Industries,
  '/technology': Technology,
  '/resources': Resources,
  '/contact': Contact
};

export default function App() {
  const path = useRoute();
  const Page = routes[path.replace(/\/+$/, '') || '/'] || NotFound;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  // re-arm the entrance observer against the new page's elements
  useReveal(path);

  return (
    <div className="min-h-screen bg-white text-[#111827] antialiased flex flex-col font-sans selection:bg-[#0111A2] selection:text-white">
      <Header />
      <main className="flex-grow">
        <Page />
      </main>
      <Footer />
    </div>
  );
}
