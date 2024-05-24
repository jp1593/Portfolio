import "./Header.css";

function Header() {
  return (
    <header>
      <div className="flex item-center justify-center py-10">
        <div className="container text-white border rounded-full">
          <nav className="justify-between items-center h-10 p-10 hidden sm:flex">
            <ul className="flex gap-10">
              <li className="hover:text-gray-500">
                <a href="/experience">Experience</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="/projects">Projects</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="/stack">Stack</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
