import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from '../theme';
import Header from '../components/Header';

function Apartments() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
    {/* HEADER */}
    <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="APARTMENTS" subtitle="Hey There! View Apartments Here" />
      </Box>
   </Box>
  )
}

export default Apartments