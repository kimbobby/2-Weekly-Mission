import SNS from "../../data/SNS";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-box">
        <span className="copyright">©codeit - 2023</span>
        <div className="footer-links">
          <a className="footer-link" href="privacy.html">
            Privacy Policy
          </a>
          <a className="footer-link" href="faq.html">
            FAQ
          </a>
        </div>
        <div className="sns">
          {SNS.map(({ name, data }) => {
            return (
              <a key={name} href={data?.link} target="_blank" rel="noopener noreferrer">
                <img src={data?.icon} alt={data?.alt} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
