import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Button from "@mui/material/Button";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Stack, useTheme } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <div>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Header isDashboard={true} title={"DASHBOARD"} subTitle={"Welcome to your dashboard"} />
        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{
              padding: "6px 8px",
              textTransform: "capitalize",
              backgroundColor: isDarkMode ? "#4A5BA0" : undefined,
              "&:hover": {
                backgroundColor: isDarkMode ? "#3D4A85" : undefined,
              },
            }}
            variant="contained"
            color={isDarkMode ? "inherit" : "primary"}
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>

      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;
