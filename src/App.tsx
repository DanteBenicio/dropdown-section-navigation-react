import { useState } from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

export default function App() {
  const [openBurger, setOpenBurger] = useState<boolean>(false);
  const html = document.querySelector('html')!;

  if (openBurger) {
    html.style.overflowY = 'hidden';
  } else {
    html.style.overflowY = 'auto';
  }

  const toggleBurgerMenu = () => setOpenBurger(prevState => !prevState);

  return (
    <>
      {openBurger && <Sidebar />}
      <Navbar toggleBurgerMenu={toggleBurgerMenu} openBurger={openBurger} />
      <HeroSection />
    </>
  );
}
