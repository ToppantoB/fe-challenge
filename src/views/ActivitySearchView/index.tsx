import React from "react";

import useStyles from "./style";
import SportTile from "../../components/SportTile";
import { Grid } from "@mui/material";
import EversportsLogoIcon from "../../assets/icons/EversportsLogo";
import { useSelector } from "react-redux";
import { selectFilteredActivities } from "../../features/activities/activitiesSlice";
import ActivitySearchSidebar from "./ActivitySearchSidebar";
import ActivitySearchTopbar from "./ActivitySearchTopbar";

const ActivitySearch = () => {
  const style = useStyles();
  const filteredActivities = useSelector(selectFilteredActivities);

  return (
    <div className={style.main}>
      <div className={style.filterBar}>
        <EversportsLogoIcon width="196" />
        <ActivitySearchSidebar />
      </div>
      <div className={style.gridPlusSearch}>
        {
          <div className={style.mobilHeader}>
            <EversportsLogoIcon width="196" />
          </div>
        }
        <div className={style.search}>
          <ActivitySearchTopbar />
        </div>
        <div className={style.grid}>
          <Grid
            container
            spacing={{ sm: 0, md: 2 }}
            columnSpacing={{ xs: 0, sm: 0, md: "20px" }}
          >
            {filteredActivities.map((act) => (
              <Grid item xs={12} md={6} id={act.uuid}>
                <SportTile data={act} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ActivitySearch;
