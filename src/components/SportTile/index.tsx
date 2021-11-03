import Chip from "../Chip";
import EventPlacePrice from "../EventPlacePrice";
import Ratings from "../Ratings";
import capitalize from "@mui/utils/capitalize";

import useStyles from "./style";
import { Activity } from "../../types";

type SportTileProps = {
  data: Activity
}

const SportTile = ({ data }: SportTileProps) => {
  const style = useStyles();

  const startTime = new Date(data.startTime).toUTCString().slice(0, 11);

  return (
    <div className={style.tile}>
      <img alt={`cover for ${data.name} event`} className={style.coverImage} src={data.pictureUrl}></img>
      <div className={style.details}>
        <h3 className={style.title}>{capitalize(data.name)}</h3>
        <div className={style.spotsAndDate}>
          <span className={style.greyText}>{"Open spots: "}</span>
          <span
          // It is not 100% clear from the design when we should switch to red (when the available places are under)
          // a certain quantity or when isFullyBooked === true
            className={`${style.mediumText} ${style.openSpots} ${data.isFullyBooked && style.redText}`}
          >{`${data.slotsOpen} out of ${data.slotsTotal}`}</span>
          <span className={style.greyText}>{"Start Date: "}</span>
          <span className={style.mediumText}>{startTime}</span>
        </div>
        <div className={style.sportAndReviews}>
          <Chip text={capitalize(data.sport)} />
          <div className={style.reviews}>
            <Ratings rating={data.rating} />
            <div
              className={`${style.greyText} ${style.mediumText} ${style.reviewText}`}
            >{`${data.rating} (${data.ratings} Reviews)`}</div>
          </div>
        </div>
        <div className={style.venue}>
          <span className={style.greyText}>Venue:</span>
          <img alt={`venue ${data.name} event`} className={style.venueImage} src={data.venuePictureUrl}></img>
          <span className={`${style.mediumText} ${style.venueName}`}>{data.venueName}</span>
        </div>
        <EventPlacePrice
          isOnline={data.isOnline}
          address={`${data.street}, ${data.zip} ${data.city}`}
          price={data.fromPrice}
          currencySymbol={data.currencySymbol}
        />
      </div>
    </div>
  );
};

export default SportTile;
