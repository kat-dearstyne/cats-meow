import React from "react";

function Navbar() {
  return (
      <nav>
        <ul>
          <NavItem link="/" text="Home" />
          <NavItem link="/cats" text="Our Cats" />
          <NavItem link="/adopt" text="Adopt" />
          <NavItem link="/news" text="News" />
          <NavItem link="/contact" text="Contact" />
        </ul>
      </nav>
  );
}

function NavItem({ link, text }) {
  return (
      <li>
        <a href={link}>{text}</a>
      </li>
  );
}

export default Navbar;
