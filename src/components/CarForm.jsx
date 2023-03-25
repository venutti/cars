import {
  Container,
  Grid,
  Button,
  InputAdornment,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

import { BiCar as CarIcon, BiDollar as DollarIcon } from "react-icons/bi";

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return { name: state.carCreation.name, cost: state.carCreation.cost };
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const inputValue = event.target.value;
    const regex = /^\d*\.?\d*$/;
    if (inputValue === "" || regex.test(inputValue)) {
      dispatch(changeCost(parseInt(inputValue)));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        component="form"
        spacing={2}
        justifyContent="center"
        alignItems="stretch"
        onSubmit={handleSubmit}
      >
        <Grid item xs={12}>
          <Typography variant="h5" textAlign="center">
            Añadir un auto
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            label="Nombre"
            value={name}
            onChange={handleNameChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CarIcon />
                </InputAdornment>
              ),
            }}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            label="Precio"
            value={cost || ""}
            onChange={handleCostChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DollarIcon />
                </InputAdornment>
              ),
            }}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button
            variant="contained"
            type="submit"
            sx={{ width: "100%", height: "100%" }}
          >
            Añadir
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ width: "75%", mx: "auto", my: 2 }} />
    </Container>
  );
};

export default CarForm;
