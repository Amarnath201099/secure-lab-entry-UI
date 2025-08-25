import { useAuth } from "../../context/AuthContext";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTensorflow } from "react-icons/si";

import "./index.css";
import CountdownTimer from "../../components/CountdownTimer";

const labCoursesList = [
  {
    icon: <FaHtml5 size={80} color="#ec6231" />,
    title: "HTML",
  },
  {
    icon: <FaCss3 size={80} color="#0000FF" />,
    title: "CSS",
  },
  {
    icon: <RiTailwindCssFill size={80} color="#38BDF8" />,
    title: "Tailwind CSS",
  },
  {
    icon: <FaJs size={80} color="#38BDF8" />,
    title: "JS",
  },
  {
    icon: <FaReact size={80} color="#61DBFB" />,
    title: "React JS",
  },
  {
    icon: <FaNode size={80} color="#68a063" />,
    title: "Node JS",
  },

  {
    icon: <FaPython size={80} color="#ffde57" />,
    title: "Python",
  },
  {
    icon: <SiTensorflow size={80} color="#FFA800" />,
    title: "TensorFlow",
  },
];

const LabPage = () => {
  const { logout, isLoggedIn } = useAuth();

  return (
    <div className="lab-container">
      <h1 className="lab-heading">Labs</h1>
      <ul className="lab-courses-container">
        {labCoursesList.map((each) => (
          <li key={each.title}>
            {each.icon} <p>{each.title}</p>
          </li>
        ))}
      </ul>
      <button type="button" className="lab-exit-btn" onClick={logout}>
        Exit
      </button>
      {isLoggedIn && <CountdownTimer />}
    </div>
  );
};

export default LabPage;
