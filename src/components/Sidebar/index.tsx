import { useRef } from 'react';
import './styles.scss';

export default function Sidebar() {
  const listRef = useRef<HTMLUListElement | null>(null);

  const toggleMenu = (e: any) => {
    const list = [...listRef.current!.children].filter((_, index) => index < 2);
    const liClicked = e.currentTarget! as HTMLLIElement;

    list.forEach(li => {
      if (liClicked === li) {
        liClicked.classList.toggle('active');
      }
    });
  };

  return (
    <div className="sidebar_container">
      <aside className="sidebar">
        <ul className="sidebar_list" ref={listRef}>
          <li onClick={toggleMenu} onKeyDown={toggleMenu} role="menuitem" tabIndex={0}>
            Features
            <img src="assets/icon-arrow-down.svg" alt="arrow icon" className="sidebar_list_icon" />
            <div className="sidebar_submenu">
              <span>
                <img src="assets/icon-todo.svg" alt="purple notebook" width={18} className="icon" />
                Todo List
              </span>
              <span>
                <img src="assets/icon-calendar.svg" alt="blue calendar" width={18} className="icon" />
                Calendar
              </span>
              <span>
                <img src="assets/icon-reminders.svg" alt="yello bell" width={18} className="icon" />
                Reminders
              </span>
              <span>
                <img src="assets/icon-planning.svg" alt="purple clock" width={18} className="icon" />
                Planning
              </span>
            </div>
          </li>
          <li onClick={toggleMenu} onKeyDown={toggleMenu} role="menuitem" tabIndex={0}>
            Company
            <img src="assets/icon-arrow-down.svg" alt="arrow icon" className="sidebar_list_icon" />
            <div className="sidebar_submenu">
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
      </aside>
    </div>
  );
}
