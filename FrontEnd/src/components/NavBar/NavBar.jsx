import logo from "../../images/LogoBN.png";
import { IoIosSearch } from "react-icons/io";
import { Button, Nav, ImageLogo, InputSpace, ErrorSpan } from "./NavBarStyled";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
  title: z
    .string()
    .min(1, { message: "A pesquisa não pode ser vazia" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "A pesquisa não pode conter apenas espaços",
    }),
});

export function NavBar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }
  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputSpace>
            <button type="submit">
              <IoIosSearch className="search" />
            </button>
            <input
              {...register("title")}
              type="text"
              placeholder="Pesquise por um titulo"
            />
          </InputSpace>
        </form>
        <Link to="/">
          <ImageLogo src={logo} alt="Logo Breaking News" />
        </Link>
        <Button>Entrar</Button>
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
