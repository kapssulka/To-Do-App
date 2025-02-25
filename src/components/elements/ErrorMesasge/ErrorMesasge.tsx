import classes from "./ErrorMesasge.module.scss";

interface IProps {
  text: string;
}

export default function ErrorMesasge({ text }: IProps) {
  return <div className={classes.error}>{text}</div>;
}
