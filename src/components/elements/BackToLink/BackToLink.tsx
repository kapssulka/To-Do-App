import classes from "./BackToLink.module.scss";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

interface IProps {
  to?: string;
}

export default function BackToLink({ to = "/" }: IProps) {
  return (
    <Link to={to} className={classes.backTo}>
      <FaArrowLeft size={30} className={classes.backTo__icon} />
    </Link>
  );
}
