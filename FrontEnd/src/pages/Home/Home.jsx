import { Card } from "../../components/Card/Card.jsx";
import { NavBar } from "../../components/NavBar/NavBar";
import { news } from "../../Data.js";

export default function Home() {
  return (
    <>
      <NavBar />
      {news.map((item, index) => (
        <Card key={index} news={item} />
      ))}
    </>
  );
}
