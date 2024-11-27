import logo from "../../images/LogoBN.png";
import { IoIosSearch } from "react-icons/io";
import { BsBoxArrowRight } from "react-icons/bs";
import { Nav, ImageLogo, InputSpace, ErrorSpan, UserLoggedSpace } from "./NavBarStyled";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";
import { searchSchema } from "../../schemas/searchSchema";
import { userLogged } from "../../services/userServices";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { UserContext } from "../../Context/UserContext";

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
  
  const {user, setUser} = useContext(UserContext);


  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }
  function singout() {
    Cookies.remove("token");
    setUser(undefined);
    navigate("/");
  }

  async function findUserLogged() {
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (Cookies.get("token")) findUserLogged();
  }, []);

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
        {user ? (
          <UserLoggedSpace>
            <Link to="/profile" style={{textDecoration:'none'}}>
              <h2>{user.name}</h2>
            </Link>
            <BsBoxArrowRight onClick={singout} className="exit"/>
          </UserLoggedSpace>
        ) : (
          <Link to="/auth">
            <Button type="button" text="Entrar"></Button>
          </Link>
        )}
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
