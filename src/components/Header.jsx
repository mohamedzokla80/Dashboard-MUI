import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";

const Header = ({title, subTitle, isDashboard=false}) => {
  const theme = useTheme();
  return (
    <Box mb={ isDashboard? 2 : 4}>
      <Typography
        sx={{
          color: theme.palette.mode === "dark" ? "#41C1AA" : "#1F2A40",
          fontWeight: "bold",
          transition: "color 1.3s ease-in-out"
        }}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography 
        sx={{ 
          color: theme.palette.mode === "light" ? "#0288D1" : "inherit", 
          transition: "color 0.3s ease-in-out" 
        }}
        variant="body1"
      >
        {subTitle}
      </Typography>
    </Box>
  );
}

export default Header;
