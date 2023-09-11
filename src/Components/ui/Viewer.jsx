import { useRef } from "react"

function Viewer({ img, setOpen }) {
    const imgEle = useRef(null)
    function handleClose(target) {
        if (target !== imgEle.current) {
            setOpen(false)
        }
    }
    return (
        <>
            <div className="viewer" onClick={(e) => handleClose(e.target)}>
                <img src={img} alt="portfolio-img" ref={imgEle} />
            </div>
        </>
    )
}
export default Viewer