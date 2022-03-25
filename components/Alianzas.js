import Image from "next/image";

const Alianzas= () => {
    const imgAlianzas = [
        "/../public/images/alianzas/alianza1.jpg",
        "/../public/images/alianzas/alianza2.png",
        "/../public/images/alianzas/alianza3.png",
        "/../public/images/alianzas/alianza4.png",
        "/../public/images/alianzas/alianza5.jpg",
        "/../public/images/alianzas/alianza6.png",
        "/../public/images/alianzas/alianza7.png",
        "/../public/images/alianzas/alianza8.png",
        "/../public/images/alianzas/alianza9.png",
        "/../public/images/alianzas/alianza10.png",
        "/../public/images/alianzas/alianza11.png",
        "/../public/images/alianzas/alianza12.png",
        "/../public/images/alianzas/alianza13.png",
        "/../public/images/alianzas/alianza14.png",
        "/../public/images/alianzas/alianza15.png",
        "/../public/images/alianzas/alianza16.png",
        "/../public/images/alianzas/alianza17.png",
        "/../public/images/alianzas/alianza18.png",
      ];

    return (
    <>
        <h4 className="titulo-alianzas">Estas son nuestras alianzas</h4>
        <div className="div-prin-alianzas">
            {imgAlianzas.map((imgAlianza, index) => (
                <li className="img-li" key={index}>
                    <Image
                    className="pb-2 ml-5 mr-5 img-alianzas"
                    src={imgAlianza}
                    alt="alianzas"
                    width={75}
                    height={65}
                    />
                </li>
            ))} 
        </div>
    </>
    );
};

export default Alianzas;