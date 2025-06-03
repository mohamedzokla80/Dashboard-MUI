import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from './data';
import Header from "../../components/Header";

const Invoices = () => {
    return (
        <Box>
            
        <Header title="INVOICES" subTitle="List of Invoice Balances" />
  
  
        <Box sx={{ height: 600, mx: "auto" }}>
            <DataGrid
            checkboxSelection
                rows={rows}
                
                // @ts-ignore
                columns={columns}
                sx={{
                    "& .MuiDataGrid-cell": {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                }}
            />
        </Box>
    </Box>
    )
}

export default  Invoices;