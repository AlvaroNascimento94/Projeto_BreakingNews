/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  BsHandThumbsUp,
  BsHandThumbsUpFill,
  BsChatLeft,
  BsChatLeftDots,
  BsPencilSquare,
  BsTrash3,
} from "react-icons/bs";
import {
  CardBody,
  CardConteiner,
  CardFoot,
  CardHeader,
} from "./CardStyled.jsx";
import { TextLimit } from "../TextLimit/TextLimit.jsx";
import { Link } from "react-router-dom";

export function Card({
  top,
  title,
  text,
  likes,
  comments,
  banner,
  actions = false,
  id,
}) {
  return (
    <CardConteiner>
      <CardBody>
        <div>
          <CardHeader top={top}>
            {actions && (
              <span>
                <Link to={`/manage-news/edit/${id}`}>
                  <i>
                    <BsPencilSquare />
                  </i>
                </Link>
                <Link to={`/manage-news/delete/${id}`}>
                  <i>
                  <BsTrash3 />
                  </i>
                </Link>
              </span>
            )}
            <h2>{title}</h2>
            <TextLimit text={text} limit={150} />
          </CardHeader>
          <CardFoot>
            <section>
              <BsHandThumbsUp />
              <span>{likes?.length}</span>
            </section>
            <section>
              <BsChatLeft />
              <span>{comments?.length}</span>
            </section>
          </CardFoot>
        </div>
        <img src={banner} alt="Imagem" />
      </CardBody>
    </CardConteiner>
  );
}
