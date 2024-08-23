import { BsHandThumbsUp, BsHandThumbsUpFill, BsChatLeft, BsChatLeftDots } from "react-icons/bs";

export function Card({news}) {
    console.log(news);
    
    return(
    <section>
        <h2>{news.title}</h2>
        <p>{news.text}</p>
        <img src={news.image} alt="Imagem" />
        <BsHandThumbsUp/>
        <span>{news.likes}</span>
        <BsChatLeft/>
        <span>{news.comments}</span>

    </section>    
    )
    
}