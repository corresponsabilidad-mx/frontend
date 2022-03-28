
const Video = () => {
    return (
      <>
      <div className="div-video">
          <span class=" video-yout embed-responsive embed-responsive-4by3">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Ku0BLi3FilY" allowfullscreen></iframe>
          </span>
          <span class=" video-yout embed-responsive embed-responsive-4by3">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/XtuotJR9GZw" allowfullscreen></iframe>
          </span>
          <div className="div-bnt-video">
              <h4 className="video-h4">Nuestros eventos y novedades</h4>
              <button className="boton-video"><a className="text-white video-text" href="#" rel="noreferrer" target="_blank">Visitar Blog</a></button>
              <button className="boton-video"><a className="text-white video-text" href="https://www.facebook.com/csm.org.mx" rel="noreferrer" target="_blank">Facebook</a></button>
              <button className="boton-video"><a className="text-white video-text" href="https://www.instagram.com/corresponsabilidadsocialmx" rel="noreferrer" target="_blank">Instagram</a></button>
              <br />
              <button className="boton-video"><a className="text-white video-text" href="#" rel="noreferrer" target="_blank">Conoce nuestros productos solidarios</a></button>
  
          </div>
      </div>
      </>
  )}
  
  export default Video;
  