import { BsPencilSquare } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";


const Video = () => {
    return (
      <>
      <div className="div-video">
          <span className=" video-yout embed-responsive embed-responsive-4by3">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Ku0BLi3FilY" allowFullScreen></iframe>
          </span>
          <span className=" video-yout embed-responsive embed-responsive-4by3">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/XtuotJR9GZw" allowFullScreen></iframe>
          </span>
          <div className="div-btn-video">
              <h4 className="video-h4">Eventos y novedades</h4>
              <button className="boton-video"><a className="video-text" href="#" rel="noreferrer" target="_blank"><BsPencilSquare/> Blog</a></button>
              <button className="boton-video"><a className="video-text" href="https://www.facebook.com/csm.org.mx" rel="noreferrer" target="_blank"><BsFacebook/> Facebook</a></button>
              <button className="boton-video"><a className="video-text" href="https://www.instagram.com/corresponsabilidadsocialmx" rel="noreferrer" target="_blank"><BsInstagram/> Instagram</a></button>
              <br />
              <button className="boton-video"><a className="video-text" href="#" rel="noreferrer" target="_blank"><BsCart4/> Productos solidarios</a></button>
          </div>
      </div>
      </>
  )}
  
  export default Video;
  