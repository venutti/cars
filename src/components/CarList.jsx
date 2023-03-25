import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CarValue from "./CarValue";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/slices/cars";
import CarSearch from "./CarSearch";

const CarList = () => {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(
    ({ carCreation, cars: { searchTerm, data } }) => {
      const filteredCars = data.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        cars: filteredCars,
        name: carCreation.name,
      };
    }
  );

  const handleCarRemove = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car, index) => {
    const isBold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <React.Fragment key={car.id}>
        <ListItem>
          <ListItemText primaryTypographyProps={{ fontWeight: isBold && 600 }}>
            {car.name} - ${car.cost}
          </ListItemText>
          <Button color="error" onClick={() => handleCarRemove(car)}>
            Eliminar
          </Button>
        </ListItem>
        {index < cars.length - 1 && (
          <Divider sx={{ backgroundColor: "white" }} />
        )}
      </React.Fragment>
    );
  });

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          maxWidth: "900px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid item xs={12} sm={4}>
            <Typography variant="h5">Lista de autos</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarSearch />
          </Grid>
        </Grid>
        {cars.length > 0 && (
          <List sx={{ backgroundColor: "grey.400" }}>{renderedCars}</List>
        )}
        <CarValue cars={cars} />
      </Box>
    </Container>
  );
};

export default CarList;
