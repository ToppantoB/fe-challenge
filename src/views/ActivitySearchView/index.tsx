import React from "react";

import useStyles from "./style";
import SportTile from "../../components/SportTile";
import { Grid, Slider, Radio } from "@mui/material";
import EversportsLogoIcon from "../../assets/icons/EversportsLogo";

const ActivitySearch = () => {
  const style = useStyles();

  return (
    <div className={style.main}>
      <div className={style.filterBar}>
        <EversportsLogoIcon width="196" />
        <Slider
          getAriaLabel={() => "Temperature range"}
          // value={value}
          // onChange={handleChange}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
        />
        <Radio
          checked={false}
          //onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ "aria-label": "1 & Up" }}
        />
        <Radio
          checked={false}
          //onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ "aria-label": "2 & Up" }}
        />
        <Radio
          checked={false}
          //onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ "aria-label": "3 & Up" }}
        />
        <Radio
          checked={true}
          //onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ "aria-label": "4 & Up" }}
        />
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
