import { useNavigate, useParams } from "react-router-dom";
import { AddNewsContainer } from "./ManageNewsStyled";
import { newsSchema } from "../../schemas/newsSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorSpan } from "../../components/NavBar/NavBarStyled";
import { Button } from "../../components/Button/Button";
import { createNews } from "../../services/postServices";
import { Input } from "../../components/Input/Input";

export function ManageNews() {
  const { action } = useParams();
  const navigate = useNavigate();
  const {
    register: registerNews,
    handleSubmit: handleRegisterNews,
    formState: { errors: errorsRegisterNews },
  } = useForm({ resolver: zodResolver(newsSchema) });

  async function registerNewsSubmit(data) {
    try {
        await createNews(data);
        navigate("/profile");
    } catch (error) {
        console.log(error);
        
    }
  }

  async function editNewsSubmit(data) {
    /* try {
        await editNews(data);
        navigate("/profile");
    } catch (error) {
        console.log(error);
        
    } */
  }

  return (
    <AddNewsContainer>
      <h2>{action == "add" ? "Adicionar Notícia" : "Atualizar Notícia"}</h2>
      <form
        onSubmit={
          action == "add"
            ? handleRegisterNews(registerNewsSubmit)
            : handleRegisterNews(editNewsSubmit)
        }
      >
        <Input
          type="text"
          placeholder="Título"
          name="title"
          register={registerNews}
          value={action !== "add" ? "title" : ""}
        />
        {errorsRegisterNews.title && (
          <ErrorSpan>{errorsRegisterNews.title.message}</ErrorSpan>
        )}
        <Input
          type="text"
          placeholder="Link do banner"
          name="banner"
          value={action !== "add" ? "banner link" : ""}
          register={registerNews}
        />
        {errorsRegisterNews.banner && (
          <ErrorSpan>{errorsRegisterNews.banner.message}</ErrorSpan>
        )}
        <Input
          type="text"
          placeholder="Texto"
          name="text"
          isInput={false}
          value={action !== "add" ? "text" : ""}
          register={registerNews}
          />
          {errorsRegisterNews.text && (
            <ErrorSpan>{errorsRegisterNews.text.message}</ErrorSpan>
          )}

          <Button 
          type="submit"
          text={action == "add" ? "Adicionar" : "Atualizar"}
          />
      </form>
    </AddNewsContainer>
  );
}
