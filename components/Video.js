import Link from "next/link";
import { BsPencilSquare } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
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
              <h4 className="video-h4">Novedades y eventos</h4>
              <button className="boton-video">
                  <Link href="/blog" rel="noreferrer">
                      <a className="video-text"><BsPencilSquare/> Blog</a>
                    </Link></button>
              <button className="boton-video"><a className="video-text" href="https://www.facebook.com/csm.org.mx" rel="noreferrer" target="_blank"><BsFacebook/> Facebook</a></button>
              <button className="boton-video"><a className="video-text" href="https://www.instagram.com/corresponsabilidadsocialmx" rel="noreferrer" target="_blank"><BsInstagram/> Instagram</a></button>
              <br />
              <button className="boton-video"><a className="video-text" href="#" rel="noreferrer" target="_blank"><BsCart4/> Productos solidarios</a></button>
              <button className="boton-video"><a className="video-text" href="https://www.youtube.com/channel/UCh0vbe17E2RDE_FOVrSmf0w" rel="noreferrer" target="_blank"><BsYoutube/> Youtube</a></button>
          </div>
      </div>
      </>
  )}
  
  export default Video;
  