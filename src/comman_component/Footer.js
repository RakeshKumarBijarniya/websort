import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center justify-content-lg-start">
              <div style={{ padding: "30px 60px" }}>
                <img
                  src="/assets/footerLogo.svg"
                  className="logoIcon"
                  alt="footer-logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className=" d-flex flex-column flex-lg-row  justify-content-between">
            <div className="text-container d-flex flex-sm-row flex-lg-column">
              <p className="text-white">
                Web Development | App Development | UI/UX Design | Digital
                Marketing
              </p>
              <p className="text-white">
                Based in Bangalore | ✉️ contact@websort.com | 📞 +91-XXXXXXXXXX
              </p>
            </div>
            <div className="logo-container d-flex gap-3 align-items-end justify-content-end p-3">
              <div className="me-4">
                <img
                  src="/assets/instagramIcon.png"
                  style={{ width: "30px" }}
                  alt="social-icon"
                />
              </div>
              <div className="me-4">
                <img
                  src="/assets/facebookIcon.png"
                  style={{ width: "30px" }}
                  alt="social-icon"
                />
              </div>
              <div className="me-5">
                <img
                  src="/assets/googleIcon.png"
                  style={{ width: "30px" }}
                  alt="social-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ background: "#DAE5FF" }}>
        <h5>© 2025 Websort. All rights reserved.</h5>
      </div>
    </>
  );
};

export default Footer;
