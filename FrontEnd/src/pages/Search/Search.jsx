import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchNews } from "../../services/postServices";
import { Card } from "../../components/Card/Card";
import { ContainerResults, SearchNews, TestResults } from "./SearchStyled";

export function Search() {
  const { title } = useParams();
  const [post, setPost] = useState([]);

  const search = useCallback(async () => {
    try {
      const postsApi = await searchNews(title);
      setPost(postsApi.data.foundNews);
      console.log(postsApi.data.foundNews);
    } catch (err) {
      console.log(err);
      setPost([]);
    }
  }, [title]);

  useEffect(() => {
    search();
  }, [search]);

  return (
    <ContainerResults>
      <TestResults>
        <span>
          {post.length !== 0
            ? `Encontramos ${post.length} ${
                post.length > 1 ? "resultados" : "resultado"
              } para:`
            : "Não encontramos resultados para"}
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
