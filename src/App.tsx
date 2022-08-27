import Global from "./styles/global";
import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import AuthProvider from "./contexts/AuthContext";
import DashProvider from "./contexts/DashContext";

function App() {
  return (
    <>
      <AuthProvider>
        <DashProvider>
          <Global />
          <RoutesMain />
          <ToastContainer
            theme="dark"
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </DashProvider>
      </AuthProvider> 
    </> 
  );
}

export default App;
