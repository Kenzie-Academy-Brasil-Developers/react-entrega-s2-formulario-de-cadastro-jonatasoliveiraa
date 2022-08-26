import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";
import { ITech, useAuth } from "./AuthContext";
import { toast } from "react-toastify";


interface IDashProps{
  children:ReactNode
}

interface IDashContext{
  modal: boolean
  techs: ITech[]
  setTechs: (data: ITech[] | []) => void
  addTech: (data: ITech) => void
  removeTech:(tech: ITech) => void
  handleModal: () => void
}



export const DashContext = createContext<IDashContext>({} as IDashContext);

const DashProvider = ({ children }:IDashProps) => {
  const [modal, setModal] = useState(false);
  const [techs, setTechs] = useState<ITech[]>([] as ITech[]);
  const { user } = useAuth();

  function loadTechs() {
    const id = JSON.parse(localStorage.getItem("@KenzieHub:id") || "" );
    if (id) {
      api
        .get(`/users/${id}`)
        .then((response) => {
          setTechs(response.data.techs);
        })
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    if (user?.techs) {
      setTechs([...user.techs]);
    }
  }, [user?.techs]);

  function addTech(data:ITech) {
    api
      .post("/users/techs", data)
      .then((res) => {
        toast.success(`${res.data.title} adicionado com sucesso`);

        loadTechs();
        handleModal();
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          toast.error("Tecnologia ja adicionada");
        }
      });
  }

  const handleModal = () => {
    setModal(!modal);
  };

  function removeTech(tech:ITech) {
    for (let i = 0; i < techs.length; i++) {
      if (techs[i].id === tech.id) {
        setTechs(techs.filter((elem) => elem !== tech));
        const id = techs[i].id;
        api.delete(`/users/techs/${id}`);
        toast.success(`${techs[i].title} removido com sucesso`);

      }
    }
  }

  return (
    <DashContext.Provider
      value={{
        modal,
        techs,
        setTechs,
        addTech,
        handleModal,
        removeTech,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};

export default DashProvider;
