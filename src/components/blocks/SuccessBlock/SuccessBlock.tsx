import classes from "./SuccessBlock.module.scss";
import Button from "../../elements/Button/Button";
import { Link } from "react-router-dom";

interface IProps {
  text?: string;
  setAdded: () => void;
}

export default function SuccessBlock({
  text = "Проект успешно создан!",
  setAdded,
}: IProps) {
  return (
    <div className={classes.wrapper}>
      <p className={classes.text}>{text}</p>
      <div className={classes.buttonWrapper}>
        <Link to="/">
          <Button>К проектам</Button>
        </Link>
        <Button onClick={setAdded}>Создать ещё</Button>
      </div>
    </div>
  );
}
