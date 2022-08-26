
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup" ;

import Form from "../../components/Form";
import Logo from "../../assets/Logo.svg";
import Container from "./style";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export interface ILogin{
  email:string
  password:string
}

const schema = yup.object({
  email: yup.string().email("Deve ser um email").required("Digite um email válido"),
  password: yup.string().required("Campo obrigatório")
})

const Home = () => {

  const {signIn} = useContext(AuthContext)

  
  const {register,handleSubmit, formState:{errors}} = useForm<ILogin>({
    resolver: yupResolver(schema)
  })
  



    

  return (
    <Container>
      <img src={Logo} alt="" />

      <div className="divForm">
        <h2>Login</h2>

        <Form onSubmit={handleSubmit(signIn)}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>
          
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>

          <button type="submit" className="buttonLogin">Entrar</button>
        </Form>

        <div className="divOptions">
          <span>Ainda não possui uma conta?</span>
          <Link to={"/register"}className="register">Cadastre-se</Link>
        </div>
      </div>
    </Container>
  );
};

export default Home;
