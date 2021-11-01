import useStyles from "./style";
import EuroIcon from "../../assets/icons/Euro";

type ChipProps = {
  text: string | number;
};

const Chip = ({ text }: ChipProps) => {
  const style = useStyles();

  return (
    <div className={style.chip}>
      {text}

      <div className={style.iconContainer}>
        <EuroIcon color="#BBBBBB" height="9px" />
      </div>
    </div>
  );
};

export default Chip;
