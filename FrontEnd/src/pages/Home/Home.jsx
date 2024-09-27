import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card.jsx";
import { getAllNews, getTopNews } from "../../services/postServices.js";
import { HomeBody, HomeHeader } from "./HomeStyled.jsx";
import  Cookies from 'js-cookie';

export default function Home() {
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState({});

  async function findAllNews() {
    const newsResponse = await getAllNews();
    setNews(newsResponse.data.results);

    const topNewsResponse = await getTopNews();
    setTopNews(topNewsResponse.data.news);
  }

  useEffect(() => {
    findAllNews();
    console.log(Cookies.get("token"))
  }, []);

  return (
    <>
      <HomeHeader>
        <Card
          top={true}
          title={topNews.title}
          text={topNews.text}
          banner={topNews.banner}
          likes={topNews.likes}
          comments={topNews.comments}
        />
      </HomeHeader>
      <HomeBody>
        {news.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </HomeBody>
    </>
  );
}
