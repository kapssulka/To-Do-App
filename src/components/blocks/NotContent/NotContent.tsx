import classes from "./NotContent.module.scss";

interface IProps {
  text: string;
  right?: number;
  left?: number;
  top?: number;
  bottom?: number;
}

export default function NotContent({ text, right, left, top, bottom }: IProps) {
  const style: React.CSSProperties = {
    right: right !== undefined ? `${right}%` : undefined,
    left: left !== undefined ? `${left}%` : undefined,
    top: top !== undefined ? `${top}%` : undefined,
    bottom: bottom !== undefined ? `${bottom}%` : undefined,
  };

  return (
    <div className={classes.wrapper}>
      <p>{text}</p>
      <img
        style={style}
        className={classes.img}
        src="/publick/images/arrow2.png"
      />
    </div>
  );
}
