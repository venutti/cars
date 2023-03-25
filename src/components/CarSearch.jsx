import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

import { InputAdornment, TextField } from "@mui/material";
import { BiSearch as SearchIcon } from "react-icons/bi";

const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.cars.searchTerm);

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <TextField
      value={searchTerm}
      onChange={handleSearchTermChange}
      sx={{ width: "100%" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CarSearch;
