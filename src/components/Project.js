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
      </div>
    </div>
  );
};

export default Project;
