import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  let navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@KenzieHub:token");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setUser(data)
        } catch (error) {
            console.log(error);
        }
    }
    setLoading(false)
}

    loadUser();
  }, []);

  const signIn = (data) => {
    api
      .post("sessions", data)
      .then((res) => {
        const { user: userResponse, token } = res.data;
        api.defaults.headers.authorization = `Bearer ${token}`;

        setUser(userResponse);
        localStorage.clear();
        localStorage.setItem("@KenzieHub:token", token);
        localStorage.setItem("@KenzieHub:id", JSON.stringify(userResponse.id));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(userResponse));
        toast.success("Login feito");

        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Opa! algo não está certo");
      });
  };

 function registerUser(data) {
    console.log(data);
    api
      .post("users", data)
      .then((res) => {
        console.log(res.data);
        toast.success("Conta cadastrada com sucesso!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Opa! verifique se digitou tudo corretamente");
      });
  }


  return (
    <AuthContext.Provider value={{ 
      user, signIn, loading,registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext)
