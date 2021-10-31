import React from "react";

import useStyles from "./style";
import SportTile from "../../components/SportTile";
import { Grid } from "@mui/material";
import EversportsLogoIcon from "../../assets/icons/EversportsLogo";

const ActivitySearch = () => {
  const style = useStyles();

  return (
    <div className={style.main}>
      <div className={style.filterBar}>
        <EversportsLogoIcon width="196" />
      </div>
      <div className={style.gridPlusSearch}>
        <div className={style.search}></div>
        <div className={style.grid}>
          <Grid
            container
            spacing={{ sm: 0, md: 2 }}
            columnSpacing={{ xs: 0, sm: 0, md: "20px" }}
          >
            <Grid item xs={12} md={6}>
              <SportTile />
            </Grid>
            <Grid item xs={12} md={6}>
              <SportTile />
            </Grid>
            <Grid item xs={12} md={6}>
              <SportTile />
            </Grid>
            <Grid item xs={12} md={6}>
              <SportTile />
            </Grid>
            <Grid item xs={12} md={6}>
              <SportTile />
            </Grid>
            <Grid item xs={12} md={6}>
              <SportTile />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ActivitySearch;
