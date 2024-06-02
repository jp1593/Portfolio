import "./Header.css";

function Header() {
  return (
    <header>
      <div className="flex item-center justify-center py-5">
        <div className="containerh text-white border rounded-full">
          <nav className="justify-between items-center h-10 p-10 hidden sm:flex">
            <ul className="flex gap-10">
              <li>
                <a className="a-header" href="/experience">
                  Experience
                </a>
              </li>
              <li>
                <a className="a-header" href="/projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="a-header" href="/stack">
                  Stack
                </a>
              </li>
              <li>
                <a className="a-header" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
