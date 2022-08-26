import { ReactNode, useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILogin } from "../pages/Home";
import { IRegister } from "../pages/Register";
import api from "../services/api";


interface AuthProps{
  children: ReactNode
}
export interface ITech{
  id:string
  title:string
  status:string
  created_at: Date
  update_at: Date

}
export interface IUser{
  id:string
  name:string
  email:string
  course_module:string
  bio:string
  contact:string
  avatar_url:string
  created_at: Date
  update_at: Date
  techs: ITech[]
}
interface IAuthContext{
  user: IUser
  signIn: (data: ILogin) => void
  loading: boolean
  registerUser: (data: IRegister) => void
}

interface IResponseLogin {
  user: IUser
  token: string
}

interface IResponseRegister{
  id: string
  name: string
  email: string
  course_module: string
  bio: string
  contact: string
  created_at: Date
  updated_at: Date
  avatar_url?: string | null
}
export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }:AuthProps) => {
  let navigate = useNavigate();

  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@KenzieHub:token");

      if (token) {
        try {
          const bearer = api.defaults.headers.common.authorization = `Bearer ${token}`;
          console.log(bearer)
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

  

  const signIn = (data:ILogin) => {
    api
      .post<IResponseLogin>("sessions", data)
      .then((res) => {
        console.log(data)
        const { user: userResponse, token } = res.data;
        api.defaults.headers.common.authorization = `Bearer ${token}`;

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

 function registerUser(data:IRegister) {
    console.log(data);
    api
      .post<IResponseRegister>("users", data)
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
