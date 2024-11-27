import { useNavigate, useParams } from "react-router-dom";
import { AddNewsContainer } from "./ManageNewsStyled";
import { newsSchema } from "../../schemas/newsSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorSpan } from "../../components/NavBar/NavBarStyled";
import { Button } from "../../components/Button/Button";
import {
  createNews,
  deleteNews,
  editNews,
  getNewsById,
} from "../../services/postServices";
import { Input } from "../../components/Input/Input";
import { useEffect } from "react";
import { set } from "zod";

export function ManageNews() {
  const { action, id } = useParams();
  const navigate = useNavigate();
  const {
    register: registerNews,
    handleSubmit: handleRegisterNews,
    formState: { errors: errorsRegisterNews },
    setValue,
  } = useForm({ resolver: zodResolver(newsSchema) });

  async function registerNewsSubmit(data) {
    try {
      await createNews(data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
      console.log(error);

      console.log(error);
    }
  }

  async function editNewsSubmit(data) {
    try {
      await editNews(data, id);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  async function findNewsId(id) {
    try {
      const { data } = await getNewsById(id);
      setValue("title", data.title);
      setValue("banner", data.banner);
      setValue("text", data.text);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteNewsSubmit() {
    try {
      await deleteNews(id);
      navigate("/profile");
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    if (action === "edit" || action === "delete") {
      findNewsId(id);
    }
  }, []);

  return (
    <AddNewsContainer>
      <h2>
        {action == "add"
          ? "Adicionar "
          : action == "edit"
          ? "Atualizar "
          : "Apagar "}
        Notícia
      </h2>
      <form
        onSubmit={
          action == "add"
            ? handleRegisterNews(registerNewsSubmit)
            : action == "edit"
            ? handleRegisterNews(editNewsSubmit)
            : handleRegisterNews(deleteNewsSubmit)
        }
      >
        <Input
          type="text"
          placeholder="Título"
          name="title"
          register={registerNews}
          disabled={action === "delete"}
        />
        {errorsRegisterNews.title && (
          <ErrorSpan>{errorsRegisterNews.title.message}</ErrorSpan>
        )}
        <Input
          type="text"
          placeholder="Link do banner"
          name="banner"
          register={registerNews}
          disabled={action === "delete"}
        />
        {errorsRegisterNews.banner && (
          <ErrorSpan>{errorsRegisterNews.banner.message}</ErrorSpan>
        )}
        <Input
          type="text"
          placeholder="Texto"
          name="text"
          isInput={false}
          register={registerNews}
          disabled={action === "delete"}
        />
        {errorsRegisterNews.text && (
          <ErrorSpan>{errorsRegisterNews.text.message}</ErrorSpan>
        )}

        <Button
          type="submit"
          text={
            action == "add"
              ? "Adicionar"
              : action == "edit"
              ? "Atualizar"
              : "Apagar"
          }
        />
      </form>
    </AddNewsContainer>
  );
}
