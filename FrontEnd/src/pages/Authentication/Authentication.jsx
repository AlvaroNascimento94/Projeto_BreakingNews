import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Article, AuthContainer, Section } from "./AuthenticationStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../schemas/signinSchema";
import { signupSchema } from "../../schemas/signupSchema";
import { ErrorSpan } from "../../components/NavBar/NavBarStyled";
import { Link } from "react-router-dom";
import { signup, signin } from '../../services/userServices';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export function Authentication() {
  const navigate = useNavigate();
  
  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: errorsSignup },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    formState: { errors: errorsSignin },
  } = useForm({ resolver: zodResolver(signinSchema) });

  async function inHandleSubmit(data) {
    try {
      const response = await signin(data);
      Cookies.set("token", response.data, { expires: 1});
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  async function upHandleSubmit(data) {
    try {
      const response = await signup(data);
      Cookies.set("token", response.data, { expires: 1});
      navigate('/');
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContainer>
      <Article>
        <Link to="/">
          <Button type="button" text="Voltar" id="voltar" />
        </Link>
      </Article>
      <Section type="signin">
        <h2>Entrar</h2>
        <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={registerSignin}
          />
          {errorsSignin.email && (
            <ErrorSpan>{errorsSignin.email.message}</ErrorSpan>
          )}
          <Input
            type="password"
            placeholder="Senha"
            name={"password"}
            register={registerSignin}
          />
          {errorsSignin.password && (
            <ErrorSpan>{errorsSignin.password.message}</ErrorSpan>
          )}
          <Button type="submit" text="Entrar" />
        </form>
      </Section>

      
      <Section type="signup">
        <h2>Cadastrar</h2>
        <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
          <Input
            type="text"
            placeholder="Nome"
            name="name"
            register={registerSignup}
          />
          {errorsSignup.name && (
            <ErrorSpan>{errorsSignup.name.message}</ErrorSpan>
          )}
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={registerSignup}
          />
          {errorsSignup.email && (
            <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>
          )}
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            register={registerSignup}
          />
          {errorsSignup.password && (
            <ErrorSpan>{errorsSignup.password.message}</ErrorSpan>
          )}
          <Input
            type="password"
            placeholder="Confirme a senha"
            name="confirmPassword"
            register={registerSignup}
          />
          {errorsSignup.confirmPassword && (
            <ErrorSpan>{errorsSignup.confirmPassword.message}</ErrorSpan>
          )}
          <Button type="submit" text="Cadastrar" />
        </form>
      </Section>
    </AuthContainer>
  );
}