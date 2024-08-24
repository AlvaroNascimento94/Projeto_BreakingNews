import { Card } from "../../components/Card/Card.jsx";
import { NavBar } from "../../components/NavBar/NavBar";
//import { news } from "../../Data.js";
import { getAllNews } from "../../services/postServices.js";
import { HomeBody } from "./HomeStyled.jsx";

export default function Home() {
let news;
  async function findAllNews() {
    const response = await getAllNews();
    news = response.data.results;
  }

  findAllNews();
  console.log(news);
  

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
