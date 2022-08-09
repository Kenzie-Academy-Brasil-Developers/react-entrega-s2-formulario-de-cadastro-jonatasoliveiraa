import api from "../../services/api";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify"
import * as yup from "yup";

import Logo from "../../assets/Logo.svg";
import Form from "../../components/Form";
import Container from "./style";


const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Deve ser um email")
    .required("Digite um email válido"),
  password: yup
    .string()
    .min(8,
      "A senha deve conter no mínimo 8 caracteres, incluindo letras, números e ao menos um símbolo")
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas diferentes")
    .required("Campo obrigatório"),
  bio: yup.string().required("Fale um pouquinho sobre você"),
  contact: yup.string().required("Deixe alguma número de contato ou rede social"),
});

const Home = () => {

  const navigate = useNavigate()

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema)
  });

  function registerUser(data) {
    console.log(data);
    api
      .post("users", data)
      .then((res) => {
        console.log(res.data)
        toast.success("Conta cadastrada com sucesso!")
        navigate("/")
      })
      .catch((err) => { console.log(err)
        toast.error("Ops! algo de errado não está certo")
       })  }

  return (
    <Container>
      <div className="divHeader">
        <img src={Logo} alt="" />
        <Link to={"/"}>Voltar</Link>
      </div>

      <div className="divForm">

        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>

        <Form onSubmit={handleSubmit(registerUser)}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Digite aqui seu nome"{...register("name")}/>
          <span>{errors.name?.message}</span>


          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Digite aqui seu email" {...register("email")}/>
          <span>{errors.email?.message}</span>


          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Digite aqui sua senha" {...register("password")}/>
          <span>{errors.password?.message}</span>


          <label htmlFor="password">Confirmar Senha</label>
          <input type="password" id="confirmPassword" placeholder="Digite novamente sua senha" {...register("confirmPassword")}/>
          <span>{errors.confirmPassword?.message}</span>


          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" placeholder="Fale sobre você" {...register("bio")}/>
          <span>{errors.bio?.message}</span>


          <label htmlFor="contact">Contato</label>
          <input type="text" id="contact" placeholder="Opção de contato" {...register("contact")}/>
          <span>{errors.contact?.message}</span>


          <label htmlFor="module">Selecionar módulo</label>
          <select id="module" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>

          <button type="submit" className="buttonLogin">
            Cadastrar
          </button>
        </Form>
      </div>
    </Container>
  );
};

export default Home;
