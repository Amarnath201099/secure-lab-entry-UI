// CountdownTimer.jsx
import { useAuth } from "../../context/AuthContext";
import "./index.css";

const CountdownTimer = () => {
  const { timeLeft, totalTime, timerExpired } = useAuth();

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const progressPercent = (timeLeft / totalTime) * 100;

  return (
    <div className="timer-container">
      {timerExpired ? (
        <p className="timer-error-msg">Session Timeout</p>
      ) : (
        <>
          <h3>Time Remaining: {formatTime(timeLeft)}</h3>
          <div className="timer-bar-background">
            <div
              className="timer-bar-fill"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
