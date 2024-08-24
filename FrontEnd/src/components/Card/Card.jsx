import {
  BsHandThumbsUp,
  BsHandThumbsUpFill,
  BsChatLeft,
  BsChatLeftDots,
} from "react-icons/bs";
import { CardBody, CardConteiner, CardFoot } from "./CardStyled.jsx";

export function Card({ news }) {
  return (
    <CardConteiner>
      <CardBody>
        <div>
          <h2>{news.title}</h2>
          <p>{news.text}</p>
        </div>
        <img src={news.image} alt="Imagem" />
      </CardBody>

      <CardFoot>
        <div>
          <BsHandThumbsUp />
          <span>{news.likes}</span>
        </div>
        <div>
          <BsChatLeft />
          <span>{news.comments}</span>
        </div>
      </CardFoot>
    </CardConteiner>
  );
}
