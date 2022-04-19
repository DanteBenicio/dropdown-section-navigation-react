import { useState } from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

export default function App() {
  const [openBurger, setOpenBurger] = useState<boolean>(false);

  const toggleBurgerMenu = () => setOpenBurger(prevState => !prevState);

function App() {
  return (
    <>
      {openBurger && <Sidebar />}
      <Navbar toggleBurgerMenu={toggleBurgerMenu} openBurger={openBurger} />
      <HeroSection />
    </>
  );
}

export default App
