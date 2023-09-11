import { FaStar } from "react-icons/fa6";
function Contact() {
    return (
        <>
            <div className="contact">
                <div className="container vh-100 d-flex justify-content-center align-items-center flex-column">
                    <div className="contactContent text-center">
                        <h2 className=" fs-1 fw-bolder mb-3">CONATCT SECTION</h2>
                        <span>
                            <FaStar />
                        </span>
                    </div>
                    <form className="w-50">
                        <input
                            className="form-control border-0 border-bottom my-3"
                            type="text"
                            placeholder="User Name"
                        />
                        <input
                            className="form-control border-0 border-bottom my-3"
                            type="number"
                            placeholder="User Age"
                        />
                        <input
                            className="form-control border-0 border-bottom my-3"
                            type="email"
                            placeholder="User Email"
                        />
                        <input
                            className="form-control border-0 border-bottom my-3"
                            type="password"
                            placeholder="User Password"
                        />
                        <div>
                            <button className="btn ">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Contact;
