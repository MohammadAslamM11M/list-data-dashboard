import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";

const Home = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ display: "flex" }}>
                <Sidebar />
                <Dashboard />
            </Box>
        </>
    );
};

export default Home;
