import Chip from "../Chip";
import EventPlacePrice from "../EventPlacePrice";
import Ratings from "../Ratings";
import capitalize from "@mui/utils/capitalize";

import useStyles from "./style";

const SportTile = () => {
  const style = useStyles();

  const data = {
    uuid: "56da8534-c323-4ab0-bbb1-1003d9f45cde",
    city: "Vienna",
    country: "Austria",
    street: "Kellen Stravenue",
    zip: "81827-1214",
    name: "laborum veniam",
    venueName: "Hilpert, Cartwright and Block",
    venuePictureUrl: "https://picsum.photos/640/480",
    pictureUrl: "https://picsum.photos/400/200",
    startTime:
      "Fri Jun 17 2022 12:00:00 GMT+0200 (Central European Summer Time)",
    endTime: "Fri Jun 17 2022 13:30:00 GMT+0200 (Central European Summer Time)",
    slotsOpen: 2,
    slotsTotal: 5,
    rating: 2,
    ratings: 349,
    fromPrice: 19,
    currencySymbol: "€",
    isOnline: true,
    isFullyBooked: false,
    sport: "yoga",
  };

  const startTime = new Date(data.startTime).toUTCString().slice(0, 11);

  return (
    <div className={style.tile}>
      <img className={style.coverImage} src={data.pictureUrl}></img>
      <div className={style.details}>
        <h3 className={style.title}>{capitalize(data.name)}</h3>
        <div className={style.spotsAndDate}>
          <span className={style.greyText}>{"Open spots: "}</span>
          <span
            className={`${style.mediumText} ${style.openSpots}`}
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
          <img className={style.venueImage} src={data.venuePictureUrl}></img>
          <span className={style.mediumText}>{data.venueName}</span>
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
