import { Card } from "../../components/Card/Card.jsx";
import { NavBar } from "../../components/NavBar/NavBar";
import { news } from "../../Data.js";
import { HomeBody } from "./HomeStyled.jsx";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeBody>
        {news.map((item, index) => (
          <Card key={index} news={item} />
        ))}
      </HomeBody>
    </>
  );
}
