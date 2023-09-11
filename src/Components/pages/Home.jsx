import img from "../../images/avataaars.svg";
import { FaStar } from "react-icons/fa6";
function Home() {
  return (
    <>
      <div className="home">
        <div className="container vh-100 d-flex justify-content-center align-items-center flex-column">
          <div className="mt-5">
            <img className=" avatar mb-3" src={img} alt="avatar" />
          </div>
          <div className="homeContent text-center">
            <h2 className="text-white fs-1 fw-bolder mb-3">START FRAMEWORK</h2>
            <span className="text-white"><FaStar /></span>
            <p className="text-white mt-3">Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
