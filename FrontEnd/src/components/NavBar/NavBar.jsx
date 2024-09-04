import logo from "../../images/LogoBN.png"
import { IoIosSearch } from "react-icons/io";
import { Button, Nav, ImageLogo, InputSpace } from './NavBarStyled';
import { Outlet } from "react-router-dom";

export function NavBar() {
  
  return (
    <>
      <Nav>
        <InputSpace>
            <IoIosSearch className="search" />
            <input type="text" placeholder="Pesquise por um titulo" />
        </InputSpace>
        <ImageLogo src={logo} alt="Logo Breaking News" />
        <Button>Entrar</Button>
      </Nav>
      <Outlet/>
    </>
  );
}