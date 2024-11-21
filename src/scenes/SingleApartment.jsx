import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { tokens } from '../theme';


function SingleApartment() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null); // Initialize with null
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    fetch(`http://localhost:3000/apartments/${id}`)
      .then((res) => res.json())
      .then((apartment) => {
        setApartment(apartment);
      })
      .catch((error) => console.error("Error fetching apartment:", error)); // Add error handling
  }, [id]); // Add id as a dependency to re-fetch if id changes

  if (!apartment) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }

  return (
    <Box display="flex" flexDirection="column" m={5}>
      {/* Title */}
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: colors.orange[500],
          marginBottom: "20px",
          padding: "20px",
          backgroundColor: colors.greenAccent[200],
          borderRadius:"20px"
        }}
      >
        {apartment.name}
      </Typography>

      {/* Content */}
      <Box display="flex" justifyContent="space-between">
        {/* Left Side: Details */}
        <Box display="flex" flexDirection="column" justifyContent="center" width="45%">
          <Button
            variant="outlined"
            sx={{
              color: colors.grey[100],
              borderColor: colors.orange[500],
              marginBottom: "10px",
              textTransform: "none",
            }}
          >
            Location: {apartment.location}
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: colors.grey[100],
              borderColor: colors.orange[500],
              marginBottom: "10px",
              textTransform: "none",
            }}
          >
            Size: {apartment.size}
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: colors.grey[100],
              borderColor: colors.orange[500],
              marginBottom: "10px",
              textTransform: "none",
            }}
          >
            Status: {apartment.vacancies}
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: colors.grey[100],
              borderColor: colors.orange[500],
              marginBottom: "10px",
              textTransform: "none",
            }}
          >
            Rent Price: ${apartment.rent_price}
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: colors.grey[100],
              borderColor: colors.orange[500],
              textTransform: "none",
            }}
          >
            {apartment.description}
          </Button>
        </Box>

        {/* Right Side: Image */}
        <Box width="50%" display="flex" justifyContent="flex-end">
          <img
            src={apartment.image}
            className='img-fluid'
            alt={apartment.name}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default SingleApartment;
