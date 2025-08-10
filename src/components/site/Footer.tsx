import { Button } from "@/components/ui/button";
import "../css/Footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-grid">
          {/* Logo & Description */}
          <div className="footer-about">
            <div className="footer-logo">
              <img src="/logo.png" alt="Digitizee Logo" />
              <span>DIGITIZEE</span>
            </div>
            <p>
              Global B2B data solutions provider since 2016. Empowering
              businesses with premium data and digital marketing services
              worldwide.
            </p>
            <a href="mailto:reach@digitizeeagency.com" className="footer-email">
              reach@digitizeeagency.com
            </a>
            <p className="footer-countries">US CA IE GB AU SG NZ</p>
          </div>

          {/* Services */}
          <div className="footer-links">
            <h3>Services & Solutions</h3>
            <ul>
              <li>B2B Data Sales</li>
              <li><Link to="/data-cards">Data Cards</Link></li>
              <li>Email Marketing</li>
              <li>Digital Marketing</li>
              <li>Mobile Apps</li>
              <li>Data Cleansing</li>
            </ul>
          </div>

          {/* Policies */}
          <div className="footer-links">
            <h3>Policies</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Data Protection</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="footer-cta">
            <h3>Ready to Transform Your Business?</h3>
            <p>Contact us for more information and get started today.</p>
            <Button className="footer-btn">
              Contact Us for More Info
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Digitize Agency LLC - All Rights
          Reserved | Serving 200+ countries worldwide
        </p>
        <div className="footer-meta">
          <span>GDPR</span>
          <span>CCPA</span>
          <span>CASL</span>
          <span>PCI DSS</span>
          <span>HIPAA</span>
          <span>Cards</span>
          <span>Wire</span>
          <span>Check</span>
          <a href="#">Unsubscribe</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
