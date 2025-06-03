import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import { columns, rows } from "./data";
import Header from "../../components/Header";

const Contacts = () => {
    const theme = useTheme(); // اكتشاف وضع الثيم

    return (
        <Box>
            <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />

            <Box sx={{ height: 600, mx: "auto" }}>
                <DataGrid
                    slots={{
                        toolbar: GridToolbar,
                    }}
                    rows={rows}
                    // @ts-ignore
                    columns={columns}
                    sx={{
                        "& .MuiDataGrid-cell": {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        },
                        "& .MuiDataGrid-toolbarContainer": {
                            backgroundColor: theme.palette.mode === "dark" ? "#4A5BA0" : "inherit", // تعديل لون شريط الأدوات
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default Contacts;
