import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./navbar.css";

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/tutorials">Tutorials</Nav.Link>
                <Nav.Link href="/members">Members</Nav.Link>
                <Nav.Link href="/events">Events</Nav.Link>
                {/* <Nav.Link href="/contact-form">Contact Form</Nav.Link> */}
            </Nav>
            <Button variant="outline-light" className="btn-sign-up" href="/signup" target="_blank" rel="noreferrer">SIGN UP</Button>
            <Button variant="outline-light" className="btn-contact-us" href="https://xc2xrmq5xda.typeform.com/to/kow4JIbq" target="_blank" rel="noreferrer">CONTACT US</Button>
        </Navbar>
    );
}

export default NavBar;