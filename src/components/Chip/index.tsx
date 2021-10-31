import useStyles from "./style";

type ChipProps = {
  text: string;
};

const Chip = ({ text }: ChipProps) => {
  const style = useStyles();

  return <div className={style.chip}>{text}</div>;
};

export default Chip;
