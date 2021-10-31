import React from "react";

import useStyles from "./style";
import SportTile from "../../components/SportTile";

const ActivitySearch = () => {
  const style = useStyles();

  return (
    <div className={style.main}>
      <SportTile />
    </div>
  );
};

export default ActivitySearch;
