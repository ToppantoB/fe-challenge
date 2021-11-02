import React from "react";

import useStyles from "./style";
import SportTile from "../../components/SportTile";
import { Grid } from "@mui/material";
import EversportsLogoIcon from "../../assets/icons/EversportsLogo";
import { useSelector } from "react-redux";
import { selectFilteredActivities } from "../../features/activities/activitiesSlice";
import ActivitySearchFilters from "./ActivitySearchFilters";
import ActivitySearchTopbar from "./ActivitySearchTopbar";
import { selectSportstypesFilter } from "../../features/filters/filtersSlice";
import capitalize from "@mui/utils/capitalize";

const createSportText = (sports: string[]) => {
  const sportCount = sports.length;

  if (!sportCount) {
    return "Sport classes";
  }

  const capitalizedSports = sports.map((s) => capitalize(s));

  return sportCount > 1
    ? `${capitalizedSports.slice(0, sportCount - 1)} and ${
        capitalizedSports[sportCount - 1]
      }`
    : capitalizedSports[0];
};

const ActivitySearch = () => {
  const style = useStyles();
  const filteredActivities = useSelector(selectFilteredActivities);

  const sports = useSelector(selectSportstypesFilter);

  return (
    <div className={style.main}>
      <div className={style.filterBar}>
        <EversportsLogoIcon width="196" />
        <ActivitySearchFilters />
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
          <h3 className={style.gridTitle}>{`${createSportText(
            sports
          )} in Wien`}</h3>
          {/* The desired structure of this text would need some clarification, since the design only contains the proper text if th filter is set to "Yoga" */}
          <p className={style.gridSubtitle}>
            Find and compare sport activities near you! Click on one of the
            cards to find all information about the activity and book quickly
            and easily online
          </p>
          <Grid
            container
            spacing={{ sm: 0, md: 2 }}
            columnSpacing={{ xs: 0, sm: 0, md: "20px" }}
          >
            {filteredActivities.map((act) => (
              <Grid key={act.uuid} item xs={12} md={6} id={act.uuid}>
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
