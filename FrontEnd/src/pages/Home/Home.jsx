import { Card } from "../../components/Card/Card.jsx";
import { NavBar } from "../../components/NavBar/NavBar";
//import { news } from "../../Data.js";
import { getAllNews } from "../../services/postServices.js";
import { HomeBody } from "./HomeStyled.jsx";
import { useEffect, useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);

  async function findAllNews() {
    const response = await getAllNews();
    setNews(response.data.results);
  }

  useEffect(() =>{
    findAllNews();
  },[])

  return (
    <>
      <NavBar />
      <HomeBody>
        {news.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes= {item.likes.length}
            comments= {item.comments.length}
          />
        ))}
      </HomeBody>
    </>
  );
}
