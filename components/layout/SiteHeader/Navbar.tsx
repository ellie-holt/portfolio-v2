import NavLink from "../../ui/NavLink";

export default function Navbar() {
  return (
    <nav
      aria-label="Primary"
      className="w-screen -left-10 h-10 bg-white px-hpad relative border-t border-b"
    >
      <div className="flex h-full items-center justify-end">
        <ul className="m-0 flex list-none flex-wrap gap-6 px-0 ">
          <li>
            <NavLink href="#about">about</NavLink>
          </li>
          <li>
            <NavLink href="#work">work</NavLink>
          </li>
          <li>
            <NavLink href="#contact">contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
