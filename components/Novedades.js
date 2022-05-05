import React, { useEffect, useState } from "react";

export default function Novedades ()  {

    const [posts, setPosts] = useState([]);
    const toText = (node) => {
        let tag = document.createElement("div");
        tag.innerHTML = node;
        node = tag.innerText;
        return node;
    };
    const shortenText = (text, startingPoint, maxLength) => {
        return text.length > maxLength
            ? text.slice(startingPoint, maxLength)
            : text;
    };
    const changeDay = (dayToChange) => {
        let date = new Date(dayToChange)
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        if (month < 10) {
            return `${day}-0${month}-${year}`
        } else {
            return `${day}-${month}-${year}`
        }
    }
    useEffect(() => {
        let mounted = true;
        fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@corresp.mx"
        )
            .then((res) => res.json())
            .then((items) => {
               
                    setPosts(items.items);
                    console.log(items)
                
            });
        return () => (mounted = false);
    }, []);

    const postsFiltrado = posts.slice(0, 6);

    return (
        <div className="container" style={{fontFamily: "Montserrat"}}>
            <h2 className="text-center text-title primary-color bg-transparent" style={{fontFamily: "Montserrat"}}>Novedades y Eventos</h2>
            <div className="line-deco"></div>
            <div className="row columnas-nov">
                {postsFiltrado.map((post, index) => (
                    <div key={index} className="col-12 col-lg-4 card-nov-ind">
                        <div className="card div-nov h-100" style={{backgroundColor: "lavender", borderRadius: "25px"}}>
                            <div className="img-nov">{<img src={post.thumbnail} className="card-img-top navbar-style mt-2 responsive" alt="card-image" width={150} height={200} style={{borderRadius: "25px 0"}}/>}                          
                            </div>
                            <div className="card-body"  style={{fontFamily: "Montserrat"}}>
                                <h5 className="primary-color bg-transparent">{post.title}</h5>
                                <p className="card-text"> {"..." + shortenText(toText(post.content), 50, 200) + "..."}</p>
                                <p className="text-muted">{"Publicado el " + changeDay(post.pubDate)}</p>
                                <a href={post.guid} rel="noreferrer" target="_blank" className="btn mb-1"><span className="secondary-color bg-transparent"> LEER MÁS </span></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

