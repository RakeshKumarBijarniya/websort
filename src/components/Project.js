import { Link } from "react-router-dom";
import ImageCrousel from "../comman_component/ImageCrousel";
import "./style/project.css";
const Project = () => {
  return (
    <div>
      <div className="projectContainer p-4">
        <h2 className="text-center text-white">Our Projects</h2>
        <div>
          <ImageCrousel />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 d-lg-none d-flex justify-content-center">
              <div
                style={{
                  position: "fixed",
                  bottom: "20px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "10px",
                  alignItems: "center",
                  height: "73px",
                  zIndex: 999,
                  display: "flex",
                  justifyContent: "space-between",
                  width: "90%",
                }}
              >
                <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
                  <div className="text-center mt-3">
                    <div>
                      <img
                        src="/assets/Home.png"
                        alt="home"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </div>
                    <p>Home</p>
                  </div>
                </Link>
                <Link
                  to="/service"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <div className="text-center mt-3">
                    <div>
                      <img
                        src="/assets/service.png"
                        alt="service"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </div>

                    <p>Services</p>
                  </div>
                </Link>
                <Link
                  to="/project"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <div className="text-center mt-3">
                    <div>
                      <img
                        src="/assets/project_b.png"
                        alt="project"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </div>
                    <p>Project</p>
                  </div>
                </Link>
                <Link
                  to="/career"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <div className="text-center mt-3">
                    <div>
                      <img
                        src="/assets/career_b.png"
                        alt="career"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </div>
                    <p>Careers</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
