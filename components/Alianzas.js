// import ImageViewer from "react-simple-image-viewer";

const Alianzas= () => {
    const imgAlianzas = [
        "/images/alianzas/alianza17.png",
        "/images/alianzas/alianza1.jpg",
        "/images/alianzas/alianza3.png",
        "/images/alianzas/alianza4.png",
        "/images/alianzas/alianza6.png",
        "/images/alianzas/alianza7.png",
        "/images/alianzas/alianza15.png",
        "/images/alianzas/alianza9.png",
        "/images/alianzas/alianza10.png",
        "/images/alianzas/alianza2.png",
        "/images/alianzas/alianza11.png",
        "/images/alianzas/alianza12.png",
        "/images/alianzas/alianza13.png",
        "/images/alianzas/alianza14.png",
        "/images/alianzas/alianza8.png",
        "/images/alianzas/alianza16.png",
        "/images/alianzas/alianza5.jpg",
        "/images/alianzas/alianza18.png",
      ];

    return (
    <>
        <h4 className="titulo-alianzas">Alianzas estratégicas</h4>
        <div className="div-prin-alianzas">
            {imgAlianzas.map((imgAlianza, index) => ( 

                <li className="img-li" key={index}>
                    <img
                    className="pb-2 ml-5 mr-5 img-alianzas"
                    src={imgAlianza}
                    alt="alianzas"
                    height="70"
                    />       
                </li>  
            ))} 
        </div>
    </>
    );
};

export default Alianzas;