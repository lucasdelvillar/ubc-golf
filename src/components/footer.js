import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">Logo</div>
                <nav className="footer-nav">
                    <a href="/about" className="nav-link">About</a>
                    <a href="/tutorials" className="nav-link">Tutorials</a>
                    <a href="/members" className="nav-link">Members</a>
                    <a href="/events" className="nav-link">Events</a>
                    <a href="/contact-form" className="nav-link">Contact Form</a>
                </nav>
                <div className="footer-social">
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    © 2023 UBC Golf Club. All rights reserved.
                    <a href="/privacy-policy" className="nav-link">Privacy Policy</a>
                    <a href="/terms" className="nav-link">Terms and Conditions</a>
                    <a href="/cookie-policy" className="nav-link">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
