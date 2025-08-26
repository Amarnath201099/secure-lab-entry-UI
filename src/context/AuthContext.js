import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

const TOTAL_TIME = 1 * 60;
const LOCAL_STORAGE_KEY = "timerTimeLeft";

export const AuthProvider = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const storedTime = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedTime ? Number(storedTime) : TOTAL_TIME;
  });

  const [timerExpired, setTimerExpired] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return Cookies.get("jwt_token") === "true";
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  const login = () => {
    Cookies.set("jwt_token", true);
    setShouldAnimate(true);

    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2000);
  };

  const logout = () => {
    Cookies.remove("jwt_token");
    setShouldAnimate(false);
    setIsLoggedIn(false);
  };

  // Store timeLeft in localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, timeLeft.toString());
  }, [timeLeft]);

  // Timer always runs
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setTimerExpired(true);
          Cookies.remove("jwt_token");
          setShouldAnimate(false);
          setIsLoggedIn(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        timeLeft,
        totalTime: TOTAL_TIME,
        isLoggedIn,
        shouldAnimate,
        timerExpired,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
