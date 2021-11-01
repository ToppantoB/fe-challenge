import React, { SyntheticEvent, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Theme,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useStyles from "./style";

import {
  selectSportStypesFilter,
  setSportTypes,
  selectDateFilter,
  setDate,
} from "../../../features/filters/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const sportOptions = ["yoga", "pilates", "crossfit", "fitness"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

function getStyles(sport: string, sports: string[], theme: Theme) {
  return {
    fontWeight:
      sports.indexOf(sport) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ActivitySearchTopbar = () => {
  const style = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const sports = useSelector(selectSportStypesFilter);
  const date = useSelector(selectDateFilter);

  const handleSportsChange = (event: SelectChangeEvent<typeof sports>) => {
    const {
      target: { value },
    } = event;
    dispatch(
      setSportTypes(typeof value === "string" ? value.split(",") : value)
    );
  };

  const handleDateChange = (value: Date | null) => {
    dispatch(setDate(value ? value.toString() : value));
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="filter-by-sport-label">Sports</InputLabel>
        <Select
          labelId="filter-by-sport-label"
          id="filter-by-sport"
          multiple
          value={sports}
          onChange={handleSportsChange}
          input={<OutlinedInput label="Sports" />}
          MenuProps={MenuProps}
          placeholder="Sports"
          label="Sports"
        >
          {sportOptions.map((sport) => (
            <MenuItem
              key={sport}
              value={sport}
              style={getStyles(sport, sports, theme)}
            >
              {sport}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 200 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date"
            value={date}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </FormControl>
    </>
  );
};

export default ActivitySearchTopbar;
