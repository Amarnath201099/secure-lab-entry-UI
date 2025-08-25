import { AuthProvider, useAuth } from "./context/AuthContext";
import LabPage from "./pages/LabPage";
import LoginPage from "./pages/LoginPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <Main />
    </AuthProvider>
  );
}

function Main() {
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn);

  return (
    <div className="app-container">
      <LabPage />
      {!isLoggedIn && <LoginPage />}
    </div>
  );
}

export default App;
