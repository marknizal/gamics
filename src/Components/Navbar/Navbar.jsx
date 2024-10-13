import React, { useState } from "react";
import Container from "../Container/Container";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import {
  Wrapper,
  NavbarContent,
  Logo,
  NavLinks,
  Icons,
  HamburgerMenu,
} from "./Navbar.styled";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Live", path: "/live" },
    { name: "Features", path: "/features" },
    { name: "Shop", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Wrapper>
      <Container>
        <NavbarContent>
          <Logo>Gamics</Logo>
          <NavLinks isMobileMenuOpen={isMobileMenuOpen}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </NavLinks>
          <Icons>
            <HamburgerMenu onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </HamburgerMenu>
            <FaShoppingCart />
            <FaSearch />
          </Icons>
        </NavbarContent>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
