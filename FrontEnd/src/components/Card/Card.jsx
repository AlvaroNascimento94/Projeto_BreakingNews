/* eslint-disable react/prop-types */
import {
  BsHandThumbsUp,
  BsHandThumbsUpFill,
  BsChatLeft,
  BsChatLeftDots,
} from "react-icons/bs";
import { CardBody, CardConteiner, CardFoot } from "./CardStyled.jsx";
import { TextLimit } from "../TextLimit/TextLimit.jsx";

export function Card(props) {
  return (
    <CardConteiner>
      <CardBody>
        <div>
          <h2>{props.title}</h2>
          <img src={props.banner} alt="Imagem" />
        </div>
        <TextLimit text={props.text} limit={150} />
      </CardBody>

      <CardFoot>
        <div>
          <BsHandThumbsUp />
          <span>{props.likes}</span>
        </div>
        <div>
          <BsChatLeft />
          <span>{props.comments}</span>
        </div>
      </CardFoot>
    </CardConteiner>
  );
}
