import "./style/career.css";
import ContectForm from "../comman_component/ContectForm";

const Career = () => {
  return (
    <div>
      <div className="firstContainer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-white text-center">
                Talent wins games, but teamwork and intelligence win
                championships.
              </h2>
              <p className="text-white text-center">
                At Websort, we bring digital ideas to life through expert web
                and app development, digital marketing, and UI/UX design. Based
                in Bangalore, we build responsive websites and mobile apps,
                enhance online visibility with SEO, PPC, and social media, and
                design user-friendly interfaces. Choose Websort for innovative,
                tailored digital solutions.
              </p>
            </div>
            <div className="col-12 image-container col-lg-6 d-flex flex-row justify-content-center">
              <img
                src="/assets/career.png"
                alt="ui/ux-image"
                style={{ borderRadius: "20px", border: "1px solid #fff" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="midContainer d-flex justify-content-center flex-column">
        <h4 className="text-center text-white">
          Internship Opportunities at Websort
        </h4>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3 d-flex flex-row flex-lg-column justify-content-around mt-3 align-items-center">
              <div>
                <img
                  src="/assets/market.png"
                  alt="career-image"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid #fff",
                    width: "150px",
                    height: "150px",
                  }}
                />
              </div>
              <p className="text-white" style={{ width: "140px" }}>
                Marketing
              </p>
            </div>
            <div className="col-12 col-lg-3 d-flex flex-row flex-lg-column justify-content-around mt-3  align-items-center">
              <div>
                <img
                  src="/assets/mobile.png"
                  alt="career-image"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid #fff",
                    width: "150px",
                    height: "150px",
                  }}
                />
              </div>
              <p className="text-white" style={{ width: "140px" }}>
                App Development
              </p>
            </div>

            <div className="col-12 col-lg-3 d-flex flex-row flex-lg-column justify-content-around mt-3  align-items-center">
              <div>
                <img
                  src="/assets/web.png"
                  alt="career-image"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid #fff",
                    width: "150px",
                    height: "150px",
                  }}
                />
              </div>
              <p className="text-white" style={{ width: "140px" }}>
                Web Development
              </p>
            </div>
            <div className="col-12 col-lg-3 d-flex flex-row flex-lg-column justify-content-around mt-3 align-items-center">
              <div>
                <img
                  src="/assets/ui-ux.png"
                  alt="career-image"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid #fff",
                    width: "150px",
                    height: "150px",
                  }}
                />
              </div>
              <p className="text-white " style={{ width: "140px" }}>
                UI UX
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomContainer" style={style.bottomContainer}>
        <ContectForm />
      </div>
    </div>
  );
};

export default Career;

const style = {
  bottomContainer: {
    backgroundImage: `url("/assets/contect_bottom.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    position: "relative",
  },
};
