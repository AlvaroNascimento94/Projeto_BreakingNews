/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  BsHandThumbsUp,
  BsHandThumbsUpFill,
  BsChatLeft,
  BsChatLeftDots,
} from "react-icons/bs";
import {
  CardBody,
  CardConteiner,
  CardFoot,
  CardHeader,
} from "./CardStyled.jsx";
import { TextLimit } from "../TextLimit/TextLimit.jsx";

export function Card(props) {
  return (
    <CardConteiner>
      <CardBody >
        <div>
          <CardHeader top={props.top}>
            <h2>{props.title}</h2>
            <TextLimit text={props.text} limit={150} />
          </CardHeader>
          <CardFoot>
            <section>
              <BsHandThumbsUp />
              <span>{props.likes?.length}</span>
            </section>
            <section>
              <BsChatLeft />
              <span>{props.comments?.length}</span>
            </section>
          </CardFoot>
        </div>
        <img src={props.banner} alt="Imagem" />
      </CardBody>
    </CardConteiner>
  );
}
