import { FaStar } from "react-icons/fa6";
function About() {
    return (
        <>
            <div className="about">
                <div className="container vh-100 d-flex justify-content-center align-items-center">
                    <div className="aboutContent text-center mt-5">
                        <h2 className="text-white fs-1 fw-bolder mb-3">ABOUT COMPONENT</h2>
                        <span className="text-white">
                            <FaStar />
                        </span>
                        <div className="row mt-4">
                            <div className="col-12 col-md-6">
                                <p className="text-white">
                                    Freelancer is a free bootstrap theme created by Route. The
                                    download includes the complete source files including HTML,
                                    CSS, and JavaScript as well as optional SASS stylesheets for
                                    easy customization.
                                </p>
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="text-white">
                                    Freelancer is a free bootstrap theme created by Route. The
                                    download includes the complete source files including HTML,
                                    CSS, and JavaScript as well as optional SASS stylesheets for
                                    easy customization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;
