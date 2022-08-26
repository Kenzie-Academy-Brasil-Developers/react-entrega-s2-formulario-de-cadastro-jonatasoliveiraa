import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { DashContext } from "../../contexts/DashContext";

import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Form from "../../components/Form";

import Logo from "../../assets/Logo.svg";
import Vector from "../../assets/Vector.svg";
import Plus from "../../assets/Plus.svg";

import { Header, Container, Main, Modal } from "./style";

interface IFormAddTech{
  id:string
  title:string
  status:string
  created_at: Date
  update_at: Date
}


const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);
  const { modal,setTechs, techs, addTech, handleModal, removeTech } =
    useContext(DashContext);

  const navigate = useNavigate();


  const { register, handleSubmit, reset } = useForm<IFormAddTech>();

  useEffect(() => {
    
      reset({ title: "" });
    
  }, [modal,reset]);


  const handleClick = () => {
    localStorage.clear();
    setTechs([])
    navigate("/");
  };

  if (loading) return <div style={{ color: "white" }}>Carregando...</div>;

  return (
    <>
      {user ? (
        <>
          <Header>
            <div className="divHeader">
              <img src={Logo} alt="" />
              <button onClick={handleClick} className="buttonLogout">
                Sair
              </button>
            </div>
          </Header>

          <Container>
            <div className="divInfo">
              <p>Ola, {user.name}</p>
              <span>{user.course_module}</span>
            </div>
          </Container>

          <Main>
            <div className="containerMain">
              <p>Tecnologias</p>
              <button onClick={handleModal} className="buttonAdd">
                <img src={Plus} alt="" />
              </button>
            </div>

            {techs.length > 0 ? (
              <div className="containerList" style={techs.length > 7 ? {overflow:"scroll",overflowX:"visible"}:{overflow:"visible"}}>
                <ul>
                  {techs.map((tech) => (
                    <li key={tech.id}>
                      <div className="divTechs">
                        <p>{tech.title}</p>
                        <span>{tech.status}</span>
                      </div>
                      <div>
                        <button onClick={() => removeTech(tech)}>
                          <img src={Vector} alt="" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}

            {modal ? (
              <Modal>
                <div className="modalPosition">
                  <div className="modalContainer">
                    <div className="modalOptions">
                      <div className="modalHeader">
                        <p>Cadastrar Tecnologias</p>
                        <button onClick={handleModal}>X</button>
                      </div>

                      <div className="divform">
                        <Form onSubmit={handleSubmit(addTech)}>
                          <label htmlFor="title">Nome</label>
                          <input
                            type="text"
                            id="title"
                            placeholder="Digite alguma tecnologia (Ex: NodeJs)"
                            {...register("title")}
                          />

                          <label htmlFor="status">Selecionar Status</label>
                          <select id="status" {...register("status")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                          </select>
                          <button type="submit">Cadatrar Tecnologia</button>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            ) : (
              <></>
            )}
          </Main>
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};

export default Dashboard;
