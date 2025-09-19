import { Link } from "react-router";
import { PATHS } from "~/constants/paths";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={PATHS.home}>
        <p className="text-2xl font-bold text-gradient">RESUMIND</p>
      </Link>
      <Link to={PATHS.upload} className="primary-button w-fit">
        Upload Resume
      </Link>
    </nav>
  );
};

export default Navbar;
