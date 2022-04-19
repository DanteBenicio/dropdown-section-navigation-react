import { useRef } from 'react';
import { NavbarProps } from '../../types/navbar';
import './styles.scss';

export default function Navbar({ toggleBurgerMenu, openBurger }: NavbarProps) {
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const list = [...listRef.current!.children].filter((_, index) => index < 2);

    window.addEventListener('click', (e: MouseEvent) => {
      if (list[0].classList.contains('active') || list[1].classList.contains('active')) {
        const elementClicked = e.target as HTMLElement;

        list.forEach(li => {
          if (elementClicked !== li) {
            li.classList.remove('active');
          }
        });
      }
    });

    return () => window.removeEventListener('click', () => {});
  }, []);

  const toggleMenu = (e: any) => {
    const list = [...listRef.current!.children].filter((_, index) => index < 2);
    const liClicked = e.currentTarget! as HTMLLIElement;

    list.forEach(li => {
      if (liClicked === li) {
        liClicked.classList.toggle('active');
      }

      if (liClicked !== li) {
        li.classList.remove('active');
      }
    });
  };

  return (
    <header className="navbar-container">
      <nav className="navbar-nav">
        <div className="logo-list-wrapper">
          <img src="assets/logo.svg" alt="text writed snap" />
          <ul className="navbar-list" ref={listRef}>
            <li onClick={toggleMenu} onKeyDown={toggleMenu} role="menuitem" tabIndex={0}>
              Features
              <img src="assets/icon-arrow-down.svg" alt="arrow down" className="list-icon" />
              <div className="feature-menu submenu">
                <span>
                  <img src="assets/icon-todo.svg" alt="purple notebook" width="16px" />
                  Todo List
                </span>
                <span>
                  <img src="assets/icon-calendar.svg" alt="blue calendar" width="16px" />
                  Calendar
                </span>
                <span>
                  <img src="assets/icon-reminders.svg" alt="yellow bell" width="16px" />
                  Reminders
                </span>
                <span>
                  <img src="assets/icon-planning.svg" alt="pink clock" width="16px" />
                  Planning
                </span>
              </div>
            </li>
            <li onClick={toggleMenu} onKeyDown={toggleMenu} role="menuitem" tabIndex={0}>
              Company
              <img src="assets/icon-arrow-down.svg" alt="arrow down" className="list-icon" aria-hidden="true" />
              <div className="company-menu submenu">
                <span>History</span>
                <span>Our Team</span>
                <span>Blog</span>
              </div>
            </li>
            <li>
              Careers
            </li>
            <li>
              About
            </li>
          </ul>
        </div>
        <div className="action-buttons">
          <a href="#0" id="login-button">Login</a>
          <button type="button" id="register-button">Register</button>
        </div>
        <button type="button" className={`burger-btn ${openBurger ? 'open' : ''}`} onClick={toggleBurgerMenu}>
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
