import NavLink from "../../ui/NavLink";

export default function Navbar() {
  return (
    <nav
      aria-label="Primary"
      className="w-full bg-white px-[clamp(1rem,3vw,2.5rem)]"
    >
      <ul className="m-0 flex list-none flex-wrap gap-6 px-0 py-4">
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
    </nav>
  );
}
