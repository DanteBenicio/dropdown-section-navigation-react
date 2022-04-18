import { useRef } from 'react';
import './styles.scss';

export default function Navbar() {
  const listRef = useRef<HTMLUListElement | null>(null);

  const toggleMenu = (e: MouseEvent) => {
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
            <li onClick={toggleMenu}>
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
            <li onClick={toggleMenu}>
              Company
              <img src="assets/icon-arrow-down.svg" alt="arrow down" className="list-icon" />
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
      </nav>
    </header>
  );
}