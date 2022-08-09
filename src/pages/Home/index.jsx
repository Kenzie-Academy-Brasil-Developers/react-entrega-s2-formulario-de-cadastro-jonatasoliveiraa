import api from "../../services/api.js"

import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup"
import { toast } from "react-toastify"
import * as yup from "yup" ;

import Form from "../../components/Form";
import Logo from "../../assets/Logo.svg";
import Container from "./style";


const schema = yup.object({
  email: yup.string().email("Deve ser um email").required("Digite um email válido"),
  password: yup.string().required("Campo obrigatório")
})

const Home = ({ auth, setAuth }) => {

  
  const {register,handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })
  
  let navigate = useNavigate();

  if(auth) {
    return <Navigate to="/dashboard"/>;
}
    
  const loginUser = (data)=>{
    api.post("/sessions/", data)
    .then(res => {
     const {user, token} = res.data
      console.log(res.data)
      localStorage.clear()
      localStorage.setItem("@kenzie-hub:token",token)
      localStorage.setItem("@KenzieHub:id", JSON.stringify(user.id));
      localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
      toast.success("Login feito");

      setAuth(true)
      navigate("/dashboard")
  
    })
     .catch((err) => { console.log(err)
      toast.error("Ops! algo não está certo")
     })
   }

  return (
    <Container>
      <img src={Logo} alt="" />

      <div className="divForm">
        <h2>Login</h2>

        <Form onSubmit={handleSubmit(loginUser)}>
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
