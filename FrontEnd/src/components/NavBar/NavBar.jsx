import logo from "../../images/LogoBN.png"
import { IoIosSearch } from "react-icons/io";
import "./Navbar.css"
export function NavBar() {
  return (
    <>
      <nav>
        <div className="input-search-space">
            <IoIosSearch className="search" />
            <input type="text" placeholder="Pesquise por um titulo" />
        </div>
        <img src={logo} alt="Logo Breaking News" />
        <button>Entrar</button>
      </nav>
    </>
  );
}
