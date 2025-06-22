import "./style/service.css";
const Service = () => {
  return (
    <div>
      <div className="topContainer">
        <h1 className="text-white text-center">Our Services</h1>
        <div className="container">
          <div className="row">
            <div className="col-12 image-container col-lg-6 d-flex flex-row justify-content-center">
              <img
                src="/assets/project-3.jpg"
                alt="ui/ux-image"
                style={{ borderRadius: "20px", border: "1px solid #fff" }}
              />
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-white text-center">UI/UX Design</h2>
              <p className="text-white text-center">
                We design clean, intuitive, and engaging user interfaces that
                enhance the overall user experience. From wireframes to final
                designs, our focus is on usability, consistency, and creating
                visually appealing digital products that users love.
              </p>
            </div>

            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-white text-center">Web Development</h2>
              <p className="text-white text-center">
                Planned and executed a digital marketing strategy including SEO,
                social media marketing, and content creation. Improved website
                traffic and engagement through targeted campaigns and regular
                performance tracking.
              </p>
            </div>
            <div className="col-12 image-container  col-lg-6 d-flex flex-row justify-content-center">
              <img
                src="/assets/project-1.jpg"
                alt="ui/ux-image"
                style={{ borderRadius: "20px", border: "1px solid #fff" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="midContainer">
        <div className="container">
          <div className="row">
            <div className="col-12 image-container col-lg-6 d-flex flex-row justify-content-center">
              <img
                src="/assets/app_dev.jpg"
                alt="ui/ux-image"
                style={{ borderRadius: "20px", border: "1px solid #fff" }}
              />
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-white text-center">App Development</h2>
              <p className="text-white text-center">
                Developed a cross-platform mobile app using Flutter for Android
                and iOS. The app allows users to browse services, make bookings,
                and receive real-time updates. Designed with a clean UI and
                smooth navigation to ensure a seamless user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomContainer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-white text-center">Digital Marketing</h2>
              <p className="text-white text-center">
                Designed and developed a responsive, SEO-optimized website using
                React. The site includes a modern UI, fast loading speed, and
                full mobile compatibility. Key features include service pages,
                contact form, and an easy-to-manage content structure to support
                client updates and user engagement.
              </p>
            </div>
            <div className="col-12 image-container col-lg-6 d-flex flex-row justify-content-center">
              <img
                src="/assets/digit-market.jpg"
                alt="ui/ux-image"
                style={{ borderRadius: "20px", border: "1px solid #fff" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
