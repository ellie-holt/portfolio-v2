import NavLink from "../../ui/NavLink";

export default function Navbar() {
  return (
    <nav
      aria-label="Primary"
      className="relative bg-white px-hpad border-black border-t border-b w-screen h-10 full-bleed-bar"
    >
      <div className="right-4 sm:right-0 flex md:justify-end items-center h-full">
        <ul className="flex justify-between md:justify-end md:gap-6 m-0 px-0 w-full md:w-auto list-none">
          <li>
            <NavLink href="/#about">about</NavLink>
          </li>
          <li>
            <NavLink href="/#work">work</NavLink>
          </li>
          <li>
            <NavLink href="/#contact">contact</NavLink>
          </li>
          <li className="hidden md:block">
            <NavLink href="/blog">blog</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
