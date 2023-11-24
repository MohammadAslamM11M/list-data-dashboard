import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ListData from "../../ListData/ListData";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    return (
        <Box sx={{ flexGrow: 1, marginTop: "80px" }}>
            <Grid container spacing={1} className={styles.cardmargin}>
                <Grid item xs={12} md={12} className={styles.statsCard}>
                    <ListData />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
