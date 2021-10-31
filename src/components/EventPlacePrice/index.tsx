import useStyles from "./style";
import LiveIcon from "../../assets/icons/Live";
import LocationIcon from "../../assets/icons/Location";

type EventPlaceProps = {
  isOnline: boolean;
  address: string;
  price: number;
  currencySymbol: string;
};

const EventPlacePrice = ({
  isOnline,
  address = "",
  price,
  currencySymbol,
}: EventPlaceProps) => {
  const style = useStyles();

  return (
    <div className={style.eventPlacePrice}>
      {isOnline ? (
        <>
          <LiveIcon color="#808080" />
          <span className={style.placeText}>Online</span>
        </>
      ) : (
        <>
          <LocationIcon color="#808080" />
          <span className={style.placeText}>{address}</span>
        </>
      )}
      <span className={style.priceText}>{`From ${price} ${currencySymbol}`}</span>
    </div>
  );
};

export default EventPlacePrice;
