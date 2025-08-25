import { useAuth } from "../../context/AuthContext";
import DoorContent from "../../components/DoorContent";
import LoginForm from "../../components/LoginForm";

import "./index.css";

const LoginPage = () => {
  const { shouldAnimate } = useAuth();

  return (
    <div className="login-page-overlay">
      <div className="login-page-container">
        <div className={`right-door ${shouldAnimate ? "animate-right" : ""}`}>
          <DoorContent side="right" />
        </div>
        <div className={`top-login-form ${shouldAnimate ? "animate-top" : ""}`}>
          <LoginForm />
        </div>
        <div className={`left-door ${shouldAnimate ? "animate-left" : ""}`}>
          <DoorContent />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
