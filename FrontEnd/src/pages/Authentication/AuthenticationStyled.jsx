import styled from "styled-components";
import App from "../../App";

export const AuthContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 auto;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 400px;
  padding: 2rem 4rem;
  gap: 1rem;
  background-color: ${(props) => (props.type === "signin" ? "blue" : "white")};
  color: ${(props) => (props.type === "signup" ? "blue" : "white")};
  h2 {
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
  }
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    ;
  }
`;
export const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 2rem;
  font-weight: 700;
  position: fixed;
  top: 0;
  right: 2rem;
`;