'use client'
import React, { useEffect, useState } from "react"
import ButtonPanel from "./ButtonPanel";
import TrackPanel from "./TrackPanel";
import Box from "@mui/material/Box";
import { track, user } from "../page";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

interface MusicPanelProps {
    user: user;
    toptracks: track[];
}

export default function MusicPanel(props: MusicPanelProps) {
    return (
        <div>
            <Box sx={{
                width: 550,
                height: 700,
                backgroundColor: '#c682b0',
                borderRadius: '16px',
            }}>
                <Grid container justifyContent="center">
                    <p>{props.user.user.name}'s mp3</p>
                </Grid>
                <TrackPanel {...{ user: props.user.user.name, tracks: props.user.user.track_count, toptracks: props.toptracks }}></TrackPanel>
                <Grid container sx={{ marginTop: '10%' }}>
                <ButtonPanel></ButtonPanel>
                </Grid>
            </Box>
        </div>
    )
}