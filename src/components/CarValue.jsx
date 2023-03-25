import { Typography } from "@mui/material";

const CarValue = ({ cars }) => {
  const totalCost = cars.reduce((acc, car) => acc + car.cost, 0);
  return (
    <Typography variant="h5" fontWeight={600} textAlign="end">
      Costo total: ${totalCost}
    </Typography>
  );
};

export default CarValue;
