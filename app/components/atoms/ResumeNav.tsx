import { Link } from "react-router";
import { PATHS } from "~/constants/paths";

const ResumeNav = () => {
  return (
    <nav className="resume-nav">
      <Link to={PATHS.home} className="back-button">
        <img src="/icons/back.svg" alt="logo" className="w-2.5 h-2.5" />
        <span className="text-gray-800 text-sm font-semibold">
          Back to Homepage
        </span>
      </Link>
    </nav>
  );
};

export default ResumeNav;
