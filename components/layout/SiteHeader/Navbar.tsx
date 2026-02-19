import NavLink from "../../ui/NavLink";

export default function Navbar() {
  return (
    <nav aria-label="Primary">
      <ul>
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
