import { FaFacebook, FaTwitter, FaLinkedin, FaGlobe } from 'react-icons/fa6'
function Footer() {
    return <>
        <footer>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 py-4 ">
                    <div className="col text-center">
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="col text-center">
                        <h3>AROUND THE WEB</h3>
                        <div className='d-flex justify-content-center align-items-center'>
                            <ul className='d-flex p-0  gap-3'>
                                <li className=' border  border-1 d-flex align-items-center rounded-circle p-2'>
                                    <FaFacebook   />
                                </li>
                                <li className=' border  border-1 d-flex align-items-center rounded-circle p-2'>
                                    <FaTwitter  />
                                </li>
                                <li className=' border  border-1 d-flex align-items-center rounded-circle p-2'>
                                    <FaLinkedin  />
                                </li>
                                <li className=' border  border-1 d-flex align-items-center rounded-circle p-2'>
                                    <FaGlobe  />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col text-center">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
                
            </div>
            <div className='row p-4 m-0 footer-bottom'>
                    <div className='col-12 text-center '>
                        <span>Copyright &copy; Your Website 2023</span>
                    </div>
                </div>
        </footer>

    </>
}
export default Footer