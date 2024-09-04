import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 1rem 1rem;
  background-color: #fff;
  z-index: 1;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;
export const ImageLogo = styled.img`
  width: 8rem;
  height: 3.5rem;
  object-fit: cover;
  cursor: pointer;
`;

export const InputSpace = styled.div`
  position: relative;
  width: 250px;
  display: flex;
  align-items: center;

  button {
    position: absolute;
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    color: #757575;
    border-radius: 0.3rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
  }
  button:hover{
    background-color: #757575;
    color: #f5f5f5
  }

  input {
    outline: none;
    font-size: 1rem;
    padding: 0.6rem;
    background-color: #f5f5f5;
    border: none;
    width: 100%;
    border-radius: 0.3rem;

    :focus {
      border: 1px solid #19bdff;
    }
  }
`;

export const Button = styled.button`
  background-color: #19bdff;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  color: #fff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: "Roboto", arial;
  /* width: 15%; */
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  :hover {
    background-color: #249cff;
  }
`;

export const ErrorSpan = styled.span`
  background-color: #ffaeae;
  color: #9e0000;
  padding: 1rem;
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: bold;
`