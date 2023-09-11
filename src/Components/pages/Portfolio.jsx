import { FaStar, FaPlus } from "react-icons/fa6";
import img1 from "../../images/port1.png";
import img2 from "../../images/port2.png";
import img3 from "../../images/port3.png";
import { useState } from "react";
import Viewer from "../ui/Viewer";

function Portfolio() {
  const [img, setImg] = useState("");
  const [open, setOpen] = useState(false);
  function handleOpen(img) {
    setImg(img);
    setOpen(true);
  }
  return (
    <>
      <div className="portfolio">
        <div className="container  d-flex justify-content-center align-items-center flex-column">
          <div className="portfolioContent text-center mb-3">
            <h2 className="  fs-1 fw-bolder "> PORTFOLIO COMPONENT</h2>
            <span>
              <FaStar />
            </span>
          </div>
          <div className="  row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
            <div className="col">
              <div
                onClick={() => handleOpen(img1)}
                className=" overflow-hidden rounded-3"
              >
                <img className="w-100" src={img1} alt="portfolio-img1" />
                <div className="plus-icon d-flex justify-content-center align-items-center">
                  <FaPlus className="text-white display-3" />
                </div>
              </div>
            </div>
            <div className="col">
              <div
                onClick={() => handleOpen(img2)}
                className=" overflow-hidden rounded-3"
              >
                <img className="w-100" src={img2} alt="portfolio-img2" />
                <div className="plus-icon d-flex justify-content-center align-items-center">
                  <FaPlus className="text-white display-3" />
                </div>
              </div>
            </div>
            <div className="col">
              <div
                onClick={() => handleOpen(img3)}
                className=" overflow-hidden rounded-3"
              >
                <img className="w-100" src={img3} alt="portfolio-img3" />
                <div className="plus-icon d-flex justify-content-center align-items-center">
                  <FaPlus className="text-white display-3" />
                </div>
              </div>
            </div>
            <div className="col">
              <div
                onClick={() => handleOpen(img1)}
                className=" overflow-hidden rounded-3"
              >
                <img className="w-100" src={img1} alt="portfolio-img1" />
                <div className="plus-icon d-flex justify-content-center align-items-center">
                  <FaPlus className="text-white display-3" />
                </div>
              </div>
            </div>
            <div className="col">
              <div
                onClick={() => handleOpen(img2)}
                className=" overflow-hidden rounded-3"
              >
                <img className="w-100" src={img2} alt="portfolio-img2" />
                <div className="plus-icon d-flex justify-content-center align-items-center">
                  <FaPlus className="text-white display-3" />
                </div>
              </div>
            </div>
            <div className="col">
              <div
                onClick={() => handleOpen(img3)}
                className=" overflow-hidden rounded-3"
              >
                <img className="w-100" src={img3} alt="portfolio-img3" />
                <div className="plus-icon d-flex justify-content-center align-items-center">
                  <FaPlus className="text-white display-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && <Viewer img={img} setOpen={setOpen} />}
    </>
  );
}
export default Portfolio;
