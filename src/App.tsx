import './App.css'

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
