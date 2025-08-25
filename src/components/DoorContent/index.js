// DoorContent.jsx
import "./index.css";
import CountdownTimer from "../CountdownTimer";

const DoorContent = ({ side }) => {
  return (
    <>
      {side === "right" ? (
        <div className="door-container right">
          <h2 className="door-right-heading">Labs Courses</h2>
          <p className="door-right-description">
            These courses are designed to help you build a strong foundation in
            web design.
          </p>

          <h3 className="door-right-heading">Course Includes:</h3>
          <ul className="door-right-list">
            <li>Exercises</li>
            <li>Projects</li>
            <li>Quizzes</li>
          </ul>
        </div>
      ) : (
        <div className="door-container left">
          <CountdownTimer />
        </div>
      )}
    </>
  );
};

export default DoorContent;
