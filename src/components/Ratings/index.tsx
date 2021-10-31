import useStyles from "./style";
import { Rating } from "@mui/material";

import StarIcon from "../../assets/icons/Star";

type RatingsProps = {
  rating: number;
};

// TODO: extend this component to handle input as well, not just displaying values
const Ratings = ({ rating }: RatingsProps) => {
  const style = useStyles();

  return (
    <div className={style.rating}>
      <Rating
        icon={<StarIcon color="#FFAF51" />}
        emptyIcon={<StarIcon />}
        name="half-rating"
        defaultValue={rating}
        precision={0.5}
        readOnly
      />
    </div>
  );
};

export default Ratings;
