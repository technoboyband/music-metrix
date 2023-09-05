'use client'
import React, { useEffect, useState } from "react"
import ButtonPanel from "./ButtonPanel";
import TrackPanel from "./TrackPanel";
import Box from "@mui/material/Box";
import { track, user } from "../page";
import Grid from "@mui/material/Grid";

interface MusicPanelProps {
    user: user;
    toptracks: track;
}

export default function MusicPanel(props: MusicPanelProps) {
    return (
        <div>
            <Box sx={{
                width: 600,
                height: 700,
                backgroundColor: 'primary.light',
            }}>
                <Grid container justifyContent="center">
                    <p>mp3</p>
                </Grid>
                <TrackPanel {...{ user: props.user.user.name, tracks: props.user.user.track_count, toptracks: props.toptracks }}></TrackPanel>
                <ButtonPanel></ButtonPanel>
            </Box>
        </div>
    )
}