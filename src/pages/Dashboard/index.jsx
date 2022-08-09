import Logo from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { Header, Container } from "./style";

const Dashboard = ({ setAuth }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    setAuth(false)
    navigate('/');
}
const user = JSON.parse(localStorage.getItem("@KenzieHub:user"))

console.log(user)
  return (
    <>
      <Header>
        <div className="divHeader">
          <img src={Logo} alt="" />
          <button onClick={handleClick} className="buttonLogout">Sair</button>
        </div>
      </Header>
      <Container>
        <div className="divInfo">
          <p>Ola, {user.name}</p>
          <span>{user.course_module}</span>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
