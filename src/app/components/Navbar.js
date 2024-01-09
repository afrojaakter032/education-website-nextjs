

import Link from 'next/link';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const myNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Link href="/">
        <a className="navbar-brand">EdoHome</a>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/home">
            <a className="nav-link">Home</a>
          </Link>
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
          <Link href="/events">
            <a className="nav-link">Events</a>
          </Link>
          <Link href="/blog">
            <a className="nav-link">Blog</a>
          </Link>
          <Link href="/contact">
            <a className="nav-link">Contact</a>
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success"><FaSearch /></Button>
        </Form>
        <Button variant="outline-primary" className="ml-2">Login</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default myNavbar;
