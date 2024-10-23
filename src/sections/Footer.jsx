const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/ssobii2?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-8 h-8"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.facebook.com/ssobii2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/facebook.svg"
              alt="facebook"
              className="w-8 h-8"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/muhammad-subhan-imran-642260228/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/linkedin.svg"
              alt="linkedin"
              className="w-7 h-7"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Subhan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
