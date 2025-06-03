import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
    AdminPanelSettingsOutlined,
    LockOpenOutlined,
    SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

    const accessColors = {
        Admin: isDarkMode ? "#8B0000" : "#A52A2A", // Dark Red in dark mode, Brownish Red in light mode
        Manager: isDarkMode ? "#003366" : "#1E3A5F", // Deep Navy Blue in dark mode, Muted Blue in light mode
        User: isDarkMode ? "#2F4F4F" : "#556B2F", // Dark Slate Gray in dark mode, Olive Green in light mode
    };

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 33,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "name",
            headerName: "Name",
            align: "center",
            headerAlign: "center",
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        { 
            field: "age", 
            headerName: "Age", 
            align: "center", 
            headerAlign: "center" 
        },
        {
            field: "phone",
            headerName: "Phone",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "access",
            headerName: "Access",
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        sx={{
                            p: "5px",
                            width: "99px",
                            borderRadius: "4px",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "0 auto",
                            gap: "4px",
                            backgroundColor: accessColors[access] || "#ccc",
                        }}
                    >
                        {access === "Admin" && (
                            <AdminPanelSettingsOutlined
                                sx={{ color: "#fff" }}
                                fontSize="small"
                            />
                        )}

                        {access === "Manager" && (
                            <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
                        )}

                        {access === "User" && (
                            <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
                        )}

                        <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box>
              <Header title={"TEAM"} subTitle={"Managing the Team Members"} />
            <Box sx={{ height: 600, mx: "auto" }}>
                <DataGrid
                    rows={rows}
                    // @ts-ignore
                    columns={columns}
                    sx={{
                        "& .MuiDataGrid-cell": {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    }}
                />
            </Box>
        </Box>
    );
};

export default Team;
