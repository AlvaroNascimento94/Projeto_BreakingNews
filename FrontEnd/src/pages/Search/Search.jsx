import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchNews } from "../../services/postServices";
import { Card } from "../../components/Card/Card";
import { ContainerResults, SearchNews, TestResults } from "./SearchStyled";

export function Search() {
  const { title } = useParams();
  const [post, setPost] = useState([]);

  async function search() {
    try {
      const postsApi = await searchNews(title);
      setPost(postsApi.data.foundNews);
      console.log(postsApi.data.foundNews);
    } catch (err) {
      console.log(err);
      setPost([]);
    }
  }
  useEffect(() => {
    search();
  }, [title]);

  return (
    <ContainerResults>
      <TestResults>
        <span>
          {post.length !== 0
            ? `Encontramos ${post.length} ${
                post.length > 1 ? "resultados" : "resultado"
              } para:`
            : "Não encontramos reultados para"}
        </span>
        <h2>{title}</h2>
      </TestResults>

      <SearchNews>
        {post.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </SearchNews>
    </ContainerResults>
  );
}
