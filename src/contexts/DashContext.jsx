import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";

export const DashContext = createContext({});

const DashProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [techs, setTechs] = useState([]);
  const { user } = useAuth();

  function loadTechs() {
    const id = JSON.parse(localStorage.getItem("@KenzieHub:id"));
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

  function addTech(data) {
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

  function removeTech(tech) {
    for (let i = 0; i < techs.length; i++) {
      if (techs[i].id === tech.id) {
        setTechs(techs.filter((elem) => elem !== tech));
        const id = techs[i].id;
        api.delete(`/users/techs/${id}`);
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
