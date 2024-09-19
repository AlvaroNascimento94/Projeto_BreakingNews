import logo from "../../images/LogoBN.png";
import { IoIosSearch } from "react-icons/io";
import { Nav, ImageLogo, InputSpace, ErrorSpan } from "./NavBarStyled";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";
import { searchSchema } from "../../schemas/searchSchema";


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
        <Link to="/auth">
          <Button type="button" text="Entrar"></Button>
        </Link>
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
